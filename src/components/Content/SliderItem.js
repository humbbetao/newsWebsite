import React, { Component } from 'react';
import './slide.css'
class SliderItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div className="single_iteam">
                <img src={this.props.value.fields.thumbnail} alt="" />
                <h2>
                    <a className="slider_tittle" href="#"> {this.props.value.webTitle}

                    </a>
                </h2>
            </div>

         
        );
    }
}


export default SliderItem;