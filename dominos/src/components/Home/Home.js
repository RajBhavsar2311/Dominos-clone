import React from 'react-router-dom';
import Start from '../Start/Start';
import ImageSlider from '../../container/ImageSlider/ImageSlider';
import Explore from '../Explore/Explore';

const home = (props) => {
    return (
        <div style={{marginTop: '-10px'}}>
            <Start></Start>
            <ImageSlider></ImageSlider>
            <Explore></Explore>
        </div>
    );
}

export default home;