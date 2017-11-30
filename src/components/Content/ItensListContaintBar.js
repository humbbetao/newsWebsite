import React, { Component } from 'react';
import './bodyNews.css'
class ItensListContaintBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <li>
                <div className="media">
                    <a className="media-left" href="pages/single_page.html">
                        <img src={this.props.value.urlToImage} alt="" />
                    </a>
                    <div className="media-body">
                        <a className="catg_title" href="#">
                            {this.props.title}
                        </a>
                        
                    </div>
                </div>
            </li>
        );
    }
}
export default ItensListContaintBar;