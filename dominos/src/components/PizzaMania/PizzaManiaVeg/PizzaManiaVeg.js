import {React} from 'react';
import classes from './PizzaManiaVeg.module.css';
import PizzaCard from '../../PizzaCard/PizzaCard';
import Image1 from '../../../assets/m1.png';
import Image2 from '../../../assets/m2.jpg';
import Image3 from '../../../assets/m3.jpg';
import Image4 from '../../../assets/m4.jpg';
import Image5 from '../../../assets/m5.jpg';
import Image6 from '../../../assets/m6.jpg';
import Image7 from '../../../assets/m7.jpg';
import Image8 from '../../../assets/m8.png';
import Aux from '../../../hoc/auxiliary';

const pizzaManiaVeg = (props) => {
    return(
        <Aux>
            <div>
                <div className={classes.Left}><PizzaCard image={Image1} heading='Tomato' content='Juicy tomato in a flavourful combination with cheese I tangy sauce' specific='true'></PizzaCard></div>
                <div className={classes.Middle}><PizzaCard image={Image2} heading='Veg Loaded' content='Tomato | Grilled Mushroom |Jalapeno |Golden Corn | Beans in a fresh pan crust' specific='true'></PizzaCard></div>
                <div className={classes.Right}><PizzaCard image={Image3} heading='Chessy' content='Orange Cheddar Cheese I Mozzarella' specific='true'></PizzaCard></div>
            </div>
            <div style={{marginTop: '50%'}}>
                <div className={classes.Left}><PizzaCard image={Image4} heading='Capsicm' content='capsicm' specific='true'></PizzaCard></div>
                <div className={classes.Middle}><PizzaCard image={Image5} heading='Onion' content='Onion' specific='true'></PizzaCard></div>
                <div className={classes.Right}><PizzaCard image={Image6} heading='Golden Corn' content='Golden Corn' specific='true'></PizzaCard></div>
            </div>
            <div style={{marginTop: '98%'}}>
                <div className={classes.Left}><PizzaCard image={Image7} heading='Panner & Onion' content='Panner & Onion' specific='true'></PizzaCard></div>
                <div className={classes.Middle}><PizzaCard image={Image8} heading='Cheese N Tomato' content='A delectable combination of cheese and juicy tomato' specific='true'></PizzaCard></div>
            </div>
        </Aux>
    );
}

export default pizzaManiaVeg;