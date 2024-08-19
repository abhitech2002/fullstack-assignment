import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Abstract</h3>
        <p>Branches</p>
      </div>
      <div className="footer-section">
        <h3>Resources</h3>
        <p>Blog</p>
        <p>Help Center</p>
        <p>Release Notes</p>
        <p>Status</p>
      </div>
      <div className="footer-section">
        <h3>Community</h3>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>Facebook</p>
        <p>Dribble</p>
        <p>Podcast</p>
      </div>
      <div className="footer-section">
        <h3>Company</h3>
        <p>About Us</p>
        <p>Careers</p>
        <p>Legal</p>
        <h3>Contact Us</h3>
        <p>info@abstract.com</p>
      </div>
      <div className="footer-section footer-right">
      <div className="footer-section footer-logo">
        <img src={logo} alt="Abstract Logo" className="footer-logo-image" />
      </div>
        <p>© Copyright 2024</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
