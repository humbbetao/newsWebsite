import React, { Component } from 'react';
import { Link } from 'react-router';
import './slide.css'
class SliderItem extends Component {
    render() {
        var headline = "\"".concat(this.props.value.fields.headline)
        headline.concat("\"")
        return (
            <div className="single_iteam">
                <Link className="slider_img" to={"news/" + headline + "\""} >
                    <img src={this.props.value.fields.thumbnail} alt="" />

                    <h2 class="slider_title">
                        {this.props.value.webTitle}
                    </h2>
                </Link>
            </div>
        );
    }
}

export default SliderItem;