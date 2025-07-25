import Menu from "./Menu";
import '../styles/Dashboard/topbar.css';

function TopBar() {
    return (
        <div className="navbar navbar-expand-lg navbar-light border-bottom topbar-container">
            <div className="indices-container">
                <div className="nifty">
                    <p className="index">NIFTY 50</p>
                    <p className="index-points">{100.2}</p>
                    <p className="percent"></p>
                </div>

                <div className="sensex">
                    <p className="index">SENSEX</p>
                    <p className="index-points">{440.2}</p>
                    <p className="percent"></p>
                </div>
            </div>
            <div>
                <Menu />
            </div>
        </div>

    );
}

export default TopBar;