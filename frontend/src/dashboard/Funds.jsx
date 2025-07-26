import { Link } from 'react-router-dom'
import '../styles/Dashboard/funds.css'
function Funds() {
    return (
        <div className='container'>
            <div className="col funds text-end">

                <button className="btn btn-outline-success fw-bold">
                    Add funds
                </button>

                <button className="btn btn-outline-primary mx-3 fw-bold">
                    Withdraw
                </button>

                <p className='text-muted'>
                    *Instant, zero-cost fund transfers with UPI
                </p>

            </div>
            <div className="row d-flex align-items-center funds-table">

                <div className="col">
                    <p className='funds-text fs-3 '>Equity</p>

                    <ul className="list-group list-group-item-warning">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Available margin
                            <span className='fw-bold'>4,043.10</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Used margin
                            <span className='fw-bold'>3,757.30</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Available cash
                            <span className='fw-bold'>4,043.10</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Opening Balance
                            <span className='fw-bold'>4,043.10</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Opening Balance
                            <span className='fw-bold'>3736.40</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Payin
                            <span className='fw-bold'>4064.00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            SPAN
                            <span className='fw-bold'>0.00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Delivery margin
                            <span className='fw-bold'>0.00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Exposure
                            <span className='fw-bold'>0.00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Options premium
                            <span className='fw-bold'>0.00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Collateral (Liquid funds)
                            <span className='fw-bold'>0.00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Collateral (Equity)
                            <span className='fw-bold'>0.00</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Total Collateral
                            <span className='fw-bold'>0.00</span>
                        </li>
                    </ul>

                </div>

                <div className="col">
                    <div className="commodity text-center">
                        <p className='text-muted'>You don't have a commodity account</p>
                        <button to='#' className="btn btn-primary">
                            Open Account</button >
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Funds;