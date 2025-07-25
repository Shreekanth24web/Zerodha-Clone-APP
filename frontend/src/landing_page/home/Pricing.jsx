import React from 'react'
import '../../styles/Home/pricing.css';
function Pricing() {
    return (
        <div className="container px-5">
            <div className="row px-5">

                <div className="col  pricing-text-section">
                    <h2 className='mb-4 px-5'>Unbeatable  pricing</h2>
                    <p className='px-5 text-muted'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a className='px-5' href="#">See pricing &nbsp;<i class="fa-solid fa-arrow-right"></i> </a>
                </div>

                <div className="col mt-4 d-flex gap-5 justify-content-center align-items-center flex-column flex-md-row pricing-img">
                    <div className="row pricing-img">
                        <img  src="media/Images/pricing0.svg" alt="pricing0_IMG_ERR" />
                        <p className='px-5 text-muted'> Free account opening</p>
                    </div>
                    <div className="row mt-3">
                        <img className='w-75' src="media/Images/pricing0.svg" alt="pricing0_IMG_ERR" />
                        <p className='px-5 text-muted'>Free equity delivery  and direct mutual funds</p>
                    </div>
                    <div className="row">
                        <img src="media/Images/pricing-other-trades.svg" alt="pricing-other-trades_IMG_ERR" />
                        <p className='px-5 text-muted'>Intraday and F&O</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;