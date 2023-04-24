import { render, screen } from '@testing-library/react';
import AuthForm from '../components/AuthForm';

test('AuthForm: sign up has username placeholder', () => {
  render(<AuthForm isLogin={false}/>);
  const username = screen.getByPlaceholderText('Username');
  expect(username).toBeVisible();
});

test('AuthForm: sign up has email placeholder', () => {
  render(<AuthForm isLogin={false}/>);
  const email = screen.getByPlaceholderText('Email');
  expect(email).toBeVisible();
});

test('AuthForm: sign up has password placeholder', () => {
  render(<AuthForm isLogin={false}/>);
  const password = screen.getByPlaceholderText('Password');
  expect(password).toBeVisible();
});

test('AuthForm: sign up has sign up btn', () => {
  render(<AuthForm isLogin={false}/>);
  const btn = screen.getByRole('button', {
    name: 'Sign Up',
  });
  expect(btn).toBeVisible();
});

test('AuthForm: sign up has sign up title', () => {
  render(<AuthForm isLogin={false}/>);
  const title = screen.getByRole('heading', {
    name: 'Sign Up',
  });
  expect(title).toBeVisible();
});

test('AuthForm: login does not have username placeholder', () => {
  render(<AuthForm isLogin/>);
  const username = screen.queryByText('Username');
  expect(username).not.toBeInTheDocument();
});

test('AuthForm: login has email placeholder', () => {
  render(<AuthForm isLogin/>);
  const email = screen.getByPlaceholderText('Email');
  expect(email).toBeVisible();
});

test('AuthForm: login has password placeholder', () => {
  render(<AuthForm isLogin/>);
  const password = screen.getByPlaceholderText('Password');
  expect(password).toBeVisible();
});

test('AuthForm: login has login btn', () => {
  render(<AuthForm isLogin/>);
  const btn = screen.getByRole('button', {
    name: 'Login',
  });
  expect(btn).toBeVisible();
});

test('AuthForm: login has login title', () => {
  render(<AuthForm isLogin/>);
  const title = screen.getByRole('heading', {
    name: 'Login',
  });
  expect(title).toBeVisible();
});

test('AuthForm: login with facebook', () => {
  render(<AuthForm />);
  const btn = screen.getByLabelText('login with facebook');
  expect(btn).toBeVisible();
});

test('AuthForm: login with google', () => {
  render(<AuthForm />);
  const btn = screen.getByLabelText('login with google');
  expect(btn).toBeVisible();
});

test('AuthForm: login with twitter', () => {
  render(<AuthForm />);
  const btn = screen.getByLabelText('login with twitter');
  expect(btn).toBeVisible();
});
