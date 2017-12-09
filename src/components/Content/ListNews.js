import React, { Component } from 'react';
import { Link } from 'react-router';
import ItensListContaint from './ItensListContaint';

const urlForSearch = (query, page) =>
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
        },
        pages: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        page_index: 1
    }

    componentDidMount() {
        console.log(this.props);
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
            <div>
                <ul className="featured_nav">
                    {this.state.response.results.map((value, id) => {
                        return <ItensListContaint key={id} new={value} />
                    })}
                </ul>
                <div class="pagination">
                    <Link to={"pages/" + this.state.page_index - 1}> &laquo;
                    </Link>
                    {this.state.pages.map((value, id) => {

                        return (<Link key={id} to={"pages/" + value}> {value}
                        </Link>)

                    })}
                    <Link to={"pages/" + this.state.page_index + 1}> &raquo;
                    </Link>
                    
                    </div>
            </div>
        );
    }
}
export default ListNews;