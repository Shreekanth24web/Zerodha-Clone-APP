import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import { useState } from 'react';
function Navbar() {
    const [menu, setMenu] = useState(0)

    const handlMenuClick = (idx)=>{
        console.log(idx)
        setMenu(idx)
    }

    const menuNav = "ment-text";
    const activeMenuNav = 'menu-text menu-selected'
    return (
         
            <nav className="navbar navbar-expand-lg border-bottom p-3 z-1 position-sticky top-0 Nav-bg-color">

                <div className="container px-5">
                    <Link to='/' className="navbar-brand "  >
                        <img src="media/Images/logo.svg" alt="logo_IMG_ERR"   style={{width:"25%"}} />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">  

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li className="nav-item">
                                <Link to='/signup' onClick={()=>handlMenuClick(1)} className= "nav-link" aria-current="page" >
                                    <p className={menu === 1? activeMenuNav: menuNav}>Signup</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about'  onClick={()=>handlMenuClick(2)}className="nav-link" >
                                    <p className={menu === 2? activeMenuNav: menuNav}>About</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products' onClick={() => handlMenuClick(3)}className="nav-link " aria-current="page" >
                                <p className={menu === 3? activeMenuNav: menuNav}>Products</p>
                                     
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/pricing' onClick={() => handlMenuClick(4)}className="nav-link" >
                                 <p className={menu === 4? activeMenuNav: menuNav}>Pricing</p>
                                     
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/support' onClick={() => handlMenuClick(5)}className="nav-link" >
                                 <p className={menu === 5? activeMenuNav: menuNav}>Support</p>
                                     
                                </Link>
                            </li>
                              
                        </ul>
                    </div>
                </div>
            </nav>
       
    );
}

export default Navbar;