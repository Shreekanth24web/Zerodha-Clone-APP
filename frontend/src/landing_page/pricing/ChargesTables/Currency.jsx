function Currency() {
    return ( 
        
        <div className="container">
            <div className="row mt-3">
                
                <div className="table-responsive outer-border">

                    <table className="table table-borderless table-hover align-middle table-hover plain-table" >
                        <thead>
                            <tr>
                                <th> &nbsp; &nbsp;</th>
                                <th>Currency futures</th>
                                <th>Currency options</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>Brokerage</td>
                                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                                <td>
                                   ₹ 20/executed order
                                </td> 
                            </tr>
                            <tr className="table-light">
                                <td>STT/CTT</td>
                                <td>No STT</td>
                                <td>
                                   No STT
                                </td> 
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>NSE: 0.00035% <br />
                                    BSE: 0.00045%</td>
                                <td>
                                    NSE: 0.0311% <br />
                                    BSE: 0.001%
                                </td>
                            </tr>
                            <tr className="table-light">
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>
                                    18% on (brokerage + SEBI charges + transaction charges)
                                </td>
                            </tr>

                            <tr>
                                <td>SEBI charges</td>
                                <td>₹10 / crore</td>
                                <td>
                                    ₹10 / crore
                                </td>
                            </tr>

                            <tr className="table-light">
                                <td>Stamp charges</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                                <td>
                                    0.0001% or ₹10 / crore on buy side
                                </td> 
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
     );
}

export default Currency;