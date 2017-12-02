import React, { Component } from 'react';
import './bodyNews.css'
import ItensPopularPost from './ItensPopularPost';

const urlForSearch = 'http://content.guardianapis.com/search?section=technology&show-fields=all&q=videos&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'


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
        console.log(urlForSearch);
        fetch(urlForSearch)
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
        console.log(this.state.response)
        return (
            <ul className="post_navright">
                {this.state.response.results.map((value, id) => {
                    return <ItensPopularPost key={id} value={value} />
                })}

            </ul>
        );
    }
}


export default ListItemPopularPost;