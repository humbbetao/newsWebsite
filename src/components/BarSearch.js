import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './header.css'


class BarSearch extends Component {
    render() {
        return (
            <div>
                <a className="search_icon" href="#">
                    <i className="fa fa-search"></i>
                </a>
            </div>

        );
    }
}


export default BarSearch;