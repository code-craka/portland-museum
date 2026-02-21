import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-cormorant text-lg font-semibold tracking-widest text-gold border border-gold/60 px-2.5 py-0.5">
              PAM
            </span>
          </div>
          <p className="font-cormorant text-xl font-light text-cream/90 leading-snug mb-2">
            Portland Art Museum
          </p>
          <p className="text-sm text-cream/40 tracking-widest">Est. 1892</p>
          <div className="mt-6 flex gap-4">
            {["IG", "FB", "X", "YT"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 border border-cream/20 flex items-center justify-center text-xs text-cream/50 hover:border-gold hover:text-gold transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Visit */}
        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Visit</h4>
          <address className="not-italic text-sm leading-7 text-cream/60">
            1219 SW Park Avenue<br />
            Portland, OR 97205<br />
            <a href="tel:+15032764208" className="hover:text-gold transition-colors duration-200">
              503-276-4208
            </a>
          </address>
          <div className="mt-4 text-sm text-cream/50 leading-6">
            <div>Tue–Wed, Fri–Sun: 10 am – 5 pm</div>
            <div>Thursday: 10 am – <span className="text-gold">8 pm</span></div>
            <div>Monday: Closed</div>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Explore</h4>
          <div className="flex flex-col gap-2 text-sm text-cream/60">
            {[
              { href: "/exhibitions", label: "Exhibitions" },
              { href: "/about", label: "About the Museum" },
              { href: "/visit", label: "Visitor Information" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-cream transition-colors duration-200">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Support</h4>
          <div className="flex flex-col gap-2 text-sm text-cream/60">
            {["Become a Member", "Make a Donation", "Volunteer", "Corporate Giving", "Shop"].map((l) => (
              <a key={l} href="#" className="hover:text-cream transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/30">
            © 2026 Portland Art Museum. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-cream/30">
            <a href="#" className="hover:text-cream/60 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-cream/60 transition-colors duration-200">Accessibility</a>
            <a href="#" className="hover:text-cream/60 transition-colors duration-200">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
