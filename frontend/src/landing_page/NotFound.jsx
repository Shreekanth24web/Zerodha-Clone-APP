import { Link } from "react-router-dom";

function NotFound() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className="row text-center hero-section">
                <h1 className='mt-3 fs-2'>
                    404 NOt Found
                </h1>
                <p className='fs-5 mt-2 '>
                    We couldn’t find the page you were looking for.  <Link to='/' className="link-underline link-underline-opacity-0">Visit Zerodha’s home page</Link>
                </p>
                
            </div>
        </div>
     );
}

export default NotFound;