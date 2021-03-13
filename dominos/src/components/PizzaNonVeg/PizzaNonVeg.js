import React from 'react';
import Aux from '../../hoc/auxiliary';
import Image1 from '../../assets/nonveg1.jpg';
import Image2 from '../../assets/nonveg2.jpg';
import Image3 from '../../assets/nonveg3.jpg';
import Image4 from '../../assets/nonveg4.jpg';
import Image5 from '../../assets/nonveg5.jpg';
import Image6 from '../../assets/nonveg6.jpg';
import Image7 from '../../assets/nonveg7.png';
import Image8 from '../../assets/nonveg8.jpg';
import PizzaCard from '../PizzaCard/PizzaCard';
import classes from './PizzaNonVeg.module.css';

const pizzaNonVeg = (props) => {
    return(
        <Aux>
            <p className={classes.Text}>NON VEG PIZZAS</p>
            <div>
                <div className={classes.Left}><PizzaCard image={Image1} heading='Pepper Barbecue Chicken' content='Pepper Barbecue Chicken I Cheese' specific='true'></PizzaCard></div>
                <div className={classes.Middle}><PizzaCard image={Image2} heading='Chicken Sausage' content='Chicken Sausage I Cheese' specific='true'></PizzaCard></div>
                <div className={classes.Right}><PizzaCard image={Image3} heading='Chicken Golden Delight' content='Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!' specific='true'></PizzaCard></div>
            </div>
            <div style={{marginTop: '50%'}}>
                <div className={classes.Left}><PizzaCard image={Image4} heading='Non Veg Supreme' content='Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers' specific='true'></PizzaCard></div>
                <div className={classes.Middle}><PizzaCard image={Image5} heading='Chicken Dominator' content='Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers' specific='true'></PizzaCard></div>
                <div className={classes.Right}><PizzaCard image={Image6} heading='Pepper Barbecue & Onion' content='Pepper Barbecue Chicken I Onion' specific='true'></PizzaCard></div>
            </div>
            <div style={{marginTop: '98%'}}>
                <div className={classes.Left}><PizzaCard image={Image7} heading='Chicken Fiesta' content='Grilled Chicken Rashers I Peri-Peri Chicken I Onion I Capsicum' specific='true'></PizzaCard></div>
                <div className={classes.Middle}><PizzaCard image={Image8} heading='Indi Chicken Tikka' content='The wholesome flavour of tandoori masala with Chicken tikka I onion I red paprika I mint mayo' specific='true'></PizzaCard></div>
            </div>
        </Aux>
    );
}

export default pizzaNonVeg;