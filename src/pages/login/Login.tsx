import React from 'react';

const Login = () => {
  return (
    <div>
      <form action=''>
        <label htmlFor='email'>User e-mail</label>
        <input
          type='text'
          name=''
          id='email'
          placeholder='youremail@address.com'
        />
        <label htmlFor='password'>User password</label>
        <input type='text' name='' id='password' placeholder='***' />
        <button>Login</button>
        <button>Register</button>
        <p>Forgot password?</p>
        <p>Need help?</p>
      </form>
    </div>
  );
};

export default Login;
