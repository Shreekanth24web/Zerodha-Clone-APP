function Commodity() {
    return ( 
      
        <div className="container">
            <div className="row mt-3">
                <div className="table-responsive outer-border">
                    <table className="table table-borderless table-hover align-middle  table-hover plain-table">
                        <thead >
                            <tr>
                                <th> &nbsp; &nbsp;</th>
                                <th>Commodity futures</th>
                                <th>Commodity options</th> 
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
                            <tr className="table table-light">
                                <td>STT/CTT</td>
                                <td>0.01% on sell side (Non-Agri)</td>
                                <td>0.05% on sell side</td> 
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>MCX: 0.0021% <br />
                                    NSE: 0.0001%</td>
                                <td>
                                    MCX: 0.0418% <br />
                                    NSE: 0.001%
                                </td>
                            </tr>
                           <tr className="table table-light">
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>
                                    18% on (brokerage + SEBI charges + transaction charges)
                                </td>
                            </tr>

                            <tr>
                                <td>SEBI charges</td>
                                <td>
                                 <span className="commodity-agri">Agri:</span> <br />₹1/ crore <br />
                                 <span className="commodity-agri">Non-agri:</span> <br /> ₹10 / crore
                                 </td>
                                <td>
                                 ₹10 / crore
                                </td>
                            </tr>

                            <tr className="table table-light">
                                <td>Stamp charges</td>
                                <td>0.002% or ₹200 / crore on buy side</td>
                                <td>
                                    0.003% or ₹300 / crore on buy side
                                </td> 
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
     );
}

export default Commodity;