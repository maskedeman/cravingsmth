import React from 'react';
import {Footer, Menus, PrivateEvents, Reservations, Callnow, Orderonline,About,Location, Header, Home} from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <Home/>
            <Menus/>
            <Location/>
            <About/>
            <PrivateEvents/>
            <Reservations/>
            <Callnow/>
            <Orderonline/>
            <CTA/>
            <Footer/>
        </div>
    )
}

export default App
