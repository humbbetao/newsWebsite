import React, { Component } from 'react';
import ItensListContaint from './ItensListContaint';

const urlForSearch = (query) =>
    'http://content.guardianapis.com/search?show-elements=all&show-fields=all&q=' + query + '&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'

class ListNews extends Component {
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
        console.log(urlForSearch(this.props.query));
        fetch(urlForSearch(this.props.query))
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

        return (
            <ul className="featured_nav">
                {this.state.response.results.map((value, id) => {
                    return <ItensListContaint key={id} new={value} />
                })}
            </ul>
        );
    }
}
export default ListNews;