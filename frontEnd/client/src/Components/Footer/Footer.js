import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col-md-3 col-sm-12">
              <img src="/images/logoWhite.png" className="logo"/>
          </div>
          {/* Column2 */}
          <div className="col-md-3 col-sm-12">
            <h6>Contact</h6>
            <ul className="list-unstyled">
              <li>Manila, Philippines</li>
              <li>pcsp.web@info.ph</li>
              <li>(+63) 9269420690</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col-md-3 col-sm-12">
            <h6>Connect</h6>
            <ul className="list-unstyled">
              <li>LinkedIn</li>
            </ul>
          </div>
          {/* Column4 */}
          <div className="col-md-3 col-sm-12">
            <h6>Copyright</h6>
            <ul className="list-unstyled">
              <li>@ 2021 PCSP. All Rights Reserved</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;