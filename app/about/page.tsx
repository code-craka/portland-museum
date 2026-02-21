import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Portland Art Museum",
  description:
    "Founded in 1892, the Portland Art Museum is the oldest and largest art museum in the Pacific Northwest.",
};

const timelineEvents = [
  {
    year: "1892",
    title: "A City's Vision",
    desc: "Founded by a group of civic leaders, the Portland Art Association opens its doors with a modest collection and an ambitious dream: to bring world-class art to the Pacific Northwest.",
  },
  {
    year: "1905",
    title: "Lewis & Clark Centennial",
    desc: "The museum plays a central role in Portland's Lewis & Clark Centennial Exposition, cementing its place in the cultural life of the city and region.",
  },
  {
    year: "1932",
    title: "The Pietro Belluschi Building",
    desc: "Renowned architect Pietro Belluschi designs our iconic main building — a masterwork of modernist civic architecture that anchors our campus to this day.",
  },
  {
    year: "1968",
    title: "Native American Art Initiative",
    desc: "A landmark commitment to collecting and presenting Native American art and culture, one of the first of its kind among major American art museums.",
  },
  {
    year: "2005",
    title: "The Mark Building Expansion",
    desc: "Major campus expansion with the addition of the Mark Building, doubling gallery space and adding state-of-the-art facilities for education and conservation.",
  },
  {
    year: "Today",
    title: "A Living Institution",
    desc: "With over 42,000 works, 22 galleries, and a deep commitment to serving all Portlanders, the museum continues to evolve as a cultural cornerstone of the Pacific Northwest.",
  },
];

const values = [
  {
    symbol: "◎",
    title: "Access",
    desc: "Art belongs to everyone. We are committed to removing barriers through free and reduced admission, community partnerships, and outreach programs across the region.",
  },
  {
    symbol: "◈",
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in collecting, scholarship, conservation, and presentation of the works in our care.",
  },
  {
    symbol: "◉",
    title: "Inclusion",
    desc: "We actively seek and celebrate art and artists from all cultures, backgrounds, and perspectives — amplifying voices that have been historically underrepresented.",
  },
  {
    symbol: "◇",
    title: "Community",
    desc: "We are Portland's museum — rooted in this place, shaped by its people, and committed to the cultural health of our region for generations to come.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="bg-charcoal pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-8 w-48 h-64 border border-cream rotate-3" />
          <div className="absolute bottom-8 right-16 w-64 h-48 border border-gold -rotate-6" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <p className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-4">Our Story</p>
          <h1 className="font-cormorant font-light text-7xl text-cream mb-4">About the Museum</h1>
          <p className="font-sans text-cream/50 text-lg max-w-xl">
            Serving the Pacific Northwest since 1892.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Quote */}
            <div className="lg:sticky lg:top-24">
              <div className="border-l-2 border-rust pl-8 py-4">
                <blockquote className="font-cormorant italic text-4xl font-light text-charcoal leading-tight mb-4">
                  "Art is not what you see, but what you make others see."
                </blockquote>
                <cite className="font-sans text-xs tracking-widest uppercase text-stone not-italic">
                  — Edgar Degas
                </cite>
              </div>

              <div className="mt-12 bg-charcoal p-8">
                <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">By the Numbers</p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { n: "1892", l: "Founded" },
                    { n: "42,000+", l: "Works" },
                    { n: "130+", l: "Years" },
                    { n: "22", l: "Galleries" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="font-cormorant text-4xl font-light text-gold">{s.n}</div>
                      <div className="font-sans text-xs tracking-widest uppercase text-cream/40 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-rust mb-4">About Us</p>
              <h2 className="font-cormorant font-light text-5xl text-charcoal mb-6 leading-tight">
                Pacific Northwest's Oldest Art Museum
              </h2>
              <p className="font-sans text-base text-stone leading-relaxed mb-5">
                Founded in 1892, the Portland Art Museum is the oldest and largest art museum in the Pacific Northwest, and one of the premier art museums in the United States. From its early days as a small exhibition space to its current campus spanning two historic city blocks, the museum has grown to house a collection of more than 42,000 works representing 5,000 years of art history.
              </p>
              <p className="font-sans text-base text-stone leading-relaxed mb-5">
                Our permanent collection includes outstanding representations of Native American and Pacific Northwest Coast Art, Asian art, European and American art, modern and contemporary art, prints and drawings, and photography. The museum's holdings reflect both the breadth of art history and the particular cultural geography of the Pacific Northwest.
              </p>
              <p className="font-sans text-base text-stone leading-relaxed">
                Each year, the museum presents a dynamic schedule of special exhibitions alongside its permanent collection galleries, bringing the finest works from around the world to Portland while also shining light on the exceptional talent of regional artists and the diverse communities that call this place home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-widest uppercase text-rust mb-3">A Living Legacy</p>
          <h2 className="font-cormorant font-light text-5xl text-charcoal mb-16">Our History</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-cream-dark hidden md:block" style={{ background: "linear-gradient(to bottom, transparent, #C9A96E 10%, #C9A96E 90%, transparent)" }} />

            <div className="flex flex-col gap-12">
              {timelineEvents.map((event, i) => (
                <div key={event.year} className="grid grid-cols-1 md:grid-cols-[144px,1fr] gap-6 md:gap-10 items-start">
                  {/* Year */}
                  <div className="md:text-right">
                    <span className="font-cormorant text-3xl font-light text-rust">{event.year}</span>
                  </div>
                  {/* Content */}
                  <div className="relative md:pl-10">
                    {/* Dot */}
                    <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-gold hidden md:block" />
                    <h3 className="font-cormorant text-2xl font-light text-charcoal mb-2">{event.title}</h3>
                    <p className="font-sans text-sm text-stone leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-4">Our Purpose</p>
            <h2 className="font-cormorant font-light text-5xl text-cream mb-8">Our Mission</h2>
            <p className="font-cormorant italic text-2xl font-light text-cream/80 leading-relaxed">
              "The Portland Art Museum connects people with art, artists, and each other — creating a space where diverse perspectives are honored, curiosity is rewarded, and the transformative power of art is accessible to all."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-charcoal-light border border-cream/5 p-8">
                <div className="font-cormorant text-3xl text-gold mb-4">{v.symbol}</div>
                <h3 className="font-cormorant text-xl font-light text-cream mb-3">{v.title}</h3>
                <p className="font-sans text-sm text-cream/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-widest uppercase text-rust mb-3">The Team</p>
          <h2 className="font-cormorant font-light text-5xl text-charcoal mb-12">Leadership</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                initials: "BF",
                name: "Brian Ferriso",
                role: "The Marilyn H. and Dr. Robert B. Pamplin Jr. Director",
                color: "#4A3D5C",
              },
              {
                initials: "MJ",
                name: "Marcelle Johnson",
                role: "Chief Operating Officer",
                color: "#3D5C4A",
              },
              {
                initials: "AK",
                name: "Angie Koo",
                role: "Chief Curator",
                color: "#5C3D3D",
              },
            ].map((leader) => (
              <div key={leader.name} className="flex flex-col">
                <div
                  className="w-20 h-20 flex items-center justify-center mb-5"
                  style={{ background: leader.color }}
                >
                  <span className="font-cormorant text-2xl font-light text-cream/80">
                    {leader.initials}
                  </span>
                </div>
                <h3 className="font-cormorant text-2xl font-light text-charcoal mb-1">{leader.name}</h3>
                <p className="font-sans text-sm text-stone">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rust py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-cormorant font-light text-4xl text-cream">Ready to Visit?</h2>
            <p className="font-sans text-cream/70 mt-1">
              We are open Tuesday through Sunday, 10 am – 5 pm.
            </p>
          </div>
          <Link
            href="/visit"
            className="shrink-0 inline-flex items-center gap-2 bg-cream text-rust font-sans text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-cream-dark transition-colors duration-200"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </>
  );
}
