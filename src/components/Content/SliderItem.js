import React, { Component } from 'react';
import './slide.css'
class SliderItem extends Component {
    render() {

        return (
            <div className="single_iteam"><img src="images/300x250.jpg" alt="" />
                <h2><a className="slider_tittle" href="#">Fusce eu nulla semper porttitor felis sit amet</a></h2>
            </div>
        );
    }
}


export default SliderItem;