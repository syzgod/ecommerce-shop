import { useEffect, useState, useContext } from 'react';
import './main.scss';

import Header from './components/Header/Header';
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
import { ThemeContext } from './context/ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App(props: any) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState<boolean>(false);

  const handleShow = () => {
    setOpen(!open);
  };

  const images = [electronics, jewelry, fashion_women, accessories];

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route path='/' element={<Layout />}>
            <Route
              path='/carousel'
              element={<ImageCarousel images={images} />}
            />
            <Route path='/' element={<ProductList />} />
            <Route path='/advertisements' element={<Advertisements />} />
          </Route>
        ) : (
          <>
            <Route
              path='/login'
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
