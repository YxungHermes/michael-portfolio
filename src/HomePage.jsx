import { useState } from "react";

export default function HomePage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 font-sans">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Michael Andrade | Director & Videographer</h1>
        <p className="text-lg mt-2">Weddings | Music Videos | Branded Content</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 px-4">
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
          <video controls className="w-full">
            <source src="/videos/sample1.mp4" type="video/mp4" />
          </video>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Wedding Highlight – Ari & Billy</h3>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
          <video controls className="w-full">
            <source src="/videos/sample2.mp4" type="video/mp4" />
          </video>
          <div className="p-4">
            <h3 className="text-xl font-semibold">BTS – Dakota Blue "Nonexistent"</h3>
          </div>
        </div>
      </section>

      <section className="mt-12 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Book Me for Your Next Project</h2>
        {submitted ? (
          <p className="text-green-400 text-center">Thank you! I'll be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange}
              className="bg-gray-800 p-3 rounded text-white" required />
            <input name="email" placeholder="Your Email" value={form.email} onChange={handleChange}
              className="bg-gray-800 p-3 rounded text-white" required />
            <textarea name="message" placeholder="Tell me about your project..." value={form.message} onChange={handleChange}
              className="bg-gray-800 p-3 rounded text-white" required />
            <button type="submit" className="bg-white text-black p-3 rounded">Send Request</button>
          </form>
        )}
      </section>

      <footer className="text-center mt-20 py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Michael Andrade. All rights reserved.
      </footer>
    </div>
  );
}