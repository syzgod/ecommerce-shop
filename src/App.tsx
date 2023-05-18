import { useEffect, useState } from 'react';
import './App.scss';
import TopNavbar from './components/TopNavbar/TopNavbar';
import getProducts from './components/services/services';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import electronics from './assets/carousel/electronics.jpg';
import jewelry from './assets/carousel/jewelry.jpg';
import fashion_women from './assets/carousel/fashion-women.jpg';
import accessories from './assets/carousel/accessories.jpg';
import Advertisements from './components/Advertisements/Advertisements';
import Login from './pages/login/Login';
import ChatHelper from './components/ChatHelper/ChatHelper';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const images = [electronics, jewelry, fashion_women, accessories];

  return (
    <>
      <ChatHelper />
      {isLoggedIn ? (
        <>
          <TopNavbar />
          <div className='ads'>
            <Advertisements images={images} />
          </div>
          <ProductList />
        </>
      ) : (
        <>
          <Login setIsLoggedIn={setIsLoggedIn} />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
