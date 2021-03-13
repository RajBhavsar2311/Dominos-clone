import {React,Component} from 'react';
import Image1 from '../../assets/Image1.jpg';
import Image2 from '../../assets/Image2.jpg';
import Image3 from '../../assets/Image3.jpg';
import Image4 from '../../assets/Image4.jpg';
import Image5 from '../../assets/Image5.jpg';
import Image6 from '../../assets/Image6.jpg';
import classes from './ImageSlider.module.css';

class ImageSlider extends Component{
    state = {
        currrentImageIndex: 0,
        imageData: [Image1,Image2,Image3,Image4,Image5,Image6],
    }

    rightButtonHandler = () =>{
        if(this.state.currrentImageIndex < 4){
            const newcurrentImageIndex = this.state.currrentImageIndex + 1;
            this.setState({currrentImageIndex: newcurrentImageIndex});
        }
    }

    leftButtonHandler = () =>{
        if(this.state.currrentImageIndex >= 1){
            const newcurrentImageIndex = this.state.currrentImageIndex - 1;
            this.setState({currrentImageIndex: newcurrentImageIndex});
        }
    }

    render(){
        return (
            <div>
                <p className={classes.Text}>Coupons & offers</p>
                <div className={classes.LeftDiv}>
                    <div className={classes.LeftButton} onClick={this.leftButtonHandler}>{'<'}</div>
                </div>
                <div className={classes.MiddleDiv}>
                    <img src={this.state.imageData[this.state.currrentImageIndex]} alt='Coupons & offers Logo' className={classes.Left}></img>
                    <img src={this.state.imageData[this.state.currrentImageIndex + 1]} alt='Coupons & offers Logo' className={classes.Left}></img>
                </div>
                <div className={classes.RightDiv}>
                    <div className={classes.RightButton} onClick={this.rightButtonHandler}>{'>'}</div>
                </div>
            </div>
        );
    }
}

export default ImageSlider;