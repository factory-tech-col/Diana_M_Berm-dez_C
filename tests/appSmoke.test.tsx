import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import App from '../App';

vi.mock('../pages/HomePage', () => ({
  default: () => <div>Home demo page</div>,
}));

vi.mock('../pages/ContactPage', () => ({
  default: () => <div>Contact demo page</div>,
}));

vi.mock('../pages/PrivacyPolicyPage', () => ({
  default: () => <div>Privacy demo page</div>,
}));

vi.mock('../pages/TermsPage', () => ({
  default: () => <div>Terms demo page</div>,
}));

describe('app smoke flow', () => {
  it('renders the home page and follows hash navigation', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const mainNavigation = screen.getByRole('navigation', { name: /main navigation/i });
    expect(await screen.findByText('Home demo page')).toBeInTheDocument();

    await user.click(within(mainNavigation).getAllByRole('link', { name: /experiencia/i })[0]);
    expect(screen.getByText('Home demo page')).toBeInTheDocument();
  });

  it('renders a deep-linked route', async () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText('Contact demo page')).toBeInTheDocument();
  });
});