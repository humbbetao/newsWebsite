import React, { Component } from 'react';
import ItensListContaint from './ItensListContaint';


const urlForSearch = tema =>
'http://content.guardianapis.com/search?show-elements=all&show-fields=all&q='+tema+'&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'


class ListNews extends Component {
    componentDidMount() {
    
        if (this.props.error) {
            return <p>{this.props.error.message}</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading ...</p>;
        }
    }
    render() {

        return (
            <ul className="featured_nav">
                {/* {this.state.response.results.map((value, id) => {
                    return <ItensListContaint key={id} new={value} />
                })} */}
            </ul>
        );
    }
}



export default ListNews;