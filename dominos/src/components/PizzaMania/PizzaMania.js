import {React,Component} from 'react';
import PizzaManiaVeg from './PizzaManiaVeg/PizzaManiaVeg';
import PizzaManiaNonVeg from './PizzaManiaNonVeg/PizzaManiaNonVeg';
import Aux from '../../hoc/auxiliary';
import classes from './PizzaMania.module.css';

class PizzaMania extends Component{
    state = {
        veg: true,
        nonveg: false
    }

    vegManiaHandler = () => {
        this.setState({veg: true,nonveg: false});
    }

    nonvegManiaHandler = () => {
        this.setState({veg: false,nonveg: true});
    }

    render(){
        let style1 = null;
        let style2 = null;
        if(this.state.veg){
            style1 = {color: 'red',cursor: 'pointer'};
            style2 = {color: 'black',cursor: 'pointer'};
        }
        else{
            style2 = {color: 'red',cursor: 'pointer'};
            style1 = {color: 'black',cursor: 'pointer'};
        }
        return(
            <Aux>
                <p className={classes.Text}>PIZZA MANIA</p>
                <p onClick={this.vegManiaHandler} style={style1}>Pizza Mania Veg</p>
                <p onClick={this.nonvegManiaHandler} style={style2}>Pizza Mania Non Veg</p>
                {this.state.veg ? <PizzaManiaVeg></PizzaManiaVeg> : <PizzaManiaNonVeg></PizzaManiaNonVeg>}
            </Aux>
        );
    }
}

export default PizzaMania;