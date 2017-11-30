import React, { Component } from 'react';
import './bodyNews.css'
class ItensListContaintBar extends Component {
    render() {

        return (
            <li>
                <div className="media">
                    <a className="media-left" href="pages/single_page.html">
                        <img src={require('./teste4.jpg')} alt="" />
                    </a>
                    <div className="media-body">
                        <a className="catg_title" href="#">
                            Aliquam malesuada diam eget turpis varius
                        </a>
                    </div>
                </div>
            </li>
        );
    }
}
export default ItensListContaintBar;