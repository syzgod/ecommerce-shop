import { useEffect, useState } from 'react';
import './App.scss';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import getProducts from './components/services/services';
import ProductList from './components/ProductList/ProductList';
import SideNavbar from './components/SideNavbar/SideNavbar';

function App() {
  const [isGuest, setIsGuest] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <SideNavbar />
      <Navbar />
      {!isGuest && <Login />}
      {!isGuest && <Register />}
      <ProductList />
    </div>
  );
}

export default App;
