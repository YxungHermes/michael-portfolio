import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title animate-on-scroll">Let's Create Together</h1>
        <p className="contact-subtitle animate-on-scroll">
          Have a project in mind? I'd love to hear about it.
        </p>
        
        <div className="contact-info animate-on-scroll">
          <div className="contact-item">
            <span className="contact-item-label">Email</span>
            <a href="mailto:hello@yourname.com" className="contact-item-value">
              hello@yourname.com
            </a>
          </div>
          
          <div className="contact-item">
            <span className="contact-item-label">Phone</span>
            <a href="tel:+1234567890" className="contact-item-value">
              +1 (234) 567-890
            </a>
          </div>
          
          <div className="contact-item">
            <span className="contact-item-label">Location</span>
            <span className="contact-item-value">
              New York, NY
            </span>
          </div>
        </div>
        
        <div className="contact-social animate-on-scroll">
          <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            Follow my work on social media
          </p>
          <div className="footer-right" style={{ justifyContent: 'center' }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Vimeo"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 7c0 5.5-4.5 10-10 10S2 12.5 2 7c0-1.6.6-3.1 1.6-4.1C4.6 1.6 6.1 1 7.7 1c3.1 0 5.6 2.5 5.6 5.6 0 2.2-1.8 4-4 4-1.3 0-2.4-.6-3.1-1.6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;