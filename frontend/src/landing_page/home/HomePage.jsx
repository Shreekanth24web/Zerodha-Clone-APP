import React from 'react'
import Hero from './Hero';
import Trust from './Trust'; 
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount'; 


function HomePage() {
    return (
        <>
            <Hero />
            <Trust /> 
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;