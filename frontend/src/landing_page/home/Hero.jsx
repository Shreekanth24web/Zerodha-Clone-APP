import React from 'react'
import '../../styles/Home/hero.css';
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className="row text-center hero-section">
                <img src="media/Images/homeHero.png" alt="homeHero-Img_Error" className='mb-5 mt-3 hero-img' />
                <h1 className='mt-3'>Invest in everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to='/signup' className='btn  col-2  m-auto mt-4  hero-btn'>Sign up for free</Link>
            </div>
        </div>
    );
}

export default Hero;