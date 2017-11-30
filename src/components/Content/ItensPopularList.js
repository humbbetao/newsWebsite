import React, { Component } from 'react';
import './bodyNews.css'

class ItensPopularList extends Component {
    render() {
        return (
            <li>
                <div class="media"><a class="media-left" href="pages/single_page.html"><img src="images/70x70.jpg" alt="" /></a>
                    <div class="media-body"><a class="catg_title" href="pages/single_page.html">Aliquam malesuada diam eget turpis varius</a></div>
                </div>
            </li>
        );
    }
}


export default ItensPopularList;