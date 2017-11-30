import React, { Component } from 'react';
import SliderItem from './SliderItem';
import './slide.css'
import Slider from 'react-slick';


const urlForSearch = tema =>
    'https://newsapi.org/v2/top-headlines?fields=all&q=technology&apiKey=af3f0e77d1854d8fa72af41d447582fe'


class CenterMode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
            status: undefined,
            news: [{
                source: {
                    id: null,
                    name: "",
                },
                author: "",
                title: "",
                description: "",
                url: "",
                urlToImage: "",
                publishedAt: ""
            }]
        }
    }

    componentDidMount() {
        console.log(urlForSearch('Brazil'));
        fetch(urlForSearch('Brazil'))
            .then(response => {
                if (!response.ok) {
                    throw Error("Network request failed")
                }

                return response
            })
            .then(d => d.json())
            .then(d => {
                // console.log(d);

                // console.log(d.status);
                // console.log(d.articles);



                this.setState({
                    status: d.status,
                    news: d.articles

                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }

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
                    {this.state.news.map((value, id) =>
                        <SliderItem key={id} value={value} />
                    )}
                </Slider>
                <div className="col-lg-12 col-md-12 col-sm-12 sliderBar">
                    News
                </div>
            </div>
        );
    }
}


export default CenterMode;