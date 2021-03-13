import React from 'react-router-dom';
import Image1 from '../../assets/menu1.jpg';
import PizzaGeneral from '../PizzaGeneral/PizzaGeneral';
import PizzaVeg from '../PizzaVeg/PizzaVeg';
import PizzaNonVeg from '../PizzaNonVeg/PizzaNonVeg';
import PizzaMania from '../PizzaMania/PizzaMania';
import {Route} from 'react-router-dom';
import classes from './Menu.module.css';

const menu = (props) => {
    return(
        <div>
            <img src={Image1} alt='Pizza' className={classes.Image}></img>
            <Route component={PizzaGeneral} exact='true' path='/menu'></Route>
            <Route component={PizzaVeg} exact='true' path='/menu/veg-pizzas'></Route>
            <Route component={PizzaNonVeg} exact='true' path='/menu/non-veg-pizzas'></Route>
            <Route component={PizzaMania} exact path='/menu/pizza-mania'></Route>
        </div>
    );
}

export default menu;