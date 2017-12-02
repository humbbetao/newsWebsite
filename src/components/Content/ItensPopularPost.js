import React, { Component } from 'react';
import './bodyNews.css'
class ItensPopularPost extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <li>
                <div className="media">
                    <a className="media-right" href="pages/single_page.html">
                        <img src={this.props.value.fields.thumbnail} alt="" />
                    </a>
                    <div className="media-body">
                        <a className="catg_title" href="#">
                            {this.props.value.webTitle}
                        </a>
                        
                    </div>
                </div>
            </li>
        );
    }
}
export default ItensPopularPost;