import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
import Photo  from '../images/archcreek1.jpg';

const Header = () => {

    return (
        <div className="header">
            <div className="container ">
                <h1 className="img-text">
                    <img className="img-part" src={Photo} alt="" /><span className="logo-text">Arch Creek Animal Clinic</span>
                </h1>
            </div>
            <nav className="nav-container">
            <NavLink  className="inactive" to="/home">Home</NavLink>
            <NavLink  className="inactive" to="/about">About</NavLink>
            <NavLink  className="inactive" to="/services">Services</NavLink>
            <NavLink  className="inactive" to="/vets"> Vets</NavLink>
            <NavLink  className="inactive" to="/contact">Contact</NavLink>

            </nav>
            
        </div>
    );
};

export default Header;