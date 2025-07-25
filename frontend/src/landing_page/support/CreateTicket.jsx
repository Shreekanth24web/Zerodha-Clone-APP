import '../../styles/Support/createTicket.css'
function CreateTicket() {
    return (
        <div className="container p-5">
            <div className="row px-5">
                <h3 className="px-5" style={{ color: '#777', fontWeight: '400', fontSize: '1.4rem' }}>To create a ticket, select a relevant topic</h3>
            </div>

            <div className="row px-5 mt-4 create-ticket">

                <div className="col px-5">
                    <h4 className='mb-3'>
                        <a href="">
                            <i class="fa-solid fa-circle-plus"></i> &nbsp;
                            Account Opening
                        </a>
                    </h4>
                    <div className="px-5">

                        <h6>
                            <a href="">Resident individual</a>
                        </h6>
                        <h6>
                            <a href="">Minor</a>
                        </h6>
                        <h6>
                            <a href="">Non Resident Indian (NRI)</a>
                        </h6>
                        <h6>
                            <a href="">Company, Partnership, HUF and LLP</a>
                        </h6>
                        <h6>
                            <a href="">Glossary</a>
                        </h6>
                    </div>
                </div>

                <div className="col">
                    <h4 className='mb-3'>
                        <a href="">
                            <i class="fa-solid fa-user"></i> &nbsp;
                            Your Zerodha Account
                        </a>
                    </h4>
                    <div className="px-5">

                        <h6>
                            <a href="">Your Profile
                            </a>
                        </h6>
                        <h6>
                            <a href="">Account modification</a>
                        </h6>
                        <h6>
                            <a href="">Client Master Report (CMR) and Depository Participant (DP)</a>
                        </h6>
                        <h6>
                            <a href="">Nomination</a>
                        </h6>
                        <h6>
                            <a href="">Transfer and conversion of securities</a>
                        </h6>
                    </div>
                </div>
                <div className="col">
                    <h4 className='mb-3'>
                        <a href="">
                          <i class="fa-solid fa-chart-simple"></i>&nbsp;
                            Kite
                        </a>
                    </h4>
                    <div className="px-5">

                        <h6>
                            <a href="">IPO
                            </a>
                        </h6>
                        <h6>
                            <a href="">Trading FAQs</a>
                        </h6>
                        <h6>
                            <a href="">Margin Trading Facility (MTF) and Margins</a>
                        </h6>
                        <h6>
                            <a href="">Charts and orders</a>
                        </h6>
                        <h6>
                            <a href="">Alerts and Nudges</a>
                        </h6>
                        <h6>
                            <a href="">General</a>
                        </h6>
                    </div>
                </div>

            </div>

            <div className="row px-5 mt-4 mb-5 create-ticket">

                <div className="col px-5">
                    <h4 className='mb-3'>
                        <a href="">
                           <i class="fa-solid fa-credit-card"></i> &nbsp;
                            Funds
                        </a>
                    </h4>
                    <div className="px-5">

                        <h6>
                            <a href="">Add money</a>
                        </h6>
                        <h6>
                            <a href="">Withdraw money</a>
                        </h6>
                        <h6>
                            <a href="">Add bank accounts</a>
                        </h6>
                        <h6>
                            <a href="">eMandates</a>
                        </h6>
                    </div>
                </div>

                <div className="col">
                    <h4 className='mb-3'>
                        <a href="">
                         <i class="fa-solid fa-clipboard"></i> &nbsp;
                            Console
                        </a>
                    </h4>
                    <div className='px-5'>
                        <h6>
                            <a href="">Portfolio
                            </a>
                        </h6>
                        <h6>
                            <a href="">Corporate actions</a>
                        </h6>
                        <h6>
                            <a href="">Funds statement</a>
                        </h6>
                        <h6>
                            <a href="">Reports</a>
                        </h6>
                        <h6>
                            <a href="">Profile</a>
                        </h6>
                        <h6>
                            <a href="">Segments</a>
                        </h6>
                    </div>
                </div>
                <div className="col">
                    <h4 className='mb-3'>
                        <a href="">
                           <i class="fa-solid fa-coins"></i> &nbsp;
                            Coin
                        </a>
                    </h4>
                    <div className="px-5">

                        <h6>
                            <a href="">Mutual funds
                            </a>
                        </h6>
                        <h6>
                            <a href="">National Pension Scheme (NPS)</a>
                        </h6>
                        <h6>
                            <a href="">Features on Coin</a>
                        </h6>
                        <h6>
                            <a href="">Payments and Orders</a>
                        </h6>
                        <h6>
                            <a href="">General</a>
                        </h6>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default CreateTicket;