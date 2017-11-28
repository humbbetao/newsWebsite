import React, { Component } from 'react';
import Flexbox from 'flexbox-react';


class BarSearch extends Component {
    render() {
        return (
            <form class="navbar-form navbar-right">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Type your search" aria-describedby="sizing-addon1" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button">Search</button>
                    </span>
                </div>
            </form>
        );
    }
}


export default BarSearch;