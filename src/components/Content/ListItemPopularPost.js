import React, { Component } from 'react';
import './bodyNews.css'
import ItensListContaintBar from './ItensListContaintBar';

const urlForSearch = tema =>
    'https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=af3f0e77d1854d8fa72af41d447582fe'

class ListItemPopularPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
            status: undefined,
            news: [{
                author: "",
                description: "",
                publishedAt: "",
                source: { id: "", name: "" },
                title: "",
                url: "",
                urlToImage: ""
            }]


        }
    }
    // componentDidMount() {
    //     console.log(urlForSearch('Brazil'));
    //     fetch(urlForSearch('Brazil'))
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw Error("Network request failed")
    //             }

    //             return response
    //         })
    //         .then(d => d.json())
    //         .then(d => {
    //             // console.log(JSON.stringify(d));

    //             // console.log(d.status);
    //             console.log(d.articles);

    //             this.setState({
    //                 status: d.status,

    //                 news: d.articles

    //             })
    //         }, () => {
    //             this.setState({
    //                 requestFailed: true
    //             })
    //         })
    // }

    render() {

        return (
            <ul className="ppost_nav wow fadeInDown navbarL">
                {this.state.news.map((value, id) => {
                    return <ItensListContaintBar key={id} value={value} />
                }
                )}
            </ul>
        );
    }
}


export default ListItemPopularPost;