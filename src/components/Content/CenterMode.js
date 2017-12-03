import React, { Component } from 'react';
import Slider from 'react-slick';
import NewsBar from './Newsbar';
import SliderItem from './SliderItem';
import './slide.css'

const urlForSearch = tema =>
    'http://content.guardianapis.com/search?section=technology&order-by=relevance&use-date=last-modified&show-fields=all&q=technology&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'

class CenterMode extends Component {
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
            <div className="slider">
                <Slider {...settings}>
                    {this.state.response.results.map((value, id) =>
                        <SliderItem key={id} value={value} />
                    )}
                </Slider>
                {/* <NewsBar /> */}

            </div>
        );
    }
}


export default CenterMode;