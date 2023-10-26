import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaXing,
  FaMapMarkerAlt,
  FaTruck,
  FaWarehouse,
  FaUndoAlt,
  FaStore,
  FaMoneyBill,
  FaSitemap,
  FaFileContract,
  FaPhone,
  FaInfoCircle,
  FaBriefcase,
} from 'react-icons/fa';
import { MdPrivacyTip } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-information'>
          <h3>Order info</h3>
          <section>
            <li>
              <FaMapMarkerAlt />
              <a href='#'>Track my order</a>
            </li>
            <li>
              <FaTruck />
              <a href='#'>Delivery options</a>
            </li>
            <li>
              <FaWarehouse />
              <a href='#'>Order & collect</a>
            </li>
            <li>
              <FaUndoAlt />
              <a href='#'>Returns & cancellations</a>
            </li>
            <li>
              <FaStore />
              <a href='#'>Stores</a>
            </li>
            <li>
              <FaMoneyBill />
              <a href='#'>Ways to pay</a>
            </li>
          </section>
        </div>
        <div className='footer-social'>
          <h3>Social Links</h3>
          <section>
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
              <a href='https://www.linkedin.com/in/bevik/'>Linkedin</a>
            </li>
            <li>
              <FaXing />
              <a href='https://www.xing.com/profile/Viktor_Berczeli/cv'>Xing</a>
            </li>
          </section>
        </div>
        <div className='footer-legal'>
          <h3>Legal</h3>
          <section>
            <li>
              <MdPrivacyTip />
              <a href='#'>Privacy and cookies</a>
            </li>
            <li>
              <FaFileContract />
              <a href='#'>Terms & conditions</a>
            </li>
            <li>
              <FaSitemap />
              <a href='#'>Sitemap</a>
            </li>
          </section>
        </div>
        <div className='footer-communication'>
          <h3>Communication</h3>
          <section>
            <li>
              <FaPhone />
              <a href='https://www.dev-vik.tech/home'>Contact us</a>
            </li>
            <li>
              <FaInfoCircle />
              <a href='https://www.dev-vik.tech/home'>About us</a>
            </li>
            <li>
              <FaBriefcase />
              <a href='#'>Careers</a>
            </li>
          </section>
        </div>
      </div>
      <footer
        style={{
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <a style={{ color: '#00d0ff' }} href='https://www.dev-vik.tech/home'>
          Viktor Berczeli
        </a>
      </footer>
    </>
  );
};

export default Footer;
