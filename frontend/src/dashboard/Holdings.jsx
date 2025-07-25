import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Dashboard/holdings.css' 
import { VerticalGraph } from './VerticalGraph';

function Holdings() {
    const [allHoldings, setAllHoldings] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4001/allHoldings").then((res) => { 
            setAllHoldings(res.data)
        })
    }, [])

    const totalInvestment = allHoldings.reduce((sum, stock) => {
        return sum + (stock?.qty || 0) * (stock?.avg || 0);
    }, 0);

    const currentValue = allHoldings.reduce((sum, stock) => {
        return sum + (stock?.qty || 0) * (stock?.price || 0);
    }, 0);


    const profitAndLoss = currentValue - totalInvestment
    const totalPLPercetage = (profitAndLoss / totalInvestment) * 100

    const isTotalProfit = profitAndLoss >= 0;
    const totalPLClass = isTotalProfit ? "profit" : "loss"


    
    const labels = allHoldings.map((stockName)=> stockName["name"]);
    
     const data = {
      labels,
      datasets: [
        {
          label: 'Stock Price',
          data: allHoldings.map((stockPrice) => stockPrice.avg ),
          backgroundColor: '#ff6384',
        },
        {
          label: 'Current Price',
          data: allHoldings.map((curPrice) => curPrice.price),
          backgroundColor: '#35a2eb',
        },
      ],
    };

    return (
        <div>
            <h3 className="Holdings-title">Holdings ({allHoldings.length})</h3>

            <div className="Holdings-table">
                <table>
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>Live Price</th>
                            <th>Cur. value</th>
                            <th>P&L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>
                    </thead>

                    <tbody>

                        {allHoldings.map((item, i) => { 
                            const curValue = item.price * item.qty;
                            const isProfit = curValue - item.avg * item.qty >= 0.0;
                            const profClass = isProfit ? "profit" : "loss";
                            const dayClass = item.isLoss ? "loss" : "profit"
                            return (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.avg}</td>
                                    <td>{item.price}</td>
                                    <td>{curValue}</td>
                                    <td className={profClass}>
                                        {(curValue - item
                                            .avg * item.qty).toFixed(2)
                                        }
                                    </td>
                                    <td className={profClass}>{item.net}</td>
                                    <td className={dayClass}>{item.day}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>

    
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                    <div class="col">
                        <div class="card h-100">

                            <div class="card-body">
                                <h5 class="card-title">Total investment</h5>
                                <h5 className='card-text mt-3' style={{ fontWeight: '500' }}>
                                    ₹ {totalInvestment.toLocaleString("en-IN")}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">

                            <div class="card-body">
                                <h5 class="card-title">Current value</h5>
                                <h5 className='card-text mt-3' style={{ fontWeight: '500' }}>
                                    ₹ {currentValue.toLocaleString("en-IN")}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">

                            <div class="card-body">
                                <h5 class="card-title">P&L</h5>
                                <h5 style={{ fontWeight: '500' }} className={totalPLClass}>
                                    ₹ {profitAndLoss.toLocaleString('en-IN')} <span className='mt-1' style={{ fontSize: '14px' }}>({totalPLPercetage.toFixed(2)}%)</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <VerticalGraph data={data}/>
        </div>
    );
}

export default Holdings;