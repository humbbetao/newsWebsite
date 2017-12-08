import React, { Component } from 'react';
import ItensNavbar from './ItensNavbar';

import './css/bodyNews.css'
const urlForSearch = tema =>
    'http://content.guardianapis.com/search?show-elements=all&show-fields=all&q=game&pageSize=5&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'

class ListItem extends Component {
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
        // console.log(urlForSearch('Brazil'));
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

        return (

            <ul className="post_nav">
                {this.state.response.results.map((value, id) => {
                    // if (id < 9) {
                        return (id<9 ? <ItensNavbar key={id} new={value} />: null)
                    // }
                })}

            </ul>
        );
    }
}


export default ListItem;