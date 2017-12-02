import React, { Component } from 'react';

class Sending extends Component {
    render() {
        return (
            <div className="footer_widget wow fadeInRightBig">
                <h2>Contact us</h2>
                <form className="navbar-form navbar-right subscribe_form">
                    <div className="container-1">
                        <input type="text" id="search" placeholder="Email Address" name="email" />
                        <input type="submit" value="Submit" />
                    </div>
                    <p id="subscribe-text">We promise, we will only send you awesome stuff which will make your day!</p>
                </form>
            </div >
        );
    }
}
export default Sending;