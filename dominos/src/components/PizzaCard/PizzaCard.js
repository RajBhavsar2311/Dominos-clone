import React from 'react-router-dom';
import {Link} from 'react-router-dom';
import classes from './PizzaCard.module.css';

const pizzaCard = (props) => {
    return (
        <div className={classes.Box}>
            <p className={classes.Heading}>{props.heading}</p>
            <img src={props.image} alt='Pizza' className={classes.Image}></img>
            <p className={classes.Text}>{props.content}</p>
            {props.specific ? <Link className={classes.LinkEffect} exact='true' to='/orders'><button className={classes.Button}>ORDER NOW</button></Link> : <Link className={classes.LinkEffect} exact='true' to={'/menu/' + props.link}><button className={classes.Button}>VIEW ALL</button></Link>}
        </div>
    );
}

export default pizzaCard;