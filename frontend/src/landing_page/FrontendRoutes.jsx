import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import Navbar from './Navbar'
import HomePage from './home/HomePage';
import Signup from './signup/Signup'
import Login from './signup/Login';
import AboutPage from './about/About'
import ProductPage from './products/ProductPage'
import PricingPage from './pricing/PricingPage'
import SupportPage from './support/SupportPage'
import Footer from './Footer'
import Equity from './pricing/ChargesTables/Equity';
import Currency from './pricing/ChargesTables/Currency';
import Commodity from './pricing/ChargesTables/Commodity';
import NotFound from './NotFound';

const FrontendRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/products' element={<ProductPage />} />
                <Route path='/pricing' element={<PricingPage />} >
                    <Route path='tab-equity' element={<Equity />} />
                    <Route path='tab-currency' element={<Currency />} />
                    <Route path='tab-commodity' element={<Commodity />} />
                </Route>
                <Route path='/support' element={<SupportPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default FrontendRoutes