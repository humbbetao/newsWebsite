import React, { Component } from 'react';
import Slider from 'react-slick';
import SliderItem from './SliderItem';
import './css/slide.css'
import fetchingData from './FetchingData'

const url = 'http://content.guardianapis.com/search?section=technology&order-by=relevance&use-date=last-modified&show-fields=all&q=technology&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'

class CenterMode extends Component {
    componentDidMount() {

        if (this.props.error) {
            return <p>{this.props.error.message}</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading ...</p>;
        }
    }
    render() {
        const settings = {
            className: 'sampleArrows',
            infinite: true,
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
        };
        return (



            < div className="slider" >
                <Slider {...settings}>
                    {this.props.response.results.map((value, id) =>
                        <SliderItem key={id} value={value} />
                    )}
                </Slider>

            </div >
        );
    }
}


export default fetchingData(url)(CenterMode);