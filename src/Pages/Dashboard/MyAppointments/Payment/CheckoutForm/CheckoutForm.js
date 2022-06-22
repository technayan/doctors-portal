import React, {useState} from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect } from 'react';


const CheckoutForm = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

    const {_id, treatment, patientName, patientEmail, fee} = appointment;

    // client side:
    useEffect(() => {
        if(fee) {
            fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(appointment)
            })
            .then(res => res.json())
            .then(data => {
                if(data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                };
            })
        }
    }, [fee]);
    
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');

        setSuccess('');
        setTransactionId('');

        setProcessing(true);

        // Confirm Card Payment
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: patientEmail,
                },
              },
            },
        );
        
        if(intentError) {
            setProcessing(false)
            setCardError(intentError?.message);
        } else {
            setCardError('');
            setSuccess('Congratulations! Your payment is successful.');
            setTransactionId(paymentIntent.id);

            // Store Payment on Database
            const payment = {
                treatmentId: _id,
                treatment,
                patientName,
                patientEmail,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/bookings/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                setProcessing(false);
                console.log(data);
            })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h4 className='font-bold mb-3'>Card Info :</h4>
                <CardElement className='border-2 p-2 rounded-lg'
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <div className='text-right mt-5'>
                    <button className='btn bg-primary px-5 text-white' type="submit" disabled={!stripe || !clientSecret || success}>
                        Pay
                    </button>
                </div>
            </form>
            {
                cardError && <p className='text-error'>{cardError}</p>
            }
            {
                success && <>
                    <p className='text-green-500'>{success}</p>
                    <p>Your TransactionID is <span className='text-secondary font-bold'>{transactionId}</span></p>
                </>
            }
        </>
    );
};

export default CheckoutForm;