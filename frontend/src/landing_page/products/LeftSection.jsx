import '../../styles/Products/leftsection.css'
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    linkName01,
    linkIcon1,
    linkName02,
    linkIcon2,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container p-5">
            <div className="row d-flex align-items-center">
                <div className="col px-5 kite-img">
                    <img src={imageURL} alt="kite_IMG_ERR" />
                </div>
                <div className="col px-5 kite-text-section">
                    <h1 className="px-5 fs-2 mb-4" style={{ color: "#424242" }}>{productName}</h1>
                    <p className="px-5" style={{ color: "#424242", fontWeight: "400", fontSize: "1.1rem", lineHeight: "1.6" }}>{productDescription}</p>
                    <div className="px-5 mb-4 link-text">

                        <a href={tryDemo} className="text-decoration-none">
                            {linkName01}&nbsp; <i className={`${linkIcon1}`}></i>
                            
                        </a>

                        <a href={learnMore} className="text-decoration-none mx-5">
                           {linkName02}&nbsp; <i className={`${linkIcon2}`}></i>
                        </a>

                    </div>
                    <div className="px-5 app-links">

                        <a href={googlePlay} >
                            <img src="media/Images/googlePlayBadge.svg" alt="googlePlayBadge_IMG_ERR" />
                        </a>
                        <a href={appStore} className="mx-4">
                            <img src="media/Images/appstoreBadge.svg" alt="appstoreBadge_IMG_ERR" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;