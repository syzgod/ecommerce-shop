import React, { useEffect, useState } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import { MdLanguage, MdMiscellaneousServices } from 'react-icons/md';
import { RiAccountCircleLine } from 'react-icons/ri';
import shopLogo from '../../assets/All-I-Buy.png';
import TopBanner from '../TopBanner/TopBanner';

const TopNavbar = ({ isLoggedIn, theme, setTheme }: any) => {
  const [navbarTop, setNavbarTop] = useState(50);

  // on scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarTop(0);
    } else {
      setNavbarTop(40);
    }
  };

  return (
    <>
      <TopBanner />
      <nav className='navbar' style={{ top: navbarTop }}>
        <div className='brand'>
          <img src={`${shopLogo}`} alt='shop logo' />
          <span className='brand-text'>All-I-Buy</span>
        </div>
        <ul>
          <li>
            <MdLanguage size={25} />
            <a href='#'></a>
            <span>Language</span>
          </li>
          <li>
            <RiAccountCircleLine size={25} />
            <a href='#'></a>
            <span>Account</span>
          </li>
          <li>
            <MdMiscellaneousServices size={25} />
            <a href='#'></a>
            <span>Services</span>
          </li>
          <li>
            <AiOutlineMessage size={25} />
            <a href='#'></a>
            <span>Support</span>
          </li>
          <li>
            <BsHandbag size={25} />
            <a href='#'></a>
            <span>Basket</span>
          </li>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            Switch Theme
          </button>
        </ul>
      </nav>
    </>
  );
};

export default TopNavbar;
