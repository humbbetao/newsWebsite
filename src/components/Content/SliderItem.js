import React, { Component } from 'react';
import { Link } from 'react-router';
import './css/slide.css'
class SliderItem extends Component {
    render() {
        var headline = "\"".concat(this.props.value.fields.headline)
        headline = headline.concat("\"")
        // console.log(headline);
        return (
            <div className="single_iteam">
                <Link className="slider_img" to={"news/" + headline} >
                    <img src={this.props.value.fields.thumbnail} alt="" />

                    <h2 className="slider_title">
                        {this.props.value.webTitle}
                    </h2>
                </Link>
            </div>
        );
    }
}

export default SliderItem;