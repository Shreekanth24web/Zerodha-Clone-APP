import { useEffect, useState } from 'react';
import '../styles/Dashboard/summary.css';
import axios from 'axios';
import { PieChart } from './PieChart';

function Summary() {
    const [summaryData, setSummaryData] = useState([])
    const [userName, setUserName] = useState(null)


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/allHoldings`)
            .then((res) => {
                setSummaryData(res.data)
            })
            .catch((err) => console.error("Error fetching holdings:", err));
    }, [])
    const totalInvestment = summaryData.reduce((sum, stock) => {
        return sum + (stock?.qty || 0) * (stock.avg || 0)
    }, 0)

    const currentValue = summaryData.reduce((sum, stock) => {
        return sum + (stock?.qty || 0) * (stock?.price || 0);
    }, 0);

    const profitAndLoss = currentValue - totalInvestment
    const totalPLPercetage = (profitAndLoss / totalInvestment) * 100

    const isTotalProfit = profitAndLoss >= 0;
    const totalPLClass = isTotalProfit ? "profit" : "loss"

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        setUserName(user);
    }, [])
    function capitalizeFirstLetter(name) {
        if (!name) return "";
        return name.charAt(0).toUpperCase() + name.slice(1);
    }


 
    const data = {
        datasets: [
            {
                data: [totalInvestment, currentValue, profitAndLoss],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235 )',
                    'rgb(75, 192, 192 )',
                ],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(75, 192, 192)',
                    
                ],
                backgroundColor: [
                    'rgba(255, 97, 131, 0.7)',
                    'rgba(54, 162, 235, 0.70)',
                    'rgba(75, 192, 192, 0.70)', 
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(75, 192, 192)',  
                ],
                borderWidth: 1,
                
            },
        ],
        labels: ["Total Investment", 'Current Value', "P&L"],
    };

    return (
        <div>

            <div className="username">
                <h6>Hi, {userName?.username ? capitalizeFirstLetter(userName.username) : "User"}!</h6>
                <hr className="divider" />
            </div>
            <div className="section">

                <span>
                    <p style={{ fontWeight: '500', color: '#424242' }}>Holdings ({summaryData.length})</p>
                </span>
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">

                    <div className="col mb-5">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title">Total investment</h5>
                                <h5 className='card-text mt-3' style={{ fontWeight: '500' }}>
                                    ₹ {totalInvestment.toLocaleString("en-IN")}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title">Current value</h5>
                                <h5 className='card-text mt-3' style={{ fontWeight: '500' }}>
                                    ₹ {currentValue.toLocaleString("en-IN")}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title">P&L</h5>
                                <h5 style={{ fontWeight: '500' }} className={totalPLClass}>
                                    ₹ {profitAndLoss.toLocaleString('en-IN')} <span className='mt-1' style={{ fontSize: '14px' }}>({totalPLPercetage.toFixed(2)}%)</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PieChart data={data} />

        </div>
    );
}

export default Summary;