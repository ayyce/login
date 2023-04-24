import { render, screen } from '@testing-library/react';
import AuthPanel from '../components/AuthPanel';

test('AuthPanel: sign up has login btn', () => {
  render(<AuthPanel isLogin={false} />);
  const btn = screen.getByRole('button', {
    name: 'Login',
  });
  expect(btn).toBeVisible();
});

test('AuthPanel: login has sign up btn', () => {
  render(<AuthPanel isLogin />);
  const btn = screen.getByRole('button', {
    name: 'Sign Up',
  });
  expect(btn).toBeVisible();
});
