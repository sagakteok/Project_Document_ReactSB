import React from 'react';
import Icon from '@mdi/react';
import { Link, useLocation } from 'react-router-dom';
import headerlogo from '../../assets/headerlogo.png';
import { mdiMagnify, mdiAccountCircle } from '@mdi/js';
import './HeaderDesktopStyle.scss'
 
function DesktopHeader() {
    const location = useLocation();
    return (
        <header style={{ position: 'fixed', zIndex: '4', backgroundColor: '#FFFFFF', width: '100vw', height: '60px', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '1100px', margin: 'auto', display: 'flex', alignItems: 'center' }}>
                <Link to="/">
                    <img src={headerlogo} style={{ width: '90px', marginLeft: '30px' }} />
                </Link>
                <Link to="/AllDocuments" className={`desktop-header_text ${location.pathname === '/AllDocuments' ? 'active' : ''}`}>서류 모아보기</Link>
                <Link to="/Businesses" className={`desktop-header_text ${location.pathname === '/Businesses' ? 'active' : ''}`}>업무 처리</Link>
                <Link to="/TownCommunity" className={`desktop-header_text ${location.pathname === '/TownCommunity' ? 'active' : ''}`}>동네 소식</Link>
                <Link to="/MyDocuments" className={`desktop-header_text ${location.pathname === '/MyDocuments' ? 'active' : ''}`}>나의 서류</Link>
                <div style={{ marginLeft: 'auto'}}>
                    <Link to="/">
                        <Icon path={mdiMagnify} size={1} className={`desktop-header_icon ${location.pathname === '/' ? 'active' : ''}`}/>
                    </Link>
                    <Link to="/">
                        <Icon path={mdiAccountCircle} size={1} className={`desktop-header_icon ${location.pathname === '/' ? 'active' : ''}`}/>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default DesktopHeader;