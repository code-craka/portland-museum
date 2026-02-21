"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 border border-cream-dark">
        <div className="w-16 h-16 border-2 border-sage flex items-center justify-center mb-6">
          <span className="font-cormorant text-3xl text-sage">✓</span>
        </div>
        <h3 className="font-cormorant text-3xl font-light text-charcoal mb-3">Thank You</h3>
        <p className="font-sans text-sm text-stone max-w-xs">
          Your message has been received. A member of our team will respond within 2–3 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 font-sans text-xs tracking-widest uppercase text-stone hover:text-charcoal transition-colors duration-200"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="fname" className="font-sans text-xs tracking-widest uppercase text-stone">
            First Name
          </label>
          <input
            id="fname"
            name="fname"
            type="text"
            required
            placeholder="Jane"
            className="border border-cream-dark bg-transparent px-4 py-3 font-sans text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-rust transition-colors duration-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lname" className="font-sans text-xs tracking-widest uppercase text-stone">
            Last Name
          </label>
          <input
            id="lname"
            name="lname"
            type="text"
            required
            placeholder="Smith"
            className="border border-cream-dark bg-transparent px-4 py-3 font-sans text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-rust transition-colors duration-200"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-sans text-xs tracking-widest uppercase text-stone">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className="border border-cream-dark bg-transparent px-4 py-3 font-sans text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-rust transition-colors duration-200"
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="font-sans text-xs tracking-widest uppercase text-stone">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="border border-cream-dark bg-cream px-4 py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-rust transition-colors duration-200 appearance-none cursor-pointer"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%237A7060'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
        >
          <option value="">Select a topic…</option>
          <option>General Inquiry</option>
          <option>Membership</option>
          <option>Group Tours</option>
          <option>Education Programs</option>
          <option>Donations & Giving</option>
          <option>Press & Media</option>
          <option>Accessibility</option>
          <option>Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-sans text-xs tracking-widest uppercase text-stone">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className="border border-cream-dark bg-transparent px-4 py-3 font-sans text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-rust transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        className="self-start bg-rust text-cream font-sans text-sm tracking-widest uppercase px-10 py-4 hover:bg-rust-light transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
