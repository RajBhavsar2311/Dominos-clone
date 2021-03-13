import React from 'react';
import Image2 from '../../assets/menu2.jpg';
import Image3 from '../../assets/menu3.jpg';
import Image4 from '../../assets/menu4.png';
import Image5 from '../../assets/menu5.jpg';
import PizzaCard from '../PizzaCard/PizzaCard';
import Aux from '../../hoc/auxiliary';
import classes from './PizzaGeneral.module.css';

const pizzaGeneral = (props) => {
    return (
        <Aux>
            <p className={classes.Text}>DOMINO'S MENU</p>
            <div>
                <div className={classes.Left}><PizzaCard heading='VEG PIZZA' image={Image2} content='A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, its softer and tastier' link='veg-pizzas'></PizzaCard></div>
                <div className={classes.Middle}><PizzaCard heading='NON-VEG PIZZA' image={Image3} content='Choose your favourite non-veg pizzas from the Dominos Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings' link='non-veg-pizzas'></PizzaCard></div>
                <div className={classes.Right}><PizzaCard heading='PIZZA MANIA' image={Image4} content='Indulge into mouth-watering taste of Pizza mania range, perfect answer to all your food cravings' link='pizza-mania'></PizzaCard></div>
            </div>
            <div style={{marginTop: '50%'}}>
                <PizzaCard heading='Sides & Beverages' image={Image5} content='Complement your pizza with wide range of sides & beverages available at Dominos Pizza India' link='side-orders'></PizzaCard>
            </div>
        </Aux>
    );
}

export default pizzaGeneral;