import React, { Component } from 'react';
import SliderItem from './SliderItem';
import './slide.css'

class Slider extends Component {
    render() {

        return (
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="featured_slider">
                    <h2 className="featured_title">Em alta</h2>
                    <div className="slick_slider">
                        <SliderItem/>
                        <SliderItem/>
                        <SliderItem/>
                        <SliderItem/>
                        <SliderItem/>
                        <SliderItem/>

                    </div>
                </div>
            </div>


        );
    }
}


export default Slider;