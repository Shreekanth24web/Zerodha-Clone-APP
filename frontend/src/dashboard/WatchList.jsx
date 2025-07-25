import React, { useContext, useState } from 'react';
import { Tooltip, Grow } from '@mui/material'
import { watchlist } from '../data/data.js';
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from '@mui/icons-material'
import GeneralContext from './GeneralContext';
import '../styles/Dashboard/watchlist.css';
import { DoughnutChart } from './DoughnutChart.js';

function WatchList() {
    
    const labels = watchlist.map((stockName)=> stockName['name'])

    const data = {
        labels,
        datasets: [
            {
                label: 'Price',
                data: watchlist.map((stock)=> stock.price),
                backgroundColor: [
                    'rgba(255, 97, 131, 0.7)',
                    'rgba(54, 162, 235, 0.70)',
                    'rgba(255, 206, 86, 0.70)',
                    'rgba(75, 192, 192, 0.70)',
                    'rgba(153, 102, 255, 0.70)',
                    'rgba(255, 159, 64, 0.70)',
                ],
                borderColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="watchlist-container">
            <div className="search-contanier">
                <input
                    type="text"
                    name='search'
                    id="search"
                    placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                    className="search"
                />
                <span className="counts"> {watchlist.length}/50</span>
            </div>

            <ul className="list">
                {watchlist.map((stock, idx) => {
                    return (
                        <WatchlistItem stock={stock} key={idx} />
                    )
                })}
            </ul>

            <DoughnutChart data={data} />
        </div>
    );
}

export default WatchList;

const WatchlistItem = ({ stock }) => {
    const [showWatchListActions, setShowWatchListActions] = useState(false)

    const handleMouseEnter = (e) => {
        setShowWatchListActions(true)
    }
    const handleMouseExit = (e) => {
        setShowWatchListActions(false)
    }


    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
            <div className='item'>
                <p className={stock.isDown ? "down" : "up"}>
                    {stock.name}
                </p>
                <div className="itemInfo">
                    <span className='percent'>{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDown className='down' />) : (<KeyboardArrowUp className='up' />)
                    }
                    <span className='price'>{stock.price}</span>
                </div>
            </div>

            {showWatchListActions && <WatchListActions uid={stock.name} />}

        </li>

    )
};

const WatchListActions = ({ uid }) => {
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
        generalContext.openBuyWindow(uid)
    }
    const handleSellClick = () => {
        generalContext.openBuyWindow(uid)
    }
    return (
        <span className='actions'>
            <span>
                <Tooltip title='Buy (B)' placement='top' arrow TransitionComponent={Grow} onClick={handleBuyClick}>
                    <button className='buy'>Buy</button>
                </Tooltip>

                <Tooltip title='Sell (S)' placement='top' arrow TransitionComponent={Grow} onClick={handleSellClick}>
                    <button className='sell'>Sell</button>
                </Tooltip>
                <Tooltip title='Analytics (A)' placement='top' arrow TransitionComponent={Grow}>
                    <button className='action '>
                        <BarChartOutlined className='icon ' />
                    </button>
                </Tooltip>
                <Tooltip title='More' placement='top' arrow TransitionComponent={Grow}>
                    <button className='action'>
                        <MoreHoriz className='icon' />
                    </button>
                </Tooltip>
            </span>
        </span>
    )
}