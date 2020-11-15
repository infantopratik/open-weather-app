import { render, screen } from '@testing-library/react';
import App from './App';

test('renders location', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bengaluru/i);
  expect(linkElement).toBeInTheDocument();
});
