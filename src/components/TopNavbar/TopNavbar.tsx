import React, { useEffect, useState } from 'react';
import { BsBasket } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import { MdOutlineHomeRepairService, MdLanguage } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import shopLogo from '../../assets/All-I-Buy.png';
import TopBanner from '../TopBanner/TopBanner';

const TopNavbar = () => {
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
    if (window.pageYOffset > 0) {
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
          </li>
          <li>
            <VscAccount size={25} />
            <a href='#'></a>
          </li>
          <li>
            <MdOutlineHomeRepairService size={25} />
            <a href='#'></a>
          </li>
          <li>
            <AiOutlineMessage size={25} />
            <a href='#'></a>
          </li>
          <li>
            <BsBasket size={25} />
            <a href='#'></a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNavbar;
