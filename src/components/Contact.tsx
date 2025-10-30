import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (formspreeEndpoint) {
      try {
        const res = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        if (res.ok) {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setStatus("error");
        }
      } catch (err) {
        console.error(err);
        setStatus("error");
      } finally {
        setSubmitting(false);
      }
    } else {
      // Fallback: open user's email client via mailto if no Formspree endpoint configured
      const to = "wizztechtm@gmail.com";
      const subject = `Contact from website: ${name || "Anonymous"}`;
      const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
    <div className="max-w-2xl mx-auto px-4 sm:px-0">
      <div className="bg-gray-800/50 rounded-xl p-6 sm:p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="Write your message here"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-lg font-semibold text-white transition-all transform ${submitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            <div className="mt-6">
              {status === "success" && (
                <div className="mb-4 text-center text-green-400">Thank you — your message was sent.</div>
              )}
              {status === "error" && (
                <div className="mb-4 text-center text-red-400">Sorry, something went wrong. Please try again.</div>
              )}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Follow us on social media</p>
              <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/wizztechtm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/></svg>
              </a>
              <a href="https://www.instagram.com/wizztech.tm/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/></svg>
              </a>
              <a href="https://github.com/WizzTech-RO048" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
