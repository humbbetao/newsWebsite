import React, { Component } from 'react';
import Slider from 'react-slick';
import NewsBar from './Newsbar';
import SliderItem from './SliderItem';
import './slide.css'
// import SearchApp from './SearchApp';
import fetchingData from './FetchingData'

const url = 'http://content.guardianapis.com/search?section=technology&order-by=relevance&use-date=last-modified&show-fields=all&q=technology&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'

const CenterMode = ({ response, isLoading, error }) => {
    const aux = response

    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }

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
    console.log("eu")
    console.log(aux)
    return (
        <div className="slider">
            <Slider {...settings}>
                {aux.results.map((value, id) =>
                    <SliderItem key={id} value={value} />
                )}
            </Slider>

        </div>
    );
}
       

export default fetchingData(url)(CenterMode);


