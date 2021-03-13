import React from 'react';
import Logo from '../../assets/domino.png';
import classes from './Logo.module.css';

const logo = () => {
    return (
        <img src={Logo} alt='Dominos Logo' className={classes.Logo}></img>
    );
}

export default logo;