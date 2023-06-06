import React, { ComponentProps } from 'react';

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login = ({ setIsLoggedIn, handleRegister }: LoginProps) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='form-container'>
      <form action='submit'>
        <label htmlFor='email'>E-mail</label>
        <input type='text' name='' id='email' value='test@test.com' />
        <label htmlFor='password'>Password</label>
        <input type='text' name='' id='password' value='test' />
        <div className='form-buttons'>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleRegister}>Register</button>
        </div>
        <a href='#'>Forgot password?</a>
        <a href='#'>Need help?</a>
      </form>
    </div>
  );
};

export default Login;
