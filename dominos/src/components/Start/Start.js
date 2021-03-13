import React from 'react';
import classes from './Start.module.css';

const start = () => {
    return (
        <div>
            <div className={classes.Left}>
                <p className={classes.Text}>Domino's online ordering</p>
                <p className={classes.Text1}>Yummy pizza delivered Fast and Safe</p>
                <div className={classes.Button}><p className={classes.ButtonText}>ORDER ONLINE NOW</p></div>
                <div className={classes.LeftImage}></div>
            </div>
            <div className={classes.Right}></div>
        </div>
    );
}

export default start;