import React from 'react'
import '../../styles/Home/education.css'
function Education() {
    return ( 
        <div className="container ">
            <div className="row ">
                <div className="col-6 education-img ">
                    <img className='mx-5' src="media/Images/education.svg" alt="education_IMG_ERR" style={{width:'80%'}} />
                </div>
                <div className="col-6 mt-5 education-text">
                    <h1 className='fs-2 mb-4 mt-5 px-5'>Free and open market education</h1>
                    <p className='px-5'>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href="#" className='mb-4 mx-5'>
                        Varsity &nbsp; <i class="fa-solid fa-arrow-right"></i> 
                    </a>
                    <p className='mb-4 mt-4 px-5'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href="#" className='mb-4 mx-5'>
                       TradingQ&A &nbsp; <i class="fa-solid fa-arrow-right"></i> 
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Education;