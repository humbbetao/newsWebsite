import React, { Component } from 'react';
import NewsBar from './components/Content/Newsbar';
import NavbarRight from './components/Content/NavbarRight';
import NavbarLeft from './components/Content/NavbarLeft';
import Comments from './Comments';
import './newsBody.css';

// import SearchNews from './SearchNews'

const urlForSearch = headline =>

    'http://content.guardianapis.com/search?show-elements=all&show-fields=all&q=' + headline + '&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'


class News extends Component {
    constructor(props) {
        super(props);
        console.log(props);
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
        console.log(this.props);
        console.log(this.props.params.news);

        fetch(urlForSearch(this.props.params.title))
            .then(response => {
                if (!response.ok) {
                    throw Error("Network request failed")
                }
                return response
            })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    response: res.response
                })
            })
    }
    render() {
        console.log(this.state.response);
        var response = this.state.response.results[0];
        var published = new Date(response.fields.lastModified);
        return (
            <div className="newsBody">
                {/* <NewsBar /> */}
                <NavbarLeft />
                <div className="col-lg-6" >
                    <article className="article_news">
                        <h1 className="article_title_news">
                            {response.fields.headline}
                        </h1>
                        <br />
                        Published on {published.toDateString()}
                        <h5>{response.fields.trailText}</h5>

                        <div className="article_body_news">
                            <img src={response.fields.thumbnail} alt="" />
                            <p>
                                <div dangerouslySetInnerHTML={{ __html: response.fields.body }} />
                            </p>
                        </div>
                        <p className="col-lg-6">
                            Author: {response.fields.byline}
                        </p>
                    </article>
                    <div>
                    </div>
                    <Comments />
                </div>
                {/* <div className="col-lg-4"> */}
                <NavbarRight />
                {/* </div> */}



            </div>
        );
    }
}

export default News;
