import React from 'react';

const Register = () => {
  return (
    <div>
      <label htmlFor='email'>E-mail address</label>
      <input type='text' name='' id='email' />
      <label htmlFor='emailConfirm'>Confirm E-mail address</label>
      <input type='text' name='' id='emailConfirm' />
      <button>Register</button>
      <button>Back to Login</button>
      <a href='#'>Need help?</a>
    </div>
  );
};

export default Register;
