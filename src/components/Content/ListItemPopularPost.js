import React, { Component } from 'react';
import './bodyNews.css'
import ItensPopularPost from './ItensPopularPost';
import SearchNews from './SearchNews';

class ListItemPopularPost extends Component {
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
        const url = 'http://content.guardianapis.com/search?section=technology&show-fields=all&q=videos&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'
        this.setState({ state: SearchNews(url) })
        console.log(url);
        console.log(this.state);
    }

    render() {

        return (
            <ul className="ppost_nav wow fadeInDown navbarL">
                {this.state.response.results.map((value, id) => {
                    return (
                        <li>
                            <div className="media">
                                <a className="media-right" href="pages/single_page.html">
                                    <img src={value.fields.thumbnail} alt="" />
                                </a>
                                <div className="media-body">
                                    <a className="catg_title" href="#">
                                        {value.webTitle}
                                    </a>

                                </div>
                            </div>
                        </li>
                    )
                })}

            </ul>
        );
    }
}


export default ListItemPopularPost;