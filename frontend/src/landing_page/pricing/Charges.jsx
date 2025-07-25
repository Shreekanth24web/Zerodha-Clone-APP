import '../../styles/pricing/charges.css'
function Charges() {
    return (

        <div className="container px-5 mt-3">
            <div className="row px-5">
                <h3 style={{ color: '#424242', fontWeight: '500' }}>Charges explained</h3>
            </div>

            <div className="row charges-text-section">

                <div className="col mt-4">
                    <h5 className='px-5'>
                        Securities/Commodities transaction tax
                    </h5>
                    <p className='px-5'>
                        Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                    </p>
                    <p className='px-5'>
                        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                    </p>
                    <h5 className='px-5'>
                        Transaction/Turnover Charges
                    </h5>
                    <p className='px-5'>
                        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                    </p>
                    <p className='px-5'>
                        BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
                    </p>
                    <p className='px-5'>
                        BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
                    </p>
                    <p className='px-5'>
                        BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
                    </p>
                    <p className='px-5'>
                        BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                    </p>
                    <h5 className='px-5'>
                        Call & trade
                    </h5>
                    <p className='px-5'>
                        Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                    </p>
                    <h5 className='px-5'>
                        Stamp charges
                    </h5>
                    <p className='px-5'>
                        Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
                    </p>
                    <h5 className='px-5'>
                        NRI brokerage charges
                    </h5>
                    <ul className='px-5 mx-3' >
                        <li>₹100 per order for futures and options.</li>
                        <li>
                            For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            ₹500 + GST as yearly account maintenance charges (AMC) charges.
                        </li>
                    </ul>
                    <h5 className='px-5'>
                        Account with debit balance
                    </h5>
                    <p className='px-5'>
                        If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                    </p>
                    <h5 className='px-5'>
                        Charges for Investor's Protection Fund Trust (IPFT) by NSE
                    </h5>
                    <ul className='px-5 mx-3'>
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>
                            Options - ₹50 per crore + GST traded value (premium value).
                        </li>
                        <li>
                            Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.
                        </li>

                    </ul>
                    <h5 className='px-5'>
                        Margin Trading Facility (MTF)
                    </h5>
                    <ul className='px-5 mx-3'>
                        <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                        <li>
                            MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
                        </li>
                        <li>
                            MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.
                        </li>
                    </ul>
                </div>

                <div className="col mt-4 ">
                    <h5 className='px-5'>GST</h5>
                    <p className='px-5'>
                        Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
                    </p>
                    <h5 className='px-5'>SEBI Charges</h5>
                    <p className='px-5'>
                        Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
                    </p>
                    <h5 className='px-5'>DP (Depository participant) charges</h5>
                    <p className='px-5'>
                        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
                    </p>
                    <p className='px-5'>
                        Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.
                    </p>
                    <p className='px-5'>
                        Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                    </p>
                    <h5 className='px-5'>Pledging charges</h5>
                    <p className='px-5'>₹30 + GST per pledge request per ISIN.</p>
                    <h5 className='px-5'>AMC (Account maintenance charges)</h5>
                    <p className='px-5'>
                        For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="" className='text-decoration-none'>Click here</a>
                    </p>
                    <p className='px-5'>
                        For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="" className='text-decoration-none'>Click here</a>
                    </p>

                    <h5 className='px-5'>Corporate action order charges</h5>
                    <p className='px-5'>
                        ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.
                    </p>
                    <h5 className='px-5'>Off-market transfer charges</h5>
                    <p className='px-5'>₹25 per transaction.</p>
                    <h5 className='px-5'>Physical CMR request</h5>
                    <p className='px-5'>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
                    <h5 className='px-5'>Payment gateway charges</h5>
                    <p className='px-5'>₹9 + GST (Not levied on transfers done via UPI)</p>
                    <h5 className='px-5'>Delayed Payment Charges</h5>
                    <p className='px-5'>
                        Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.  <a href="" className='text-decoration-none'>Learn more</a>
                    </p>
                    <h5 className='px-5'>
                        Trading using 3-in-1 account with block functionality
                    </h5>
                    <ul className='px-5 mx-3'>
                        <li><span>Delivery & MTF Brokerage</span>: 0.5% per executed order.</li>
                        <li><span>Intraday Brokerage</span>: 0.05% per executed order.</li>
                    </ul>
                </div>
            </div>

            <div className="row px-5 mt-3 disclaimer-section mb-5">
                <h5 className='mb-3 fs-5'>Disclaimer</h5>
                <p className='mb-5'>
                    For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
                </p>
            </div>

            <div className="row px-5 ">
                <h4 className='mb-4' style={{color:'#424242'}}>Charges for account opening</h4>
                <div className="table-responsive outer-border mb-5">

                    <table className="table table-borderless table-hover align-middle table-hover plain-table" >
                        <thead>
                            <tr>
                                <th>Type of account</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody className='charges-table'>
                            <tr >
                                <td>Online account</td>
                                <td >
                                    <button className='btn btn-sm text-light bg-success'>Free</button>
                                </td>

                            </tr>
                            <tr className='table-light'>
                                <td>Offline account</td> 
                                <td>
                                    <button className='btn btn-sm text-light bg-success '>Free</button>
                                </td>

                            </tr>
                            <tr>
                                <td>NRI account (offline only)</td>
                                <td>₹ 500</td>

                            </tr>
                            <tr className='table-light'>
                                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                <td>₹ 500</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

            <div className="row px-5 mt-5">
                <h4 className='mb-4' style={{color:'#424242'}}>Charges for optional value added services</h4>
                <div className="table-responsive outer-border">

                    <table className="table table-borderless table-hover align-middle table-hover plain-table" >
                        <thead>
                            <tr>

                                <th>Service</th>
                                <th>Billing Frquency</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>Tickertape</td>
                                <td>Monthly / Annual</td>
                                <td>Free: 0 | Pro: 249/2399</td>
                            </tr>
                           <tr className='table-light'>
                                <td>Smallcase</td>
                                <td>Per transaction</td>
                                <td>Buy & Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr >
                                <td>Kite Connect</td>
                                <td>Monthly</td>
                                <td>Connect: 500 | Historical: 500</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>


        </div>
    );
}

export default Charges;