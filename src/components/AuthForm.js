import './AuthForm.css';
import { Icon } from '@iconify/react';

function AuthForm(props = { isLogin: true }) {
  const { isLogin } = props;
  return (
    <form action="#" className="Auth-form">
      <h2 className="Auth-title">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <div className="Auth-social-media">
        <button aria-label="login with facebook">
          <Icon icon="basil:facebook-solid" />
        </button>
        <button aria-label="login with google">
          <Icon icon="mdi:google" />
        </button>
        <button aria-label="login with twitter">
          <Icon icon="mdi:twitter" />
        </button>
      </div>
      <div className="Auth-note">
        {isLogin ? 'or use your email:' : 'or use your email for registration:'}
      </div>
      {!isLogin && (
        <div className="Auth-input">
          <Icon icon="mdi:user" />
          <input type="text" placeholder="Username" />
        </div>
      )}
      <div className="Auth-input">
        <Icon icon="mdi:envelope" />
        <input type="email" placeholder="Email" />
      </div>
      <div className="Auth-input">
        <Icon icon="material-symbols:lock" />
        <input type="password" placeholder="Password" />
      </div>
      {isLogin && (
        <a href='#' className='Auth-forgot'>Forgot your password?</a>
      )}
      <input
        type="submit"
        value={isLogin ? 'Login' : 'Sign Up'}
        className="Auth-submit"
      ></input>
    </form>
  );
}

export default AuthForm;
