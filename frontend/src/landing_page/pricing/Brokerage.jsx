function Brokerage() {
    return ( 
        <div className="container">
            <div className="row p-5 text-center mb-5">
            <div className="col mt-3">
                <img src="media/Images/pricing-eq.svg" alt="pricing-eq_IMG_ERR" style={{width:"70%"}} />
                <h3 style={{color:"#424242"}} className="mb-4">Free equity delivery</h3>
                <p style={{color:"#666", lineHeight:"1.8",fontSize:'1.1rem'}}>
                    All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                </p>
            </div>
            <div className="col mt-3">
                <img src="media/Images/other-trades.svg" alt="other-trades_IMG_ERR" style={{width:"70%"}} />
                <h3  style={{color:"#424242"}} className="mb-4">Free equity delivery</h3>
                <p style={{color:"#666", lineHeight:"1.8",fontSize:'1.1rem'}}>
                    Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                </p>
            </div>
            <div className="col mt-3">
                <img src="media/Images/pricing-eq.svg" alt="pricing-eq_IMG_ERR" style={{width:"70%"}}/>
                <h3  style={{color:"#424242"}} className="mb-4">Free equity delivery</h3>
                <p style={{color:"#666", lineHeight:"1.8",fontSize:'1.1rem'}}>
                    All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                </p>
            </div>
        </div>
        </div>
     );
}

export default Brokerage;