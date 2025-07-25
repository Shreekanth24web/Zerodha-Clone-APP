import { Routes, Route } from "react-router-dom"; 
import Funds from "../dashboard/Funds";
import Holdings from "../dashboard/Holdings";
import Orders from "../dashboard/Orders";
import Positions from "../dashboard/Positions";
import Summary from "../dashboard/Summary";
import WatchList from "../dashboard/WatchList";
import { GeneralContextProvider } from "../dashboard/GeneralContext";

import '../styles/Dashboard/dashboard.css'
function Dashboard() {

    return (
        <div className="dashboard-container">
            <GeneralContextProvider>
                <WatchList />
            </GeneralContextProvider >

            <div className="content">
                    <Routes>
                        <Route exact path='/' element={<Summary />} />
                        <Route path='orders' element={<Orders />} />
                        <Route path='holdings' element={<Holdings />} />
                        <Route path='positions' element={<Positions />} />
                        <Route path='funds' element={<Funds />} />  
                    </Routes>  
            </div>

        </div>
    );
}

export default Dashboard;