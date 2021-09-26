import React from "react";

import "./styles.scss";

const Footer = () => {
    return(
        <footer className="footer">
    <div className="container">
      <div className="footer-row">
        <div className="col-lg-6 text-lg-left text-center">
          <div className="copyright">
            © 2018—2021 Copyright <strong>Pegascoin.com</strong>. All Rights Reserved.
          </div>          
        </div>
        <div className="col-lg-6">
          <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <a href="mailto:hashrentpool@gmail.com" className="links">Contact Us</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
    )
}
export default Footer;