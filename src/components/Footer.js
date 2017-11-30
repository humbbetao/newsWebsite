import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Labels from './Footer/Labels';
import Sending from './Footer/Sending';
class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div class="footer_top">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm4">
                <Labels />
              </div>

              <div class="col-lg-4 col-md-4 col-sm4">
                <Sending />
              </div>
            </div>
          </div>
        </div>

        <div class="footer_bottom">
          <div class="container">
            <p class="copyright">Copyright &copy; 2045 <a href="index.html">Cyber news</a></p>
            <p class="developer">Developed By Humberto Gonçalves</p>
          </div>
        </div>
      </footer>
    );
  }
}


export default Footer;