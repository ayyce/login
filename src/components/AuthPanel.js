import './AuthPanel.css';

function AuthPanel(props = { isLogin: true }) {
  const { isLogin } = props;

  return (
    <div>
      <h3 className='Auth-panel-title'>
        {isLogin ? 'Hello, Friend!' : 'Welcome Back!'}
      </h3>
      <button className='Auth-panel-toggle' onClick={props.toggle}>
        {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </div>
  );
}

export default AuthPanel;
