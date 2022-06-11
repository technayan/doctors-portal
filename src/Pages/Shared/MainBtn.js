import React from 'react';

const MainBtn = ({children}) => {
    return (
        <button className="btn bg-gradient-to-r from-primary to-secondary border-0 text-white hover:bg-gradient-to-l">{children}</button>
    );
};

export default MainBtn;