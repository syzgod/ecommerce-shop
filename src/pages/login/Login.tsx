import React, { ComponentProps } from 'react';

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login = ({ setIsLoggedIn }: LoginProps) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='form-container'>
      <form action='submit'>
        <label htmlFor='email'>User e-mail</label>
        <input type='text' name='' id='email' value='test@test.com' />
        <label htmlFor='password'>User password</label>
        <input type='text' name='' id='password' value='test' />
        <div className='form-buttons'>
          <button onClick={handleLogin}>Login</button>
          <button>Register</button>
        </div>
        <p>Forgot password?</p>
        <p>Need help?</p>
      </form>
    </div>
  );
};

export default Login;
