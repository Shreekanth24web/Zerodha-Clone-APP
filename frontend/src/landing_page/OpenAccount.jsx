import React from 'react'
import {Link} from 'react-router-dom';
function OpenAccount() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className="row text-center hero-section">
                <h1 className='mt-3 fs-2'>
                    Open a Zerodha account
                </h1>
                <p className='fs-5 mt-2'>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <Link to='/signup' className='btn  col-2 mb-5  m-auto mt-4  hero-btn'>Sign up for free</Link>
            </div>
        </div>
     );
}

export default OpenAccount;