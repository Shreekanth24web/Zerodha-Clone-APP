import '../../styles/Products/universe.css'
import {Link} from 'react-router-dom';
function Universe() {
    return (
        <div className="container">

            <div className="row text-center">
                <h1 className="mt-5 fs-2" style={{ color: '#424242', fontWeight: '500' }}>The Zerodha Universe</h1>
                <p className="mt-2" style={{ fontSize: '1.1rem', color: '#424242' }}>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>

            <div className="row d-flex align-items-center p-5 ">
                <div className="col universe-section">
                    <div className='text-center'>
                        <img src="media/Images/zerodhaFundhouse.png" alt="ZerodhaFundhouse_IMG_ERR" style={{ width: "50%" }} className="mx-5 mb-3" />
                    </div>
                    <p className="px-5 text-center" style={{ fontSize: "12px", color: '#9b9b9b', fontWeight: '500' }}>
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className="col universe-section">
                    <div className='text-center'>
                        <img src="media/Images/sensibullLogo.svg" alt="ZerodhaFundhouse_IMG_ERR" style={{ width: "50%" }} className="mx-5 mb-3" />
                    </div>
                    <p className="px-5 text-center" style={{ fontSize: "12px", color: '#9b9b9b', fontWeight: '500' }}>
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col universe-section">
                    <div className='text-center'>
                        <img src="media/Images/tijoriLogo.svg" alt="ZerodhaFundhouse_IMG_ERR" style={{ width: "50%" }} className="mx-5 mb-3" />
                    </div>

                    <p className="px-5 text-center" style={{ fontSize: "12px", color: '#9b9b9b', fontWeight: '500' }}>
                        Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>

            </div>

            <div className="row d-flex align-items-center px-5 mt-n5">
                <div className="col universe-section">
                    <div className='text-center'>
                        <img src="media/Images/streakLogo.png" alt="ZerodhaFundhouse_IMG_ERR" style={{ width: "50%" }} className="mx-5 mb-3" />
                    </div>
                    <p className="px-5 text-center" style={{ fontSize: "12px", color: '#9b9b9b', fontWeight: '500' }}>
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className="col universe-section">
                    <div className='text-center'>
                        <img src="media/Images/smallcaseLogo.png" alt="ZerodhaFundhouse_IMG_ERR" style={{ width: "50%" }} className="mx-5 mb-3" />
                    </div>
                    <p className="px-5 text-center" style={{ fontSize: "12px", color: '#9b9b9b', fontWeight: '500' }}>
                        Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col universe-section">
                    <div className='text-center'>
                        <img src="media/Images/dittoLogo.png" alt="ZerodhaFundhouse_IMG_ERR" style={{ width: "45%" }} className="mx-5 mb-3" />
                    </div>
                    <p className="px-5 text-center" style={{ fontSize: "12px", color: '#9b9b9b', fontWeight: '500' }}>
                        Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>

                <div className="row mt-5">
                    <Link to='/signup' className='btn btn-md col-2 mb-5  m-auto mt-4  hero-btn'>Sign up for free</Link>
                </div>
            </div>

        </div>
    );
}

export default Universe;