import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import App from '../App';

vi.mock('../pages/HomePage', () => ({
  default: () => <div>Home demo page</div>,
}));

vi.mock('../pages/ContactPage', async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return {
    default: () => <div>Contact demo page</div>,
  };
});

describe('route loading fallback', () => {
  it('shows the page loader while a route is still loading', async () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByRole('status', { name: /cargando página/i })).toBeInTheDocument();
    expect(await screen.findByText('Contact demo page')).toBeInTheDocument();
  });
});