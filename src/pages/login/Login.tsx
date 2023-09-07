import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../assets/All-I-Buy.png';
import { useState } from 'react';

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login = ({ setIsLoggedIn }: LoginProps) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleTester = () => {
    setUserEmail('test@test.com');
    setUserPassword('test');
    setIsLoggedIn(true);
  };

  const handleEmail = (e: any) => {
    setUserEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setUserPassword(e.target.value);
  };

  return (
    <motion.div
      className='form-container'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='login-form'>
        <img src={logo} alt='all-i-buy-logo' />
        <form action='submit'>
          <label htmlFor='email'>E-mail</label>
          <input
            type='text'
            name=''
            id='email'
            value={userEmail}
            onChange={handleEmail}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name=''
            id='password'
            value={userPassword}
            onChange={handlePassword}
          />
          <div className='form-buttons'>
            <div className='action-buttons'>
              <Link to='/' onClick={handleLogin}>
                Login
              </Link>
              <Link to='/register'>Register</Link>
            </div>
            <div className='login-type'>
              <Link to='/' onClick={handleTester}>
                Tester
              </Link>
              <Link to='/' onClick={handleLogin}>
                Admin
              </Link>
            </div>
          </div>
          <div className='helper-links'>
            <a href='#'>Forgot password?</a>
            <a href='#'>Need help?</a>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
