import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Auth from '../components/Auth';

test('Auth: toggle once', async () => {
  render(<Auth />);
  const btn = screen.getByRole('button', {
    name: 'Sign Up',
  });
  fireEvent.click(btn);
  await waitFor(() => {
    const title = screen.getByRole('heading', {
      name: 'Sign Up',
    });
    expect(title).toBeVisible();
  });
});

test('Auth: toggle twice', async () => {
  render(<Auth />);
  let btn = screen.getByRole('button', {
    name: 'Sign Up',
  });
  fireEvent.click(btn);
  await waitFor(() => {
    const title = screen.getByRole('heading', {
      name: 'Sign Up',
    });
    expect(title).toBeVisible();
  });

  btn = screen.getByRole('button', {
    name: 'Login',
  });
  fireEvent.click(btn);
  await waitFor(() => {
    const title = screen.getByRole('heading', {
      name: 'Login',
    });
    expect(title).toBeVisible();
  });
});
