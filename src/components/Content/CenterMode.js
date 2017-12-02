import React, { Component } from 'react';
import SliderItem from './SliderItem';
import './slide.css'
import Slider from 'react-slick';
import { Carousel } from 'react-responsive-carousel';

const urlForSearch = tema =>
    'http://content.guardianapis.com/search?section=technology&order-by=relevance&use-date=last-modified&show-fields=all&q=technology&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: 'block', background: 'red' }}
//             onClick={onClick}
//         ></div>
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: 'block', background: 'green' }}
//             onClick={onClick}
//         ></div>
//     );
// }
class CenterMode extends Component {
    constructor(props) {
        super(props)

    }
    state = {
        response: {
            status: "",
            userTier: "",
            total: 0,
            startIndex: 0,
            pageSize: 0,
            currentPage: 0,
            pages: 0,
            orderBy: "",
            results: [
                {
                    id: "",
                    type: "",
                    sectionId: "",
                    sectionName: "",
                    webPublicationDate: "",
                    webTitle: "",
                    webUrl: "",
                    apiUrl: "",
                    fields: {
                        headline: "",
                        standfirst: "",
                        trailText: "",
                        byline: "",
                        main: "",
                        body: "",
                        wordcount: "",
                        firstPublicationDate: "",
                        isInappropriateForSponsorship: "",
                        isPremoderated: "",
                        lastModified: "",
                        productionOffice: "",
                        publication: "",
                        shortUrl: "",
                        shouldHideAdverts: "",
                        showInRelatedContent: "",
                        thumbnail: "",
                        legallySensitive: "",
                        lang: "",
                        bodyText: "",
                        charCount: "",
                        shouldHideReaderRevenue: ""
                    },
                    isHosted: false
                }
            ]
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

                // console.log(d.response.results),
                // console.log(d.response.results),
                this.setState({
                    response: d.response

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
            slidesToShow: 3,
            speed: 500
          };
        return (
            <div className="slider">
                <Slider {...settings}>

                    {this.state.response.results.map((value, id) =>
                        <SliderItem key={id} value={value} />
                    )}
                </Slider>
                <div className="col-lg-12 col-md-12 col-sm-12 sliderBar">
                    News
                </div>



                );
            </div>
        );
    }
}


export default CenterMode;