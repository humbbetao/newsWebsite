import React, { Component } from 'react';
const urlForSearch = headline =>

    'http://content.guardianapis.com/search?show-elements=all&show-fields=all&q=' + headline + '&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'


class News extends Component {
    constructor(props) {
        super(props);
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
        fetch(urlForSearch(this.props.params.news))
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
        console.log(this.state.response)
        return (

            <div>
                <article className="featured_article">

                    <div className="article_body">
                        <a href="pages/single_page.html">
                            <img src={this.state.response.results[0].fields.thumbnail} alt="" />
                        </a>
                        <p className="article_section">
                            {this.state.response.results[0].fields.headline}

                        </p>

                        {this.state.response.results[0].fields.trailText}
                        <div dangerouslySetInnerHTML={{ __html:  this.state.response.results[0].fields.body }} />
                    </div>
                </article>
            </div>
        );

    }
}



export default News;
