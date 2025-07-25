import '../../styles/Products/rightsection.css'
function RightSection({
    productName,
    productDescription,
    learnMore,
    linkIcon,
    linkName,
    imageURL
}) {
    return (

        <div className="container p-5">
            <div className="row d-flex align-items-center">
                <div className="col p-5 right-text-section">
                    <h1 className="px-5 fs-2 mb-3" style={{ color: "#424242"}}>{productName}</h1>
                    <p className="px-5" style={{ color: "#424242", fontWeight: "400", fontSize: "1.1rem", lineHeight: "1.6" }}>{productDescription}</p>
                    <a href={learnMore} className="px-5 text-decoration-none">{linkName} &nbsp;<i className={linkIcon}></i>
                    </a>
                </div>
                <div className="col right-img-section">
                    <img src={imageURL} alt="consloe_IMG_ERR" style={{width:""}} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;