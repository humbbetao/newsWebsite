import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Slider from './Content/Slider';
import BodyNews from './Content/BodyNews';
import './content.css'

const urlForSearch = tema =>
  'https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=af3f0e77d1854d8fa72af41d447582fe'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      status: undefined,
      news: [{
        source: {
          id: null,
          name: "",
        },
        author: "",
        title: "",
        description: "",
        url: "",
        urlToImage: "",
        publishedAt: ""
      }]
    }
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
        console.log(JSON.stringify(d));

        console.log(d.status);
        console.log(d.articles);

        this.setState({
          status: d.status,
          news: d.articles

        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    return (
      <div className="content">
        <Slider />
        <BodyNews />
      </div>
    );
  }
}


export default Content;