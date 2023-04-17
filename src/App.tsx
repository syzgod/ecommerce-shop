import { useEffect, useState } from 'react';
import './App.scss';
import LoginPage from './components/LoginPage/LoginPage';
import TopNavbar from './components/TopNavbar/TopNavbar';
import RegisterPage from './components/RegisterPage/RegisterPage';
import getProducts from './components/services/services';
import ProductList from './components/ProductList/ProductList';

function App() {
  const [isGuest, setIsGuest] = useState(true);

  return (
    <div>
      <TopNavbar />
      {!isGuest && <LoginPage />}
      {!isGuest && <RegisterPage />}
      <ProductList />
    </div>
  );
}

export default App;
