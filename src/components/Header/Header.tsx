import { useEffect, useState } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import { MdLanguage, MdMiscellaneousServices } from 'react-icons/md';
import { RiAccountCircleLine } from 'react-icons/ri';
import shopLogo from '../../assets/All-I-Buy.png';
import TopBanner from '../TopBanner/TopBanner';
import { NavLink } from 'react-router-dom';
import Dropdown from './../Dropdown/Dropdown';

const Header = ({ isLoggedIn, theme, setTheme }: any) => {
  const [navbarTop, setNavbarTop] = useState(50);

  const style =
    theme === 'light' ? { backgroundColor: 'white', color: 'black' } : {};

  console.log(theme);

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

  const handleDropdownSelected = (selectedOption: string) => {
    console.log(selectedOption);
  };

  return (
    <>
      <TopBanner />

      <nav className='navbar' style={{ top: navbarTop }}>
        <div>
          <div
            className='info-modal'
            style={{
              display: 'block',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: '1.5rem',
              color: 'black',
              backgroundColor: 'yellow',
            }}
          >
            The website is WIP(work in progress). Many features are missing or
            existing features will be changed along with the UI.
          </div>
          <div className='nav-content'>
            <div className='brand'>
              <img src={`${shopLogo}`} alt='shop logo' />
              <span className='brand-text'>All-I-Buy</span>
            </div>
            <ul>
              <NavLink to={'#'}>
                <MdLanguage size={25} />
                <span>Language</span>
                <div className='lang-drop'>
                  <Dropdown
                    options={['EN', 'DE', 'HU']}
                    onSelect={handleDropdownSelected}
                  />
                </div>
              </NavLink>
              <NavLink to='#'>
                <RiAccountCircleLine size={25} />
                <span>Account</span>
              </NavLink>
              <NavLink to='#'>
                <MdMiscellaneousServices size={25} />
                <span>Services</span>
              </NavLink>
              <NavLink to='#'>
                <AiOutlineMessage size={25} />
                <span>Support</span>
              </NavLink>
              <NavLink to='#'>
                <BsHandbag size={25} />
                <span>Basket</span>
              </NavLink>
              {/* <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                Switch Theme
              </button> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
