import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
  it('renders contact channels without displaying the phone number', () => {
    render(<ContactSection />);

    expect(
      screen.getByRole('heading', { name: /canal directo de comunicación profesional/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('Bogotá, Colombia')).toBeInTheDocument();
    expect(screen.getByText('dianabermudezc@gmail.com')).toBeInTheDocument();
    expect(screen.queryByText('3133030681')).not.toBeInTheDocument();
  });

  it('provides mailto: and WhatsApp links without exposing the phone digits', () => {
    render(<ContactSection />);

    const mailLink = screen.getByRole('link', { name: /dianabermudezc@gmail.com/i });
    expect(mailLink).toHaveAttribute('href', 'mailto:dianabermudezc@gmail.com');

    const whatsappLink = screen.getByRole('link', { name: /whatsapp/i });
    expect(whatsappLink).toHaveAttribute('href', expect.stringContaining('https://wa.me/573133030681'));
    expect(whatsappLink).toHaveAttribute('href', expect.stringContaining('text='));
    expect(whatsappLink.textContent).not.toContain('3133030681');
  });
});