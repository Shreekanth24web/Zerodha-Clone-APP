import React from 'react'
import '../../styles/Home/trust.css'
function Trust() {
    return (
        <div className="container">

            <div className="row p-5 trust-section">

                <div className="col-6 px-5 trust-text-section">
                    <h2 className='mb-5 px-5'>Trust with confidence</h2>
                    <div className='mb-5'>
                        <h4 className='px-5'>Customer-first always</h4>
                        <p className='px-5 text-muted'>
                            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                        </p>
                    </div>
                    <div className='mb-5'>
                        <h4 className='px-5'>No spam or gimmicks</h4>
                        <p className='px-5 text-muted'>
                            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#">Our philosophies.</a>
                        </p>
                    </div>
                    <div className='mb-5'>
                        <h4 className='px-5 '>
                            The Zerodha universe
                        </h4>
                        <p className='px-5 text-muted'>
                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                        </p>
                    </div>
                    <div>
                        <h4 className='px-5'>
                            Do better with money
                        </h4>
                        <p className='px-5 text-muted'>
                            With initiatives like <a href="#">Nudge</a> and <a href="#">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.
                        </p>
                    </div>
                </div>

                <div className="col-6  d-flex flex-column align-items-center ecosystem-img">
                    <a href="#">
                        <img src="media/Images/ecosystem.png" alt="ecosystem_IMG_Err" className='mb-4 ' />
                    </a>

                    <div className="d-flex gap-5 mt-5 align-items-center flex-column flex-md-row ecosystem-text-section" >
                        <a href="#">
                            <p>Explore our products &nbsp;  <i class="fa-solid fa-arrow-right"></i></p>
                        </a>
                        <a href="#">
                            <p>Try Kite demo &nbsp; <i class="fa-solid fa-arrow-right"></i> </p>
                        </a>
                    </div>
                </div>

                <div className='p-5 text-center press-logos'>
                    <a href="#">
                        <img src="media/Images/pressLogos.png" alt="pressLogos_IMG_ERR" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Trust;