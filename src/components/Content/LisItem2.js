import React, { Component } from 'react';
import './bodyNews.css'
import ItensListContaint from './ItensListContaint';

class ListItem2 extends Component {
    constructor(props){
        super(props);
    }
    render() {

        return (
            <ul class="featured_nav">
                {this.props.news.map((value, id)=>
                {
                    return <ItensListContaint  new ={ value}/>
                }
                )}
                
            </ul>

        );
    }
}


export default ListItem2;