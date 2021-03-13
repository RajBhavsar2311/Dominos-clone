import React from 'react';
import classes from './Card.module.css';

const card = (props) => {
    return(
        <div className={classes.Box}>
            <img src={props.image} alt='Pizza' className={classes.ImageSet}></img>
            <p className={classes.Heading}>{props.heading}</p>
            <p className={classes.Content}>{props.content}</p>
            <hr></hr>
            <p className={classes.Footer}>{props.footer}</p>
        </div>
    );
}

export default card;