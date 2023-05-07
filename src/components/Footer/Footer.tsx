import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaXing,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-information'>
        <li>
          <a href='#'>Track my order</a>
        </li>
        <li>
          <a href='#'>Delivery options</a>
        </li>
        <li>
          <a href='#'>Order & collect</a>
        </li>
        <li>
          <a href='#'>Returns & cancellations</a>
        </li>
        <li>
          <a href='#'>Stores</a>
        </li>
        <li>
          <a href='#'>Ways to pay</a>
        </li>
      </div>
      <div className='footer-social'>
        <h3>Social Links</h3>
        <section className='social-links'>
          <li>
            <FaFacebook />
            <a href='#'>Facebook</a>
          </li>
          <li>
            <FaInstagram />
            <a href='#'>Instagram</a>
          </li>
          <li>
            <FaTwitter />
            <a href='#'>Twitter</a>
          </li>
          <li>
            <FaLinkedin />
            <a href='#'>Linkedin</a>
          </li>
          <li>
            <FaXing />
            <a href='#'>Xing</a>
          </li>
        </section>
      </div>
      <div className='footer-legal'>
        <li>
          <a href='#'>Privacy and cookies policy</a>
        </li>
        <li>
          <a href='#'>Terms & conditions</a>
        </li>
        <li>
          <a href='#'>Sitemap</a>
        </li>
      </div>
      <div className='footer-communication'>
        <li>
          <a href='#'>Contact us</a>
        </li>
        <li>
          <a href='#'>About us</a>
        </li>
        <li>
          <a href='#'>Careers</a>
        </li>
      </div>
    </div>
  );
};

export default Footer;
