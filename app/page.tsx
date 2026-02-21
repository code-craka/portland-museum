import Link from "next/link";
import Ticker from "@/components/Ticker";

const featuredExhibitions = [
  {
    id: 1,
    status: "Current",
    dates: "Jan 18 – May 4, 2026",
    title: "Infinite Horizons: Pacific Northwest Landscapes",
    desc: "A sweeping survey of landscape painting tracing 150 years of artistic engagement with the Pacific Northwest wilderness — from romantic vistas to contemporary ecological meditations.",
    bg: "bg-rust",
    accent: "#8B4A2F",
    size: "large",
  },
  {
    id: 2,
    status: "Current",
    dates: "Feb 1 – Jun 15, 2026",
    title: "Material Futures",
    desc: "Twelve artists transform discarded materials into striking meditations on consumerism, ecology, and what we leave behind.",
    bg: "bg-sage",
    accent: "#5C7A5A",
    size: "small",
  },
  {
    id: 3,
    status: "Upcoming",
    dates: "Opens Mar 22, 2026",
    title: "Voices of the Indigenous Pacific",
    desc: "Works by Native artists exploring identity, sovereignty, and cultural memory across generations.",
    bg: "bg-navy",
    accent: "#2C3E5C",
    size: "small",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal">
        {/* Atmospheric background */}
        <div className="absolute inset-0">
          {/* Gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#1a1612] to-[#0e0c0a]" />
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />
          {/* Abstract artwork shapes */}
          <div className="absolute right-[-5%] top-[10%] w-[55vw] h-[80vh] opacity-10">
            <div className="absolute top-0 right-0 w-72 h-96 border border-gold/30 rotate-6" />
            <div className="absolute top-16 right-24 w-56 h-72 border border-rust/40 -rotate-3" />
            <div className="absolute top-32 right-12 w-48 h-48 bg-rust/8 rotate-12" />
            <div className="absolute bottom-0 right-16 w-80 h-64 border border-cream/10 -rotate-6" />
          </div>
          {/* Vertical line accent */}
          <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20">
          <div className="max-w-3xl">
            <p className="animate-fade-up animate-fade-up-1 font-sans text-xs tracking-widest uppercase text-gold/80 mb-8">
              Est. 1892 &nbsp;·&nbsp; Portland, Oregon &nbsp;·&nbsp; Pacific Northwest's Oldest Art Museum
            </p>

            <h1 className="animate-fade-up animate-fade-up-2 font-cormorant font-light text-cream leading-[1.05]">
              <span className="block text-[clamp(3.5rem,9vw,7.5rem)]">Where Art</span>
              <span className="block text-[clamp(3.5rem,9vw,7.5rem)] italic text-gold">Finds You</span>
            </h1>

            <p className="animate-fade-up animate-fade-up-3 mt-8 text-cream/60 font-sans font-light text-lg leading-relaxed max-w-xl">
              Pacific Northwest's oldest and most celebrated art institution — a living dialogue between tradition and the contemporary, spanning 5,000 years of human creativity.
            </p>

            <div className="animate-fade-up animate-fade-up-4 mt-10 flex flex-wrap gap-4">
              <Link
                href="/exhibitions"
                className="inline-flex items-center gap-2 bg-rust text-cream font-sans text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-rust-light transition-colors duration-200"
              >
                Explore Exhibitions
              </Link>
              <Link
                href="/visit"
                className="inline-flex items-center gap-2 border border-cream/30 text-cream font-sans text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-cream/10 transition-colors duration-200"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
          <span className="font-sans text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent" />
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────── */}
      <Ticker />

      {/* ── FEATURED EXHIBITIONS ─────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section header */}
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-rust mb-2">Now Showing</p>
              <h2 className="font-cormorant font-light text-5xl text-charcoal">Featured Exhibitions</h2>
            </div>
            <Link
              href="/exhibitions"
              className="font-sans text-sm tracking-widest uppercase text-stone hover:text-charcoal transition-colors duration-200 flex items-center gap-2"
            >
              View All <span>→</span>
            </Link>
          </div>

          {/* Exhibition grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large card */}
            <Link href="/exhibitions" className="md:col-span-2 group card-hover block">
              <div className="relative h-[480px] overflow-hidden bg-rust">
                {/* Abstract artwork placeholder */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <div className="absolute top-12 left-16 w-40 h-56 border-2 border-cream/30 -rotate-6 group-hover:rotate-0 transition-transform duration-700" />
                  <div className="absolute top-8 right-20 w-24 h-32 border border-cream/20 rotate-3 group-hover:-rotate-3 transition-transform duration-700" />
                  <div className="absolute bottom-24 right-12 w-32 h-48 border border-cream/20 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <div className="absolute top-5 left-5">
                  <span className="font-sans text-xs tracking-widest uppercase bg-cream text-charcoal px-3 py-1">
                    On View Now
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent">
                  <p className="font-sans text-xs text-cream/60 tracking-widest mb-2">Jan 18 – May 4, 2026</p>
                  <h3 className="font-cormorant font-light text-3xl text-cream leading-tight">
                    Infinite Horizons: Pacific Northwest Landscapes
                  </h3>
                  <p className="mt-2 text-sm text-cream/70 line-clamp-2">
                    A sweeping survey of landscape painting tracing 150 years of artistic engagement with the Pacific Northwest.
                  </p>
                </div>
              </div>
            </Link>

            {/* Two smaller cards stacked */}
            <div className="flex flex-col gap-6">
              {[featuredExhibitions[1], featuredExhibitions[2]].map((exh) => (
                <Link key={exh.id} href="/exhibitions" className="group card-hover block flex-1">
                  <div
                    className="relative h-[225px] overflow-hidden"
                    style={{ background: exh.accent }}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal/60"
                      />
                      <div className="absolute top-6 right-6 w-16 h-24 border border-cream/30 rotate-12 group-hover:rotate-6 transition-transform duration-500" />
                      <div className="absolute bottom-10 left-8 w-20 h-16 border border-cream/20 -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span
                        className={`font-sans text-xs tracking-widest uppercase px-3 py-1 ${
                          exh.status === "Upcoming"
                            ? "bg-gold text-charcoal"
                            : "bg-cream text-charcoal"
                        }`}
                      >
                        {exh.status === "Upcoming" ? "Opening Soon" : "On View Now"}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-charcoal/90 to-transparent">
                      <p className="font-sans text-xs text-cream/50 tracking-wide mb-1">{exh.dates}</p>
                      <h3 className="font-cormorant font-light text-xl text-cream leading-tight">
                        {exh.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────── */}
      <section className="bg-charcoal-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "130+", label: "Years of Art" },
            { num: "42,000+", label: "Works in Collection" },
            { num: "5,000", label: "Years of Human Creativity" },
            { num: "22", label: "Gallery Spaces" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-cormorant text-5xl font-light text-gold mb-2">{stat.num}</div>
              <div className="font-sans text-xs tracking-widest uppercase text-cream/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VISIT PREVIEW ────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-rust mb-3">Plan Your Visit</p>
              <h2 className="font-cormorant font-light text-5xl text-charcoal mb-6 leading-tight">
                Come and<br />
                <em className="text-rust">Experience Art</em>
              </h2>
              <p className="font-sans text-base text-stone leading-relaxed mb-8 max-w-md">
                Located in the heart of Portland's cultural South Park Blocks, the museum welcomes visitors into a world-class collection spanning cultures and centuries. Easily accessible by MAX, bus, bike, or car.
              </p>

              {/* Hours quick */}
              <div className="border-t border-cream-dark">
                {[
                  { days: "Tue – Wed, Fri – Sun", time: "10 am – 5 pm", special: false, closed: false },
                  { days: "Thursday", time: "10 am – 8 pm", special: true, closed: false },
                  { days: "Monday", time: "Closed", special: false, closed: true },
                ].map((row) => (
                  <div
                    key={row.days}
                    className="flex items-center justify-between py-3.5 border-b border-cream-dark"
                  >
                    <span className={`font-sans text-sm ${row.closed ? "text-stone/50" : "text-charcoal"}`}>
                      {row.days}
                    </span>
                    <span
                      className={`font-cormorant text-lg ${
                        row.special
                          ? "text-rust font-medium"
                          : row.closed
                          ? "text-stone/40 italic"
                          : "text-charcoal"
                      }`}
                    >
                      {row.time}
                      {row.special && (
                        <span className="ml-2 font-sans text-xs bg-rust/10 text-rust px-2 py-0.5">Extended</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/visit"
                className="mt-8 inline-flex items-center gap-2 bg-charcoal text-cream font-sans text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-charcoal-light transition-colors duration-200"
              >
                Get Directions & Tickets
              </Link>
            </div>

            {/* Building illustration side */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Museum building illustration - CSS art */}
                <div className="relative mx-auto" style={{ width: "280px" }}>
                  {/* Sky bg */}
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cream-dark to-cream rounded" />

                  {/* Pediment / triangle */}
                  <div
                    className="relative mx-auto"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "120px solid transparent",
                      borderRight: "120px solid transparent",
                      borderBottom: "50px solid #1C1C1C",
                      marginBottom: "-2px",
                    }}
                  />

                  {/* Facade */}
                  <div className="bg-charcoal relative z-10 mx-auto" style={{ width: "240px", height: "120px" }}>
                    {/* Columns */}
                    <div className="absolute bottom-0 inset-x-0 flex justify-around px-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 bg-cream/90" style={{ height: "100px" }} />
                      ))}
                    </div>
                    {/* Door */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-rust"
                      style={{ width: "28px", height: "52px" }}
                    />
                  </div>

                  {/* Steps */}
                  {[100, 110, 120].map((w, i) => (
                    <div
                      key={i}
                      className="bg-charcoal/80 mx-auto"
                      style={{
                        width: `${w + 120}px`,
                        height: "12px",
                        marginTop: "0px",
                      }}
                    />
                  ))}

                  {/* Address label */}
                  <div className="mt-5 text-center">
                    <span className="font-cormorant text-sm text-stone tracking-widest italic">
                      1219 SW Park Avenue, Portland
                    </span>
                  </div>
                </div>

                {/* Decorative border frame */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-rust/30" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-rust/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP CTA ───────────────────────────────── */}
      <section className="bg-rust py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-cream/60 mb-4">Membership</p>
          <h2 className="font-cormorant font-light text-5xl text-cream mb-6">Become a Member</h2>
          <p className="font-sans text-base text-cream/70 max-w-xl mx-auto mb-10">
            Enjoy unlimited free admission, exclusive exhibition previews, member-only events, and a deeper connection to the art and artists of our time. Memberships start at $75/year.
          </p>
          <Link
            href="/visit"
            className="inline-flex items-center gap-2 bg-cream text-rust font-sans text-sm tracking-widest uppercase px-10 py-4 hover:bg-cream-dark transition-colors duration-200"
          >
            Explore Membership
          </Link>
        </div>
      </section>
    </>
  );
}
