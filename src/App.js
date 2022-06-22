import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments/MyAppointments';
import MyReviews from './Pages/Dashboard/MyReviews/MyReviews';
import AllUsers from './Pages/Dashboard/AllUsers/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors/ManageDoctors';
import Payment from './Pages/Dashboard/MyAppointments/Payment/Payment';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointments />} />
          <Route path='reviews' element={<MyReviews />} />
          <Route path='payment/:id' element={<Payment />} />
          <Route path='users' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
          <Route path='add-doctor' element={<RequireAdmin><AddDoctor /></RequireAdmin>} />
          <Route path='manage-doctors' element={<RequireAdmin><ManageDoctors /></RequireAdmin>} />
        </Route>
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

      {/* Toastify */}
      <ToastContainer />
    </div>
  );
}

export default App;
