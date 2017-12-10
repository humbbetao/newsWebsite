import React, { Component } from 'react';
import NavbarRight from './Content/NavbarRight';
import NavbarLeft from './Content/NavbarLeft';
import ListNews from './Content/ListNews';
import './css/newsBody.css';

class News extends Component {
    render() {

        return (
            <div className="newsBody">
                <div className="col-lg-6 col-md-12 col-sm-12" id="main-content" >
                    <h1>Results for: {this.props.params.title}</h1>
                    <ListNews query={this.props.params.title} />
                </div>
                <NavbarLeft />
                <NavbarRight />
            </div>
        );
    }
}

export default News;
