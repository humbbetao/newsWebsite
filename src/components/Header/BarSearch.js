import React, { Component } from 'react';
import { connect } from 'react-redux';

class BarSearch extends Component {
    state = {
        searchTerm: '',
    }
    searchTerm = () => {
        this.props.searchTerm(this.state.searchTerm);
        this.setState({ user: '' })
    };

    render() {
        return (
            <form className="navbar-form navbar-right hidden-xs">
                <div className="input-group container-1 ">
                    <input className="form-control input-lg" placeholder="Search..." type="text"
                        value={this.state.searchTerm}
                        onChange={(e) => this.setState({ searchTerm: e.target.value })} />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-default input-lg" onClick={this.searchTerm}>
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </form>
        );
    }
}


export default BarSearch;