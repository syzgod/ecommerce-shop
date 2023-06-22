import React, { ComponentProps } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login = ({ setIsLoggedIn }: LoginProps) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <motion.div
      className='form-container'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <form action='submit'>
        <label htmlFor='email'>E-mail</label>
        <input type='text' name='' id='email' value='test@test.com' />
        <label htmlFor='password'>Password</label>
        <input type='text' name='' id='password' value='test' />
        <div className='form-buttons'>
          <button onClick={handleLogin}>Login</button>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <a href='#'>Forgot password?</a>
        <a href='#'>Need help?</a>
      </form>
    </motion.div>
  );
};

export default Login;
