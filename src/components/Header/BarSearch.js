import React, { Component } from 'react';

class BarSearch extends Component {
    render() {
        return (
            <form className="navbar-form navbar-right">
                <div className="container-1">
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Search..." />
                </div>

            </form>
        );
    }
}


export default BarSearch;