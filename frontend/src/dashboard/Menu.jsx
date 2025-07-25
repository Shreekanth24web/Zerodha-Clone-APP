import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Dashboard/menu.css';

function Menu() {

    const [selectedMenu, setSelectedMenu] = useState(0)
    const [profile, setProfile] = useState(null)

    const handleClick = (index) => {
        setSelectedMenu(index)
    }

    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (!user) {
            navigate('/');
        } else {
            setProfile(user);
        }
    }, [])

    const menuClass = 'menu';
    const activeMenuClass = 'menu selected'

    const handleLogout = () => {
        localStorage.clear();
        setSelectedMenu(5)
        navigate("/", { replace: true });
    }

    return (
        <div className="menu-container">

            <div className="kit-logo">
                <img src="/media/Images/logo.png" alt="kit_logo_IMG_ERR" style={{ width: '10%' }} />
            </div>

            <div className="menus mt-3">
                <ul>
                    <li>
                        <Link to="/dashboard" onClick={() => { handleClick(0) }} style={{ textDecoration: "none" }}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/orders" onClick={() => handleClick(1)} style={{ textDecoration: 'none' }} >
                            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/holdings" onClick={() => { handleClick(2) }} style={{ textDecoration: "none" }}>
                            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/positions" onClick={() => handleClick(3)} style={{ textDecoration: 'none' }} >
                            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/funds" onClick={() => { handleClick(4) }} style={{ textDecoration: "none" }}>
                            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
                        </Link>
                    </li>
                    <li>
                        <p onClick={handleLogout} style={{ textDecoration: 'none', fontWeight: '800' }} >
                            <p className={selectedMenu === 5 ? activeMenuClass : menuClass} style={{ fontSize: '15px', fontWeight: '700',cursor:'pointer' }}>LogOut</p>
                        </p>
                    </li>
                </ul>
                <hr className="menu-hr" />
            </div>

            {profile && (
                <div className="profile">

                    <p className="avatar fw-bold">{profile.username[0].toUpperCase()}</p>
                    <p className="username">{profile.username.toUpperCase()}</p>

                </div>
            )}

        </div>
    );
}

export default Menu;