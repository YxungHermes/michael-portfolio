import React, { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSubmitted(false); // Reset submitted state

    // Basic validation (can be expanded)
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate API call
    console.log("Form submitted:", form);
    try {
      // Replace with actual API call:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form), headers: {'Content-Type': 'application/json'} });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" }); // Clear form on success
      setTimeout(() => setSubmitted(false), 5000); // Reset submitted message after 5s
    } catch (apiError) {
      console.error("Form submission error:", apiError);
      setError("There was an issue sending your message. Please try again later.");
    }
  };

  return (
    <div className="contact-form-container">
      <h1>Get In Touch</h1>
      {error && <p style={{ color: '#ff4d4d', textAlign: 'center', marginBottom: '15px' }}>{error}</p>}
      {submitted ? (
        <p style={{ color: '#4CAF50', textAlign: 'center' }}>Thank you! Your message has been sent. I'll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            aria-required="true"
          />
          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            aria-required="true"
          />
          <label htmlFor="message" className="sr-only">Tell me about your project...</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange}
            rows="6"
            required
            aria-required="true"
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;