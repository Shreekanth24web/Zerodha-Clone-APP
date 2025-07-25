import '../../styles/Products/hero.css'
function Hero() {
    return ( 
       <div className="container">
        <div className="row text-center p-5 mt-5 mb-5 hero-section" style={{color:'#424242'}}>
            <h1 className="mb-3"  >Zerodha Products</h1>
            <h5 className="mb-4" style={{fontWeight:'400'}}>Sleek, modern, and intuitive trading platforms</h5>
            <h6 style={{fontWeight:'500'}}>Check out our <a href="#" className="text-decoration-none icon-link icon-link-hover" >investment offerings →</a></h6>
        </div>
        <hr />
       </div>
     );
}

export default Hero;