import { useEffect, useState } from 'react';
import './App.scss';
import Login from './components/Login/Login';
import Navbar from './components/TopNavbar/TopNavbar';
import Register from './components/Register/Register';
import getProducts from './components/services/services';
import ProductList from './components/ProductList/ProductList';

function App() {
  const [isGuest, setIsGuest] = useState(true);

  return (
    <div>
      <Navbar />
      {!isGuest && <Login />}
      {!isGuest && <Register />}
      <ProductList />
    </div>
  );
}

export default App;
