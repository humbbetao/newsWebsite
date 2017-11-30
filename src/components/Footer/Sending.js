import React, { Component } from 'react';

class Sending extends Component {
    render() {
        return (
            <div className="footer_widget wow fadeInRightBig">
                <h2>Jetpack Subscription Widget</h2>
                <form action="#" className="subscribe_form">
                    <p id="subscribe-text">We promise, we will only send you awesome stuff which will make your day!</p>
                    <p id="subscribe-email">
                        <input type="text" placeholder="Email Address" name="email" />
                    </p>
                    <p id="subscribe-submit">
                        <input type="submit" value="Submit" />
                    </p>
                </form>
            </div>
        );
    }
}
export default Sending;