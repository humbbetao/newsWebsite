import React, { Component } from 'react';
import './slide.css'
class SliderItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div className="single_iteam">
                <a className="slider_img" href="#">
                    <img src={this.props.value.fields.thumbnail} alt="" />
                    <h2 class="slider_title">
                        {this.props.value.webTitle}
                    </h2>
                </a>
            </div>


        );
    }
}


export default SliderItem;