import React, { Component } from 'react';
import NavbarRight from './Content/NavbarRight';
import NavbarLeft from './Content/NavbarLeft';
import Comments from './Content/Comments';
import './css/newsBody.css';

const urlForSearch = headline =>
    'http://content.guardianapis.com/search?show-elements=all&show-fields=all&q=' + headline + '&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'

class News extends Component {
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
        // console.log(this.props);
        // console.log(this.props.params.news);

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
        // console.log(this.state.response);
        var response = this.state.response.results[0];
        var published = new Date(response.fields.lastModified);
        return (
            <div className="content">
                {this.state.response.status === 'ok' ?
                    <div className="col-lg-6 col-md-12 col-sm-12 newsBody" id="main-content" >


                        <article className="article_news">
                            <h1 className="article_title_news">
                                {response.fields.headline}
                            </h1>
                            <h5 className="trailText">{response.fields.trailText}</h5>
                            <p className="published">
                                Published on {published.toDateString()}
                            </p>
                            <div className="article_body_news">
                                <img src={response.fields.thumbnail} alt={response.fields.headline} title={response.fields.headline} />

                                <div dangerouslySetInnerHTML={{ __html: response.fields.body }} />
                            </div>
                            <p className="col-lg-12 author_news">
                                Author: {response.fields.byline}
                            </p>
                        </article>
                        <Comments />
                    </div>
                    :
                    <div className="col-lg-6 col-md-12 col-sm-12 newsBody" id="main-content" >
                        <article className="article_news">
                            <h1 className="article_title_news">
                                Error 400, Bad request
                            </h1>
                            <h5 className="trailText">The request could not be understood by the server due to malformed syntax.
                             The client SHOULD NOT repeat the request without modifications. </h5>
                        </article>
                    </div>
                }
                <NavbarLeft />
                <NavbarRight />
            </div>
        );
    }
}

export default News;
