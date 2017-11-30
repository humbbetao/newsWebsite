import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Labels from './Footer/Labels';
import Sending from './Footer/Sending';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm4">
                <Labels />
              </div>

              <div className="col-lg-4 col-md-4 col-sm4">
                <Sending />
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="container">
            <p className="copyright">Copyright &copy; 2045 <a href="index.html">Cyber news</a></p>
            <p className="developer">Developed By Humberto Gonçalves</p>
          </div>
        </div>
      </footer>
    );
  }
}


export default Footer;