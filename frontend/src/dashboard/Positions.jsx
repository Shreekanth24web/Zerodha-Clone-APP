import { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/Dashboard/positions.css';

function Positions() {
    const [allPositions, setAllPositions] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4001/allPostions").then((res) => { 
            setAllPositions(res.data)
        })
    }, []);

    return (
        <div>
            <h3 className="positions-title">Postions ({allPositions.length})</h3>

            <div className="positions-table">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg.</th>
                            <th>LTP</th>
                            <th>P&L</th>
                            <th>Net Chg.</th>
                            <th>Day Chg.</th>
                        </tr>
                    </thead>

                    <tbody>

                        {allPositions.map((stock, i) => {
                            const curValue = stock.price * stock.qty;
                            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                            const profClass = isProfit ? "profit" : "loss";
                            const dayClass = stock.isLoss ? "loss" : "profit"
                            const netClass = stock.isLoss ? "profit" : "loss"
                            return (
                                <tr key={i}>
                                    <td>{stock.product}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.avg}</td>
                                    <td>{stock.price}</td>
                                    <td className={profClass}>
                                        {(curValue - stock
                                            .avg * stock.qty).toFixed(2)
                                        }
                                    </td>
                                    <td className={netClass}>{stock.net}</td>
                                    <td className={dayClass}>{stock.day}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Positions;