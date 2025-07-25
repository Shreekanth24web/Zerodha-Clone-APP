import { Link } from 'react-router-dom'
import '../styles/Dashboard/funds.css'
function Funds() {
    return (
        <div className='container'>

            <div className="row funds">
                <div className="col">
                    <Link className="btn btn-green">Add funds</Link>
                    <Link className="btn btn-blue mx-3">Withdraw</Link>
                    <p className='mx-3'>*Instant, zero-cost fund transfers with UPI </p>
                </div>
            </div>

            <div className="row d-flex align-items-center funds-table">
                <p className='funds-text fs-3'>Equity</p>
                <div className="col">

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
                <div className="col ">
                    <div className="commodity">
                        <p>You don't have a commodity account</p>
                        <Link className="btn btn-blue">Open Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Funds;