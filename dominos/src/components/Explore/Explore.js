import React from 'react';
import Card from '../Card/Card';
import classes from './Explore.module.css';
import image1 from '../../assets/explore1.png';
import image2 from '../../assets/explore2.png';
import image3 from '../../assets/explore3.png';
import image4 from '../../assets/explore4.png';

const explore = () => {
    return(
        <div className={classes.set}>
            <p className={classes.Text}>Explore</p>
            <div className={classes.Left}>
                <Card  image={image1} heading='OUR MENU' content='Explore our range of delicious Pizzas, delivered in 30 minutes!' footer='DISCOVER PIZZA'></Card>
            </div>
            <div className={classes.MMidle}>
                <Card  image={image2} heading='NEARBY STORE' content='Find a Dominos Pizza restaurant near you' footer='FIND DOMINOS STORE'></Card>
            </div>
            <div className={classes.Middle}>
                <Card  image={image3} heading='BIRTHDAY PARTY' content='Celebrate the joy of birthday with fresh and hot pizza' footer='BOOK NOW'></Card>
            </div>
            <div className={classes.Right}>
                <Card  image={image4} heading='CATERING' content='Live Dominos Kitchen for weddings/corporate events' footer='BOOK NOW'></Card>
            </div>
        </div>
    );
}

export default explore;