import React, { Component } from 'react';
import './bodyNews.css'
import ItensListContaint from './ItensListContaint';

const urlForSearch = tema =>
    'http://content.guardianapis.com/search?order-by=newest&show-fields=bodyText&q=technology&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'

class ListItem2 extends Component {
    constructor(props) {
        super(props)

    }
    state = {
        requestFailed: false,
        status: undefined,
        news: [{
            //     author: "",
            //     description: "",
            //     publishedAt: "",
            //     source: { id: "", name: "" },
            //     title: "",
            //     url: "",
            //     urlToImage: ""
            id: "",
            type: "",
            sectionId: "",
            sectionName: "",
            webPublicationDate: "",
            webTitle: "",
            webUrl: "",
            apiUrl: "",
            fields: {
                bodyText: ""
            },
            isHosted: false,
        }]

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
                //  console.log(JSON.stringify(d));

                // console.log(d.status);
                // console.log(d.articles);

                console.log(d.response.results),
                this.setState({
                    status: d.status,
                    news: d.response.results

                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }

    render() {

        return (
            <ul className="featured_nav">
                {this.state.news.map((value, id) => {
                    return <ItensListContaint key={id} new={value} />
                }
                )}

            </ul>

        );
    }
}


export default ListItem2;