import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Auth/header';
import Menu from '../components/menu/Menu';

const Pagecollection2 = () => {
    return (
        <div>
            <Header/>
            <div className='azerty'>
                <div className='btnswitchcollection'>
                    <NavLink className='link' to='/plantes'>
                        <button>Plantes</button>
                    </NavLink>
                    <NavLink className='link' to='/badges'>
                        <button>Badges</button>
                    </NavLink>
                </div>
            </div>
                <img className='pagecollection'  
                    src="../image/PageCollectionBadges.jpg">
                </img>
            <Menu/>
        </div>
    );
};

export default Pagecollection2;