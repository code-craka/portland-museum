import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Portland Art Museum",
  description:
    "Contact the Portland Art Museum at 1219 SW Park Avenue, Portland, OR 97205 or call 503-276-4208.",
};

const contactDetails = [
  {
    symbol: "◉",
    label: "Address",
    content: (
      <address className="not-italic font-sans text-sm text-stone leading-7">
        Portland Art Museum<br />
        1219 Southwest Park Avenue<br />
        Portland, OR 97205
      </address>
    ),
  },
  {
    symbol: "◎",
    label: "Phone",
    content: (
      <a href="tel:+15032764208" className="font-sans text-sm text-stone hover:text-rust transition-colors duration-200">
        503-276-4208
      </a>
    ),
  },
  {
    symbol: "◈",
    label: "General Inquiries",
    content: (
      <a href="mailto:info@pam.org" className="font-sans text-sm text-stone hover:text-rust transition-colors duration-200">
        info@pam.org
      </a>
    ),
  },
  {
    symbol: "◇",
    label: "Press & Media",
    content: (
      <a href="mailto:press@pam.org" className="font-sans text-sm text-stone hover:text-rust transition-colors duration-200">
        press@pam.org
      </a>
    ),
  },
  {
    symbol: "⊙",
    label: "Museum Hours",
    content: (
      <div className="font-sans text-sm text-stone leading-7">
        <div>Tue – Wed, Fri – Sun: 10 am – 5 pm</div>
        <div>Thursday: <span className="text-rust">10 am – 8 pm</span></div>
        <div>Monday: Closed</div>
      </div>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="bg-charcoal pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-60 h-60 border border-cream rotate-3" />
          <div className="absolute bottom-10 left-16 w-44 h-44 border border-gold -rotate-9" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <p className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-4">Get in Touch</p>
          <h1 className="font-cormorant font-light text-7xl text-cream mb-4">Contact Us</h1>
          <p className="font-sans text-cream/50 text-lg max-w-xl">
            We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact section */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-5 gap-14">

          {/* Info column */}
          <div className="lg:col-span-2">
            <h2 className="font-cormorant font-light text-4xl text-charcoal mb-10">Reach Us</h2>

            <div className="flex flex-col gap-8">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex gap-5 items-start">
                  <span className="font-cormorant text-2xl text-rust mt-0.5 w-6 shrink-0">
                    {detail.symbol}
                  </span>
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-stone mb-1.5">
                      {detail.label}
                    </p>
                    {detail.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-12 pt-8 border-t border-cream-dark">
              <p className="font-sans text-xs tracking-widest uppercase text-stone mb-5">Follow Us</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Instagram", href: "#" },
                  { label: "Facebook", href: "#" },
                  { label: "Twitter / X", href: "#" },
                  { label: "YouTube", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="font-sans text-xs tracking-widest uppercase border border-charcoal/20 text-charcoal/60 px-4 py-2 hover:border-rust hover:text-rust transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <h2 className="font-cormorant font-light text-4xl text-charcoal mb-10">Send a Message</h2>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Map area */}
      <section className="bg-cream-dark py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative h-64 bg-charcoal overflow-hidden">
            {/* Grid */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(6)].map((_, i) => (
                <div key={`h${i}`} className="absolute left-0 right-0 h-px bg-cream" style={{ top: `${(i + 1) * (100 / 7)}%` }} />
              ))}
              {[...Array(10)].map((_, i) => (
                <div key={`v${i}`} className="absolute top-0 bottom-0 w-px bg-cream" style={{ left: `${(i + 1) * (100 / 11)}%` }} />
              ))}
            </div>
            {/* Label */}
            <div className="absolute top-5 left-8 font-sans text-xs tracking-widest uppercase text-gold/40">
              South Park Blocks — Portland, Oregon
            </div>
            {/* Street labels */}
            <div className="absolute top-[30%] left-3 font-sans text-[9px] text-cream/20">SW Park Ave</div>
            {/* PAM marker */}
            <div
              className="absolute flex flex-col items-center"
              style={{ left: "40%", top: "25%" }}
            >
              <div className="bg-rust px-4 py-2 text-center">
                <p className="font-cormorant text-sm text-cream font-semibold">Portland Art Museum</p>
                <p className="font-sans text-[10px] text-cream/70">1219 SW Park Ave</p>
              </div>
              <div className="w-px h-6 bg-gold" />
              <div className="w-3 h-3 bg-gold rounded-full relative">
                <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
