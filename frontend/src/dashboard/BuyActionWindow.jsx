import "./BuyActionWindow.css";
import { Link, useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';
import GeneralContext from './GeneralContext';
import axios from 'axios';

const BuyActionWindow = ({ uid }) => { 
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const { closeBuyWindow } = useContext(GeneralContext);
    const handleCancelClick = () => {
        closeBuyWindow();
    }

    const handleBuyClick = () => {
        if (window.confirm("Are you sure you want to buy this stock?")) {
            axios.post(`${process.env.REACT_APP_API_URL}/newOrder`, {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "BUY"
            })
            alert("Buy Order succesxsfully!");
            closeBuyWindow();
        }
    }

    const handleSellClick = () => {
        if (window.confirm("Are you sure you want to sell this stock?")) {

            axios.post(`${process.env.REACT_APP_API_URL}/newOrder`, {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "SELL"
            })
            alert("Sell Order successfully!");
            closeBuyWindow();
        }
    }

    return (
        <div className="containerClass" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type="number" name="qty" id="qty"
                            onChange={(e) => { setStockQuantity(e.target.value) }}
                            value={stockQuantity} />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input type="number" name="price" id="price" step='0.05'
                            onChange={(e) => { setStockPrice(e.target.value) }}
                            value={stockPrice} />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div className="orders-btns">
                    <Link className='btn btn-blue btn-primary' onClick={handleBuyClick}>Buy</Link>
                    <Link className='btn btn-red btn-danger' onClick={handleSellClick}>Sell</Link>
                    <Link to='' className='btn btn-dark' onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BuyActionWindow;