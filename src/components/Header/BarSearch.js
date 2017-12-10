import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as searchActions from '../../actions/search';
import { browserHistory } from 'react-router';
import './css/BarSearch.css'

class BarSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ query: event.target.value });
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
                        <button type="submit" className="btn input-lg" id="searchButton" onClick={() => browserHistory.push(`/search/query=${this.state.query}`)}  >
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </form>

        );
    }
}

// const mapStateToProps = state => ({
//     query: state.query,
// });

// const mapDispatchToProps = dispatch =>
//     bindActionCreators(searchActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(BarSearch);
export default BarSearch;