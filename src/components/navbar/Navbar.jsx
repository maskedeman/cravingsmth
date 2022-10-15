import React from 'react';
import {RiMenuLine, RiCloseLin} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbas-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home"><h1>Craving</h1><h2>Something</h2> </a></p>
                    <p><a href="#menus">MENUS</a></p>
                    <p><a href="#location">LOCATION</a></p>
                    <p><a href="#about">ABOUT</a></p>
                    <p><a href="#reservation">RESERVATIONS</a></p>
                    <p><a href="#privateevents">PRIVATE EVENTS</a></p>
                    <div className="ul">
                    <p><a href="#callnow">CALL NOW</a></p>
                    </div>
                    <div className="rec">
                    <p><a href="#orderonline">ORDER ONLINE</a></p>
                    </div>
                </div>
            </div>  

        </div>
    )
}

export default Navbar
