
import '../../../styles/pricing/chargesTable.css'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import Equity from './Equity';
import Currency from './Currency';
import Commodity from './Commodity';

function ChargesTable() {
    const [activeTab, setActiveTab] = useState('tab-equity');
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace('#', ''); 
        if (hash) {
            setActiveTab(hash);
        } else {
            setActiveTab('tab-equity');  
        }
    }, [location]);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'tab-currency':
                return <Currency />;
            case 'tab-commodity':
                return <Commodity />;
            case 'tab-equity':
            default:
                return <Equity />;
        }
    }
    return (
        <div className="container px-5">
            <div className="row px-5 chargeslinks ">

                <ul className="nav nav-underline">
                    <li className="nav-item fs-4 mx-4">
                        <HashLink 
                            className={`nav-link hover-tab ${activeTab === 'tab-equity' ? 'active' : ''}`}
                            smooth to='/pricing/#tab-equity'
                           >
                            Equity
                        </HashLink>

                    </li>
                    <li className="nav-item fs-4 mx-4">
                        <HashLink
                            className={`nav-link hover-tab ${activeTab === 'tab-currency' ? 'active' : ''} `}
                            smooth to='/pricing/#tab-currency'
                            >Curency</HashLink>

                    </li>
                    <li className="nav-item fs-4 mx-4">
                        <HashLink
                            className={`nav-link hover-tab ${activeTab === 'tab-commodity' ? 'active' : '' } `}
                            smooth to='/pricing/#tab-commodity'
                             >Commodity</HashLink>
                    </li>

                </ul>
                <hr />

                <div>{renderTabContent()}</div>
            </div>

            <div className="row mt-4 text-center brokerage-calculate">
                <h4>
                    <a href="#" className='text-decoration-none'>Calculate your costs upfront</a> using our brokerage calculator
                </h4>
            </div>
        </div>
    );
}

export default ChargesTable;