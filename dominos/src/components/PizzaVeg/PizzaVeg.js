import React from 'react';
import Aux from '../../hoc/auxiliary';
import Image1 from '../../assets/veg1.jpg';
import Image2 from '../../assets/veg2.jpg';
import Image3 from '../../assets/veg3.jpg';
import Image4 from '../../assets/veg4.jpg';
import Image5 from '../../assets/veg5.jpg';
import Image6 from '../../assets/veg6.jpg';
import Image7 from '../../assets/veg7.jpg';
import Image8 from '../../assets/veg8.jpg';
import Image9 from '../../assets/veg9.jpg';
import PizzaCard from '../PizzaCard/PizzaCard';
import classes from './PizzaVeg.module.css';

const pizzaVeg = (props) => {
    return(
        <Aux>
            <p className={classes.Text}>VEG PIZZAS</p>
            <div>
                <div className={classes.Left}><PizzaCard image={Image1} heading='Margherita' content='A hugely popular margherita, with a deliciously tangy single cheese topping' specific='true'></PizzaCard></div>
                <div className={classes.Middle}><PizzaCard image={Image2} heading='Double Cheese Margherita' content='The ever-popular Margherita - loaded with extra cheese... oodies of it!' specific='true'></PizzaCard></div>
                <div className={classes.Right}><PizzaCard image={Image3} heading='Farm House' content='A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes' specific='true'></PizzaCard></div>
            </div>
            <div style={{marginTop: '50%'}}>
                <div className={classes.Left}><PizzaCard image={Image4} heading='Peppy Panner' content='Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!' specific='true'></PizzaCard></div>
                <div className={classes.Middle}><PizzaCard image={Image5} heading='Mexican Green Wave' content='A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.' specific='true'></PizzaCard></div>
                <div className={classes.Right}><PizzaCard image={Image6} heading='Deluxe Veggie' content='For a vegetarian looking for a BIG treat that goes easy on the spices, this ones got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.' specific='true'></PizzaCard></div>
            </div>
            <div style={{marginTop: '98%'}}>
                <div className={classes.Left}><PizzaCard image={Image7} heading='Veg Extravaganza' content='A pizza that decidedly staggers under an overload of golden corn, exotic black olives, crunchy onions, crisp capsicum, succulent mushrooms, juicyfresh tomatoes and jalapeno - with extra cheese to go all around.' specific='true'></PizzaCard></div>
                <div className={classes.Middle}><PizzaCard image={Image8} heading='Cheese N Corn' content='Cheese I Golden Corn' specific='true'></PizzaCard></div>
                <div className={classes.Right}><PizzaCard image={Image9} heading='Panner Makhani' content='Paneer and Capsicum on Makhani Sauce.' specific='true'></PizzaCard></div>
            </div>
        </Aux>
    );
}

export default pizzaVeg;