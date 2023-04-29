import './AuthPanel.css';

function AuthPanel({ isLogin, toggle }) {
  return (
    <>
      <h3 className='Auth-panel-title'>
        {isLogin ? 'Hello, Friend!' : 'Welcome Back!'}
      </h3>
      <button className='Auth-panel-toggle' onClick={toggle}>
        {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </>
  );
}

export default AuthPanel;
