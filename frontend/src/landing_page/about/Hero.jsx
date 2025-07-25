import '../../styles/About/hero.css'
function Hero() {
    return (
        <div className="container">
            <div className="row p-5 about-hero-section">
                <h1 className="text-center fs-2 mt-5 mb-5" >
                    We pioneered the discount broking model in India.
                    <br />  Now, we are breaking ground with our technology.
                </h1>
            </div>
            <hr className='mb-5'/>
            <div className="row p-5 about-para-section text-justify mb-5">
                <div className="col">
                    <p className='px-5'>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p className='px-5'>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>
                     <p className='px-5'>
                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className="col ">
                     <p className='px-5 '>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <p className='px-5'>
                       <a href="#">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                     <p className='px-5'>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="#">blog</a> or see what the media is <a href="#">saying about us</a> or learn more about our business and product <a href="#">philosophies.</a>.
                    </p>
                </div>
                 
            </div>
        </div>
    );
}

export default Hero;