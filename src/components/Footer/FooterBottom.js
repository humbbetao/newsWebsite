import React, { Component } from 'react';
import {Link} from 'react-router';

class FooterBottom extends Component {
    render() {

        return (
            <div className="footer_bottom">
                <div className="container">
                    <p className="copyright">Copyright &copy; 2017
                        <Link to="/">
                            Cyber news
                        </Link>
                    </p>
                    <p className="developer">Developed By Humberto Gonçalves</p>
                </div>
            </div>
        );
    }
}

export default FooterBottom;