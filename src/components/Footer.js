import React, { Component } from 'react';
import Labels from './Footer/Labels';
import Sending from './Footer/Sending';
import FooterBottom from './Footer/FooterBottom'
import './css/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm8">
                <Labels />
              </div>

              <div className="col-lg-4 col-md-4 col-sm4">
                <Sending />
              </div>
            </div>
          </div>
        </div>

       <FooterBottom/>
      </footer>
    );
  }
}


export default Footer;