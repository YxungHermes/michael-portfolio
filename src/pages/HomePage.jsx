import { useState } from "react";
import Hero from '../components/Hero'; // Import Hero component
import Footer from '../components/Footer'; // Import Footer component

export default function HomePage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  return (
    <div className="font-sans"> {/* Removed min-h-screen, bg-black, text-white, p-4 from here */}
      <Hero /> {/* Add Hero component here, replacing the old header */}

      {/* Wrapper for content below the hero, ensuring consistent styling and padding */}
      <div className="bg-black text-white p-4">
        {/* Add id="work-samples" for scrolling, and some vertical padding (py-12) */}
        <section id="work-samples" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 px-4 py-12">
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
          {/* You can add a third item here if your grid is xl:grid-cols-3 */}
          {/* Example:
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <img src="/path/to/thumbnail3.jpg" alt="Project 3" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Project Title 3</h3>
            </div>
          </div>
          */}
        </section>

        {/* Add id="contact-form" for scrolling, and some vertical padding (py-8) */}
        <section id="contact-form" className="mt-12 max-w-xl mx-auto py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Book Me for Your Next Project</h2>
          {submitted ? (
            <p className="text-green-400 text-center">Thank you! I'll be in touch soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange}
                className="bg-gray-800 p-3 rounded text-white" required />
              <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange}
                className="bg-gray-800 p-3 rounded text-white" required />
              <textarea name="message" placeholder="Tell me about your project..." value={form.message} onChange={handleChange}
                className="bg-gray-800 p-3 rounded text-white h-32" required /> {/* Added h-32 for textarea height */}
              <button type="submit" className="bg-white text-black p-3 rounded hover:bg-gray-300 transition-colors">Send Request</button>
            </form>
          )}
        </section>

        <Footer /> {/* Use Footer component here */}
        {/* Removed inline footer:
        <footer className="text-center mt-12 py-6 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Michael Andrade. All rights reserved.
        </footer>
        */}
      </div>
    </div>
  );
}