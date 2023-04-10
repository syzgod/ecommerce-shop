import React from 'react';
import { BsBasket } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import { MdOutlineHomeRepairService, MdLanguage } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import shopLogo from '../assets/All-I-Buy.png';

const Navbar = () => {
  return (
    <nav>
      <div className='brand'>
        <img src={`${shopLogo}`} alt='shop logo' />
        <span className='brand-text'>All-I-Buy</span>
      </div>
      <ul>
        <li>
          <MdLanguage size={20} />
          <a href='#'>Language</a>
        </li>
        <li>
          <VscAccount size={20} />
          <a href='#'>My Account</a>
        </li>
        <li>
          <MdOutlineHomeRepairService size={20} />
          <a href='#'>Services</a>
        </li>
        <li>
          <AiOutlineMessage size={20} />
          <a href='#'>Contact</a>
        </li>
        <li>
          <BsBasket size={20} />
          <a href='#'>Basket</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
