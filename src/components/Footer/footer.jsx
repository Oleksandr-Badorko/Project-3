import React from 'react';
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__socials">
        <a href="https://www.youtube.com/marvel">
          <i className="fab fa-youtube"></i> youtube
        </a>
        <a href="https://www.facebook.com/Marvel/">
          <i className="fab fa-facebook-f"></i> facebook
        </a>
        <a href="https://twitter.com/marvel">
          <i className="fab fa-twitter"></i> twitter
        </a>
        <a href="https://www.instagram.com/marvel/">
          <i className="fab fa-instagram"></i> instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;