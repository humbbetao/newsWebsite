import React, { Component } from 'react';
import SliderItem from './SliderItem';
import './slide.css'
import Slider from 'react-slick';

class CenterMode extends Component {



    render() {
        const settings = {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '0px',
            slidesToShow: 2,
            speed: 500
        };
        return (
            <div className="slider">
                <Slider {...settings}>
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />

                </Slider>
            </div>
        );
    }
}


export default CenterMode;