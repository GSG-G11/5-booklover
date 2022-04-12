import React from 'react'
import './Login.css'

const Login = (props) => {
  const {
    displayModal,
    nameSeller,
    passwordSeller,
    handleChange,
    handleLogin,
    handleLoginSeller,
    errorLogin,
  } = props;
  return (
    displayModal && (
      <div className='login-modal'>
        <form className='form-login'>
          <button className='btn' onClick={(e) => handleLogin(e)}>
            <i className='ri-close-line'></i>
          </button>
          <input
            type='text'
            placeholder='Enter Your Name'
            name='nameSeller'
            value={nameSeller}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Enter Password'
            name='passwordSeller'
            value={passwordSeller}
            onChange={handleChange}
          />
          <span className='error'>{errorLogin}</span>
          <button
            type='click'
            className='form-login-Btn'
            onClick={handleLoginSeller}>
            Login
          </button>
        </form>
      </div>
    )
  );
}

export default Login