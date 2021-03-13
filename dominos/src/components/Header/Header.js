import React from 'react';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';
import classes from './Header.module.css';

const header = (props) => {
    return(
        <nav className={classes.Graphics}>
            <ul>
                <Link exact to='/'><Logo></Logo></Link>
                <li className={classes.Right}><Link exact  to='/menu' className={classes.LinkEffect}>OUR MENU</Link></li>
                <li className={classes.Right}><Link exact  to='/store' className={classes.LinkEffect}>STORE FINDER</Link></li>
                <li className={classes.Right}><Link exact  to='/giftcard' className={classes.LinkEffect}>GIFT CARD</Link></li>
                <li className={classes.Right}><Link exact  to='/contact' className={classes.LinkEffect}>CONTACT</Link></li>
                <li className={classes.Right}><button className={classes.Button}>LOGIN</button></li>
            </ul>
        </nav>
    );
}

export default header;