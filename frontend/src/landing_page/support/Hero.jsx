import '../../styles/Support/hero.css'
function Hero() {
    return (
        <div style={{ background: '#387ed1' }}>
            <div className="container p-5" style={{ color: "white" }} >

                <div className="row px-5 d-flex justify-content-between" >
                    <div className=" d-flex justify-content-between mb-3" >
                        <h5 className='px-5'>Support Portal</h5>
                        <h5 className="border-bottom border-2 fw-normal py-1 ">
                            <a href="" className='text-decoration-none' style={{color:'#fff'}}>
                               Track tickets
                            </a>
                        </h5>

                    </div>
                </div>
                <div className="row px-5">
                    <div className="col-7">
                        <h4 className="mt-4 mb-4 px-5" style={{ fontWeight: "400" }}>Search for an answer or browse help topics to create a ticket</h4>

                        <div className="input-icon px-5">

                            <input className="form form-control mb-3 p-3 rounded-0 muted-placeholder" type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected ... " style={{ fontWeight: '400' }} />
                            <i className="fa-solid fa-search"></i>
                            
                        </div>


                        <div className="d-flex gap-4 px-5" style={{ fontSize: '1.1rem', cursor:'pointer' }}>
                            <p className="border-bottom border-2 fw-normal py-1 ">Track account opening</p>
                            <p className="border-bottom border-2 py-1">Track segment activation</p>
                            <p className="border-bottom border-2 py-1">Intraday margins</p>
                        </div>
                        <div className="px-5" style={{ fontSize: '1.1rem' ,cursor:'pointer'}}>
                            <p className="col-3 border-bottom border-2 py-1">Kite user manual</p>
                        </div>
                    </div>
                    <div className="col px-5 mt-4" style={{ fontSize: '1.1rem' }}>
                        <h4 style={{ fontWeight: "500" }}>Featured</h4>
                        <ol>
                            <li className="mb-3 ">
                                <a href="" style={{ color: '#fff' }}>Surveillance measure on scrips - June 2025</a>
                            </li>
                            <li>
                                <a href="" style={{ color: '#fff' }}>Offer for sale (OFS) – June 2025</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;