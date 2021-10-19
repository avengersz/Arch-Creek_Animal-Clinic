import React from 'react';
import './Footer.css';
import Photo  from '../images/archcreek1.jpg';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="l-footer">
        <h3>
        <img className="img-size" src={Photo} alt=""/>Arch Creek Animal Clinic</h3>
        </div>
        <div className="b-footer">
        <p> © 2021 All Rights Reserved | Terms of Use | Privacy Policy </p>
        </div>
        </footer>
    );
};

export default Footer;