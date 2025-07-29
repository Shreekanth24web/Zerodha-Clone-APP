import '../../styles/About/team.css'
function Team() {
    return (
        <div className="container">

            <div className="row p-5 text-center">
                <h2 style={{ color: "#424242" }}>People</h2>
            </div>

            <div className="row px-5 team-section mb-5">

                <div className="col-6 text-center team-section-img">
                    <img src="media/Images/nithinKamath.jpg" alt="Nithin_IMG_ERR" className="rounded-circle" style={{ width: "50%" }} />
                    <h4 className="mt-2 " style={{ color: "#424242", fontWeight: "400" }}>Nithin Kamath</h4>
                    <h6 className="text-muted mb-5">Founder, CEO</h6>
                </div>

                <div className="col-6 team-text-section ">
                    <p className='px-5'>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p className='px-5'>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p className='px-5'>
                        Playing basketball is his zen.
                    </p>
                    <p className='px-5'>
                        Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /
                        <a href="#">Twitter</a>
                    </p>
                </div>

            </div>


            <div className="row p-5 text-center"> 
                
                <div className="col team-img-section">
                    <img src="media/Images/Nikhil.jpg" alt="Nithin_IMG_ERR" className="rounded-circle" style={{ width: "50%" }} />
                    <h4 className="mt-3 " style={{ color: "#424242", fontWeight: "400" }}>Nikhil Kamath</h4>
                    <h6 className="text-muted">Co-founder & CFO</h6>

                    <p className="d-inline-flex gap-1">
                        <button className="btn btn-light  btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                            Bio
                        </button>
                    </p>
                    <div className="collapse" id="collapseExample1">
                        <div className="card card-body">
                           Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.
                        </div>
                    </div>
                </div>

                <div className="col team-img-section">
                    
                    <img src="media/Images/Kailash.jpg" alt="kailash_IMG_ERR" className="rounded-circle" style={{ width: "50%" }} />
                    <h4 className="mt-3 " style={{ color: "#424242", fontWeight: "400" }}>Dr. Kailash Nadh</h4>
                    <h6 className="text-muted">CTO</h6>

                    <p className="d-inline-flex gap-1">

                        <button className="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                            Bio
                        </button>
                    </p>
                    <div className="collapse" id="collapseExample2">
                        <div className="card card-body">
                           Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.
                        </div>
                    </div>
                </div>

                <div className="col  team-img-section">
                    <img src="media/Images/Venu.jpg" alt="Venu_IMG_ERR" className="rounded-circle" style={{ width: "50%" }} />
                    <h4 className="mt-3 " style={{ color: "#424242", fontWeight: "400" }}>Venu Madhav</h4>
                    <h6 className="text-muted">COO</h6>

                    <p className="d-inline-flex gap-1">

                        <button className="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                            Bio
                        </button>
                    </p>
                    <div className="collapse" id="collapseExample3">
                        <div className="card card-body">
                            Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.
                        </div>
                    </div>

                </div>

            </div>

            <div className="row px-5 text-center">

                <div className="col  team-img-section">

                    <img src="media/Images/Hanan.jpg" alt="Hanan_IMG_ERR" className="rounded-circle" style={{ width: "50%" }} />
                    <h4 className="mt-3 " style={{ color: "#424242", fontWeight: "400" }}>Hanan Delvi</h4>
                    <h6 className="text-muted">CCO</h6>

                    <p className="d-inline-flex gap-1">
                        <button className="btn btn-light  btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                            Bio
                        </button>
                    </p>
                    <div className="collapse" id="collapseExample4">
                        <div className="card card-body">
                            We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.
                        </div>
                    </div>

                </div>

                <div className="col  team-img-section">

                    <img src="media/Images/Seema.jpg" alt="Seema_IMG_ERR" className="rounded-circle" style={{ width: "50%" }} />
                    <h4 className="mt-3 " style={{ color: "#424242", fontWeight: "400" }}>Seema Patil</h4>
                    <h6 className="text-muted">Director</h6>

                    <p className="d-inline-flex gap-1">

                        <button className="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
                            Bio
                        </button>
                    </p>
                    <div className="collapse" id="collapseExample5">
                        <div className="card card-body">
                            Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.
                        </div>
                    </div>

                </div>

                <div className="col  team-img-section">
                    <img src="media/Images/karthik.jpg" alt="karthik_IMG_ERR" className="rounded-circle" style={{ width: "50%" }} />
                    <h4 className="mt-3 " style={{ color: "#424242", fontWeight: "400" }}>Karthik Rangappa</h4>
                    <h6 className="text-muted">Chief of Education</h6>

                    <p className="d-inline-flex gap-1">

                        <button className="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
                            Bio
                        </button>
                    </p>
                    <div className="collapse" id="collapseExample6">
                        <div className="card card-body">
                           Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
                        </div>
                    </div>

                </div>

            </div>

            <div className="row px-5 mt-4 mb-5 text-center">

                <div className="col  team-img-section mb-5">
                    <img src="media/Images/Austin.jpg" alt="Austin_IMG_ERR" className="rounded-circle" style={{ width: "18%" }} />
                    <h4 className="mt-3 " style={{ color: "#424242", fontWeight: "400" }}>Austin Prakesh</h4>
                    <h6 className="text-muted">Director Strategy</h6>

                    <p className="d-inline-flex gap-1">

                        <button className="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample">
                            Bio
                        </button>
                    </p>
                    <div className="collapse " id="collapseExample7">
                        <div className="card card-body">
                            Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Team;