import { useEffect, useState } from 'react';
import './App.scss';
import LoginPage from './components/LoginPage/LoginPage';
import TopNavbar from './components/TopNavbar/TopNavbar';
import RegisterPage from './components/RegisterPage/RegisterPage';
import getProducts from './components/services/services';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import electronics from './assets/carousel/electronics.jpg';
import jewelry from './assets/carousel/jewelery.jpg';
import fashion_women from './assets/carousel/fashion-women.jpg';
import accessories from './assets/carousel/accessories.jpg';
import Advertisements from './components/Advertisements/Advertisements';

function App() {
  const [isGuest, setIsGuest] = useState(true);

  const images = [electronics, jewelry, fashion_women, accessories];

  return (
    <div>
      <TopNavbar />
      {!isGuest && <LoginPage />}
      {!isGuest && <RegisterPage />}
      <div className='ads'>
        <Advertisements images={images} />
      </div>
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
