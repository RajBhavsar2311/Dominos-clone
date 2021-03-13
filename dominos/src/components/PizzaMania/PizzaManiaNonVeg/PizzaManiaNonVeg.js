import {React} from 'react';
import Aux from '../../../hoc/auxiliary';
import classes from './PizzaManiaNonveg.module.css';
import PizzaCard from '../../PizzaCard/PizzaCard';
import Image1 from '../../../assets/mm1.jpg';
import Image2 from '../../../assets/mm2.jpg';
import Image3 from '../../../assets/mm3.jpg';

const pizzaManiaNonVeg = (props) => {
    return(
        <Aux>
            <div>
                <div className={classes.Left}><PizzaCard image={Image1} heading='Non Veg Loaded' content='Peri - Peri chicken | Pepper Barbecue | Chicken Sausage in a fresh pan crust' specific='true'></PizzaCard></div>
                <div className={classes.Middle}><PizzaCard image={Image2} heading='Chicken Sausage' content='Chicken Sausage I Cheese' specific='true'></PizzaCard></div>
                <div className={classes.Right}><PizzaCard image={Image3} heading='Pepper Barbecue Chicken' content='Pepper Barbecue Chicken' specific='true'></PizzaCard></div>
            </div>
        </Aux>
    );
}

export default pizzaManiaNonVeg;