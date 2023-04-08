import { useEffect, useState } from 'react';
import './App.scss';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import getProducts from './components/services/services';
import ProductList from './components/ProductList';

function App() {
  const [isGuest, setIsGuest] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);
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
