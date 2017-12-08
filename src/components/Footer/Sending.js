import React, { Component } from 'react';
import './css/sending.css';

class Sending extends Component {
    render() {
        return (
            <div className="footer_widget">
                <h2>Contact us</h2>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Submit</button>
                        </span>
                    </div>
                  
                <p id="subscribe-text">We promise, we will only send you awesome stuff which will make your day!</p>
                </form>
            </div >
        );
    }
}
export default Sending;