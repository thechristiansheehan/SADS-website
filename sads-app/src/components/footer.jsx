import React from 'react';
import './footer.css';
import logo from '../assets/images/sads_logo_cropped.png'

const Footer = () => {
  return (
 <footer>
  <br></br>
  <img width = "150px" src={logo}></img>
    <br></br>
    <br></br>
    This is the footer component.
    <br></br>
    <br></br>
    <div class="footer-links">
        <a title="GitHub" href=""><i class="fa-brands fa-github"></i></a>
        <a title="Instagram" href=""><i class="fa-brands fa-instagram"></i></a>
        <a title="LinkedIn" href=""><i class="fa-brands fa-linkedin"></i></a>
        <a title="Email" href=""><i class="fa fa-envelope"></i></a>
    </div>
    <br></br>
 </footer>
);
};

export default Footer;