import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/search';
import { Redirect } from 'react-router';
import './css/BarSearch.css'

class BarSearch extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            query: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ query: event.target.value });
        console.log(this.state.query)
    }

    handleSubmit(event) {
        // this.props.searchTerm(this.state.query);
        // this.setState({ query: event.target.value });
        console.log(this.state.query);
        <Redirect to={'news/:'.concat(this.state.query)} />;
        // event.preventDefault();
        // this.setState({ query: '' });
    }

    render() {
        return (
            <form className="navbar-form form-inline navbar-right">
                <div className="input-group">
                    <input className="form-control input-lg" id='searchBox' placeholder="Search..." type="text"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />

                    <span className="input-group-btn">
                        <button type="submit" className="btn input-lg" id="searchButton" onClick={this.handleSubmit}>
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </form>

        );
    }
}


const mapStateToProps = state => ({
    query: state.query,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BarSearch);
