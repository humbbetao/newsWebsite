import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import './css/sending.css';

class Sending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ message: event.target.value });
    }

    render() {
        return (
            <div className="footer_widget">
                <h2>Contact us</h2>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Leave your message"
                            value={this.state.query}
                            onChange={this.handleChange} />
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button" 
                            onClick={() => browserHistory.push(`/contactUs/`, this.state.message )} >Submit</button>
                        </span>
                    </div>

                    <p id="subscribe-text">We promise, we will only send you awesome stuff which will make your day!</p>
                </form>
            </div >
        );
    }
}
export default Sending;