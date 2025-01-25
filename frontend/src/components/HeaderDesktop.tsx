// components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import headerlogo from '../assets/headerlogo.png';

function Header() {
    return (
        <header style={{backgroundColor: '#FFFFFF', width: '100vw', height: '70px', display: 'flex', alignItems: 'center'}}>
            <div style={{width: '1100px', margin: 'auto', display: 'flex', alignItems: 'center'}}>
                <Link to="/">
                    <img src={headerlogo} style={{width: '90px', marginLeft: '30px', textAlign: 'left'}}/>
                </Link>
                <Link to="/AllDocuments" style={styles.headertexts}>서류 모아보기</Link>
                <Link to="/Businesses" style={styles.headertexts}>업무 처리</Link>
                <Link to="/TownCommunity" style={styles.headertexts}>동네 소식</Link>
                <Link to="/MyDocuments" style={styles.headertexts}>나의 서류</Link>
            </div>
        </header>
    );
}

const styles = {
    headertexts: {
        fontFamily: 'SpoqaHanSansNeo-Light',
        marginLeft: '40px',
        textAlign: 'left',
        textDecoration: 'none',
        color: '#ADB5CA',
        fontSize: '18px',
    },
};

export default Header;