import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders only the essential navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const navigation = screen.getByRole('navigation', { name: /main navigation/i });

    expect(within(navigation).getAllByRole('link', { name: /inicio/i }).length).toBeGreaterThan(0);
    expect(within(navigation).getAllByRole('link', { name: /experiencia/i }).length).toBeGreaterThan(0);
    expect(within(navigation).getAllByRole('link', { name: /formación/i }).length).toBeGreaterThan(0);
    const contactoLink = within(navigation).getByRole('link', { name: /contacto/i });
    expect(contactoLink).toHaveAttribute('href', '/#contacto');
    expect(within(navigation).queryByRole('link', { name: /competencias/i })).not.toBeInTheDocument();
    expect(within(navigation).queryByRole('link', { name: /perfil/i })).not.toBeInTheDocument();
    expect(within(navigation).getByRole('button', { name: /abrir menú/i })).toBeInTheDocument();
  });
});