import './Auth.css';
import AuthForm from './AuthForm';
import { useState, useRef } from "react";
import AuthPanel from './AuthPanel';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const authContainer = useRef(null);
  const authPanelContainer = useRef(null);

  // should probably rewrite the animations in something like Framer Motion
  // vanilla css produces code like this: (unless theres better way to write it but idk how to)
  const toggle = () => {
    authContainer.current.classList.toggle('signup');

    const tweenTime = parseInt(window.getComputedStyle(document.body).getPropertyValue('--auth-tween-time'));
    if (!isLogin) {
      authContainer.current.classList.add('login2signup');
      setTimeout(() => {
        authContainer.current.classList.remove('login2signup');
      }, 2*tweenTime);

      authPanelContainer.current.classList.add('login-out');
      setTimeout(() => {
        authPanelContainer.current.classList.remove('login-out');
      }, 2*tweenTime);
    } else {
      authContainer.current.classList.add('signup2login');
      setTimeout(() => {
        authContainer.current.classList.remove('signup2login');
      }, 2*tweenTime);

      authPanelContainer.current.classList.add('signup-out');
      setTimeout(() => {
        authPanelContainer.current.classList.remove('signup-out');
      }, 2*tweenTime);
    }

    setTimeout(() => {
      setIsLogin(!isLogin);
    }, tweenTime);
  };

  return (
    <div ref={authContainer} className="Auth-container">
      <div ref={authPanelContainer} className="Auth-panel-container">
        <AuthPanel isLogin={isLogin} toggle={toggle}></AuthPanel>
      </div>
      <div className="Auth-form-container">
        <AuthForm isLogin={isLogin}></AuthForm>
      </div>
    </div>
  );
}

export default Auth;
