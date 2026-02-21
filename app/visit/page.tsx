import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visit — Portland Art Museum",
  description:
    "Plan your visit to the Portland Art Museum at 1219 SW Park Avenue, Portland, OR. Hours, admission, directions, and more.",
};

const hours = [
  { day: "Tuesday", time: "10 am – 5 pm", special: false, closed: false },
  { day: "Wednesday", time: "10 am – 5 pm", special: false, closed: false },
  { day: "Thursday", time: "10 am – 8 pm", special: true, closed: false },
  { day: "Friday", time: "10 am – 5 pm", special: false, closed: false },
  { day: "Saturday", time: "10 am – 5 pm", special: false, closed: false },
  { day: "Sunday", time: "10 am – 5 pm", special: false, closed: false },
  { day: "Monday", time: "Closed", special: false, closed: true },
];

const admission = [
  { type: "Adults", price: "$25", free: false },
  { type: "Seniors (62+)", price: "$22", free: false },
  { type: "Students (with ID)", price: "$13", free: false },
  { type: "Youth (17 & under)", price: "Free", free: true },
  { type: "Members", price: "Free", free: true },
  { type: "First Thursday (5–8 pm)", price: "Free", free: true },
];

const transit = [
  {
    icon: "🚇",
    method: "MAX Light Rail",
    detail: "Library/SW 9th Ave Station (Red, Blue & Orange lines) — 2-minute walk to the museum entrance.",
  },
  {
    icon: "🚌",
    method: "Bus",
    detail: "TriMet lines 51, 55, and 68 stop adjacent to the museum. Check trimet.org for schedules.",
  },
  {
    icon: "🚗",
    method: "By Car",
    detail: "SmartPark garage at SW 10th & Yamhill. Street parking available on surrounding blocks in the South Park Blocks.",
  },
  {
    icon: "🚲",
    method: "By Bike",
    detail: "Bike racks at the museum entrance. Biketown bike share stations located within one block.",
  },
];

const amenities = [
  { icon: "☕", label: "Museum Café", detail: "Open during museum hours. Light fare, coffee, and seasonal menus." },
  { icon: "🛍", label: "Museum Shop", detail: "Books, fine art prints, jewelry, gifts, and children's items." },
  { icon: "♿", label: "Full Accessibility", detail: "ADA-compliant throughout all galleries. Wheelchairs available free of charge." },
  { icon: "🎧", label: "Audio Tours", detail: "Free with admission for select exhibitions. Available in multiple languages." },
  { icon: "🎒", label: "Coat & Bag Check", detail: "Complimentary at the main entrance lobby." },
  { icon: "📚", label: "Crumpacker Library", detail: "Art reference library open by appointment." },
  { icon: "👶", label: "Family Programs", detail: "Free family-friendly activities every weekend in the education center." },
  { icon: "🎓", label: "Group Tours", detail: "Guided tours for schools and groups available by reservation." },
];

const memberships = [
  { tier: "Individual", price: "$75/yr", perks: ["Unlimited free admission", "10% shop discount", "Advance member notices"] },
  { tier: "Dual / Family", price: "$120/yr", perks: ["2 adults + all children", "Guest passes (2/yr)", "Free audio tours"] },
  { tier: "Sustaining", price: "$250/yr", perks: ["All Family benefits", "Opening preview invitations", "Catalog discounts"] },
  { tier: "Patron", price: "$500/yr", perks: ["All Sustaining benefits", "Curator-led tours", "Recognition in programs"] },
];

export default function VisitPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="bg-charcoal pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-12 right-20 w-56 h-56 border border-gold rotate-6" />
          <div className="absolute bottom-6 left-12 w-36 h-48 border border-cream -rotate-3" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <p className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-4">Visitor Information</p>
          <h1 className="font-cormorant font-light text-7xl text-cream mb-4">Plan Your Visit</h1>
          <p className="font-sans text-cream/50 text-lg max-w-xl">
            Everything you need to make the most of your time with us.
          </p>
        </div>
      </div>

      {/* Hours + Admission */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Hours */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-rust mb-4">Open Hours</p>
            <h2 className="font-cormorant font-light text-4xl text-charcoal mb-8">Museum Hours</h2>
            <div className="border-t border-cream-dark">
              {hours.map((row) => (
                <div
                  key={row.day}
                  className={`flex items-center justify-between py-4 border-b border-cream-dark ${
                    row.closed ? "opacity-40" : ""
                  }`}
                >
                  <span className="font-sans text-sm text-charcoal">{row.day}</span>
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-cormorant text-xl ${
                        row.special ? "text-rust font-medium" : row.closed ? "italic text-stone" : "text-charcoal"
                      }`}
                    >
                      {row.time}
                    </span>
                    {row.special && (
                      <span className="font-sans text-xs bg-rust/10 text-rust px-2 py-0.5 tracking-wide">
                        Extended
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 font-sans text-xs text-stone leading-relaxed">
              The museum is closed on major holidays including Thanksgiving, Christmas Day, and New Year's Day. Check our calendar for special holiday hours.
            </p>
            <div className="mt-6 bg-gold/10 border border-gold/30 p-5">
              <p className="font-sans text-sm text-charcoal">
                <strong className="text-rust">Free First Thursday:</strong> Every first Thursday of the month, admission is free from 5–8 pm. A beloved Portland tradition.
              </p>
            </div>
          </div>

          {/* Admission */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-rust mb-4">Pricing</p>
            <h2 className="font-cormorant font-light text-4xl text-charcoal mb-8">Admission</h2>
            <div className="border-t border-cream-dark">
              {admission.map((row) => (
                <div
                  key={row.type}
                  className="flex items-center justify-between py-4 border-b border-cream-dark"
                >
                  <span className="font-sans text-sm text-charcoal">{row.type}</span>
                  <span
                    className={`font-cormorant text-2xl font-light ${row.free ? "text-sage" : "text-charcoal"}`}
                  >
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 font-sans text-xs text-stone leading-relaxed">
              Admission grants access to all permanent collection galleries and most special exhibitions. Some exhibitions may require a separate ticket. Members always enter free.
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-2 bg-rust text-cream font-sans text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-rust-light transition-colors duration-200"
            >
              Buy Tickets Online
            </Link>
          </div>

        </div>
      </section>

      {/* Location */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-rust mb-4">Find Us</p>
            <h2 className="font-cormorant font-light text-4xl text-charcoal mb-6">Location & Getting Here</h2>
            <address className="not-italic mb-8">
              <p className="font-cormorant text-2xl font-light text-charcoal">Portland Art Museum</p>
              <p className="font-sans text-base text-stone mt-1">1219 Southwest Park Avenue</p>
              <p className="font-sans text-base text-stone">Portland, OR 97205</p>
              <a href="tel:+15032764208" className="font-sans text-base text-rust hover:text-rust-light transition-colors duration-200 mt-2 block">
                503-276-4208
              </a>
            </address>

            <div className="flex flex-col gap-6">
              {transit.map((t) => (
                <div key={t.method} className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">{t.icon}</span>
                  <div>
                    <h3 className="font-sans text-sm font-medium text-charcoal mb-1">{t.method}</h3>
                    <p className="font-sans text-sm text-stone leading-relaxed">{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schematic map */}
          <div>
            <div className="relative bg-charcoal h-80 overflow-hidden">
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(8)].map((_, i) => (
                  <div key={`h${i}`} className="absolute left-0 right-0 h-px bg-cream" style={{ top: `${(i + 1) * 12.5}%` }} />
                ))}
                {[...Array(8)].map((_, i) => (
                  <div key={`v${i}`} className="absolute top-0 bottom-0 w-px bg-cream" style={{ left: `${(i + 1) * 12.5}%` }} />
                ))}
              </div>
              {/* Park label */}
              <div className="absolute top-6 left-8 font-sans text-[10px] tracking-widest uppercase text-gold/40">
                South Park Blocks
              </div>
              {/* Streets */}
              <div className="absolute left-[35%] top-0 bottom-0 w-px bg-cream/20" />
              <div className="absolute left-[60%] top-0 bottom-0 w-px bg-cream/20" />
              <div className="absolute top-[40%] left-0 right-0 h-px bg-cream/20" />
              <div className="absolute top-[65%] left-0 right-0 h-px bg-cream/20" />
              {/* Street labels */}
              <div className="absolute top-[38%] left-2 font-sans text-[9px] text-cream/30 -translate-y-full">SW Salmon St</div>
              <div className="absolute top-[63%] left-2 font-sans text-[9px] text-cream/30 -translate-y-full">SW Jefferson St</div>
              <div className="absolute bottom-4 left-[33%] font-sans text-[9px] text-cream/30">SW Park Ave</div>
              {/* PAM box */}
              <div className="absolute bg-rust border-2 border-gold" style={{ left: "34%", top: "39%", width: "26%", height: "26%" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-cormorant text-xs text-cream font-semibold tracking-wider">PAM</div>
                    <div className="font-sans text-[8px] text-cream/70 mt-0.5">1219 SW Park</div>
                  </div>
                </div>
              </div>
              {/* Pin */}
              <div className="absolute w-3 h-3 bg-gold rounded-full" style={{ left: "calc(34% + 13% - 6px)", top: "37%" }}>
                <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-50" />
              </div>
            </div>
            <p className="mt-3 font-sans text-xs text-stone tracking-wide text-center">
              Schematic map — not to scale
            </p>
          </div>

        </div>
      </section>

      {/* Amenities */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-widest uppercase text-rust mb-3">On-Site</p>
          <h2 className="font-cormorant font-light text-5xl text-charcoal mb-12">Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((a) => (
              <div key={a.label} className="border border-cream-dark p-6">
                <div className="text-3xl mb-4">{a.icon}</div>
                <h3 className="font-cormorant text-xl font-light text-charcoal mb-2">{a.label}</h3>
                <p className="font-sans text-sm text-stone leading-relaxed">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-3">Membership</p>
            <h2 className="font-cormorant font-light text-5xl text-cream mb-4">Join the Museum</h2>
            <p className="font-sans text-cream/50 max-w-xl mx-auto text-sm leading-relaxed">
              Membership is the best way to experience the Portland Art Museum. Enjoy unlimited free admission and exclusive benefits, while supporting the museum's mission.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {memberships.map((m, i) => (
              <div
                key={m.tier}
                className={`p-8 border flex flex-col ${
                  i === 1
                    ? "bg-rust border-rust"
                    : "bg-charcoal-light border-cream/10"
                }`}
              >
                <div className={`font-sans text-xs tracking-widest uppercase mb-2 ${i === 1 ? "text-cream/70" : "text-gold/70"}`}>
                  {m.tier}
                </div>
                <div className={`font-cormorant text-4xl font-light mb-6 ${i === 1 ? "text-cream" : "text-gold"}`}>
                  {m.price}
                </div>
                <ul className="flex-1 flex flex-col gap-2 mb-8">
                  {m.perks.map((p) => (
                    <li key={p} className={`font-sans text-sm flex items-start gap-2 ${i === 1 ? "text-cream/80" : "text-cream/50"}`}>
                      <span className={i === 1 ? "text-cream" : "text-gold"}>—</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className={`font-sans text-xs tracking-widest uppercase py-3 text-center transition-colors duration-200 ${
                    i === 1
                      ? "bg-cream text-rust hover:bg-cream-dark"
                      : "border border-cream/20 text-cream/60 hover:border-cream/40 hover:text-cream"
                  }`}
                >
                  Join Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
