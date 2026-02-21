import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exhibitions — Portland Art Museum",
  description:
    "Discover current and upcoming exhibitions at the Portland Art Museum.",
};

const currentExhibitions = [
  {
    id: 1,
    tag: "On View Now",
    dates: "January 18 – May 4, 2026",
    title: "Infinite Horizons: Pacific Northwest Landscapes",
    desc: "A sweeping survey of landscape painting from the artists who shaped the visual identity of the Pacific Northwest. Featuring over 80 works from 1870 to the present day, this exhibition traces the evolving relationship between artist and environment — from romantic wilderness scenes to contemporary ecological meditations. Artists include C.E.S. Wood, Mark Tobey, Morris Graves, and Marie Watt.",
    gallery: "Hoffman Wing, Galleries 1–4",
    accent: "#8B4A2F",
    geo: "rect",
  },
  {
    id: 2,
    tag: "On View Now",
    dates: "February 1 – June 15, 2026",
    title: "Material Futures",
    desc: "Twelve contemporary artists transform discarded materials — glass shards, reclaimed timber, industrial fabric, and electronic waste — into striking meditations on consumerism, ecology, and what we leave behind. Works range from intimate sculptural objects to room-scale installations that invite visitors to reconsider their relationship with material culture.",
    gallery: "Jubitz Center, Main Hall",
    accent: "#5C7A5A",
    geo: "circle",
  },
  {
    id: 3,
    tag: "On View Now",
    dates: "November 12, 2025 – April 6, 2026",
    title: "Japanese Screens: Seasons and Stories",
    desc: "Drawn from the museum's distinguished Asian art holdings, this exhibition presents twenty-four folding screens spanning the Muromachi through Edo periods. Meticulously restored and displayed for the first time in over a decade, these works reveal the breathtaking scale, technique, and narrative depth of the Japanese decorative arts tradition.",
    gallery: "Schnitzer Gallery of Northwest Art",
    accent: "#8B7355",
    geo: "diamond",
  },
];

const upcomingExhibitions = [
  {
    id: 4,
    dates: "March 22 – September 7, 2026",
    opens: "Opens Mar 22",
    title: "Voices of the Indigenous Pacific",
    desc: "Works by Native artists across the Pacific Rim exploring identity, sovereignty, and cultural memory across generations.",
    accent: "#2C3E5C",
  },
  {
    id: 5,
    dates: "May 15 – November 1, 2026",
    opens: "Opens May 15",
    title: "Oregon Photography: 1930–1980",
    desc: "A landmark survey of documentary and fine art photography capturing five decades of Oregon life.",
    accent: "#C9A96E",
  },
  {
    id: 6,
    dates: "July 4 – December 28, 2026",
    opens: "Opens Jul 4",
    title: "Form & Function: American Studio Craft",
    desc: "Celebrating the American studio craft movement from ceramics and glass to fiber and metalwork.",
    accent: "#6B7B5E",
  },
];

const permanentCollections = [
  { label: "Ancient Mediterranean", color: "#3D4A5C", count: "2,400+ works" },
  { label: "European Masters", color: "#5C3D3D", count: "3,100+ works" },
  { label: "American Art", color: "#3D5C4A", count: "5,600+ works" },
  { label: "Asian Art", color: "#4A3D5C", count: "7,800+ works" },
  { label: "Native American Art", color: "#5C4A3D", count: "4,200+ works" },
  { label: "Contemporary & Modern", color: "#3D5C5C", count: "9,000+ works" },
  { label: "Photography", color: "#5C5C3D", count: "6,500+ works" },
  { label: "Prints & Drawings", color: "#4A4A4A", count: "4,300+ works" },
];

function ArtGeo({ type, size = "sm" }: { type: string; size?: "sm" | "lg" }) {
  const s = size === "lg" ? 120 : 60;
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
      {type === "rect" && (
        <div
          style={{ width: s, height: s * 1.4 }}
          className="border-2 border-cream rotate-6"
        />
      )}
      {type === "circle" && (
        <div
          style={{ width: s, height: s }}
          className="border-2 border-cream rounded-full"
        />
      )}
      {type === "diamond" && (
        <div
          style={{ width: s, height: s }}
          className="border-2 border-cream rotate-45"
        />
      )}
    </div>
  );
}

export default function ExhibitionsPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="bg-charcoal pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-8 right-12 w-64 h-64 border border-gold rotate-12" />
          <div className="absolute bottom-4 left-20 w-48 h-48 border border-cream -rotate-6" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <p className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-4">Gallery</p>
          <h1 className="font-cormorant font-light text-7xl text-cream mb-4">Exhibitions</h1>
          <p className="font-sans text-cream/50 text-lg max-w-xl">
            Discover works that challenge, inspire, and transform.
          </p>
        </div>
      </div>

      {/* Current */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-cormorant font-light text-4xl text-charcoal mb-12 pb-4 border-b border-cream-dark">
            Current Exhibitions
          </h2>

          <div className="flex flex-col gap-16">
            {currentExhibitions.map((exh, i) => (
              <article
                key={exh.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[360px] overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}
                  style={{ background: exh.accent }}
                >
                  <ArtGeo type={exh.geo} size="lg" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal/30" />
                  <div className="absolute top-5 left-5">
                    <span className="font-sans text-xs tracking-widest uppercase bg-cream text-charcoal px-3 py-1">
                      {exh.tag}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">{exh.dates}</p>
                  <h3 className="font-cormorant font-light text-4xl text-charcoal leading-tight mb-4">
                    {exh.title}
                  </h3>
                  <p className="font-sans text-base text-stone leading-relaxed mb-6">{exh.desc}</p>
                  <div className="flex flex-col gap-1.5 text-sm text-stone/70 mb-8">
                    <span>
                      <strong className="text-charcoal">Gallery:</strong> {exh.gallery}
                    </span>
                    <span>
                      <strong className="text-charcoal">Admission:</strong> Included with general admission
                    </span>
                  </div>
                  <Link
                    href="/visit"
                    className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-rust hover:text-rust-light transition-colors duration-200"
                  >
                    Get Tickets →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-cream-dark h-px" />

      {/* Upcoming */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-cormorant font-light text-4xl text-charcoal mb-12 pb-4 border-b border-cream-dark">
            Upcoming Exhibitions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingExhibitions.map((exh) => (
              <article key={exh.id} className="group card-hover">
                <div
                  className="relative h-56 overflow-hidden mb-5"
                  style={{ background: exh.accent }}
                >
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-6 right-6 w-16 h-16 border border-cream rotate-12 group-hover:rotate-6 transition-transform duration-500" />
                    <div className="absolute bottom-6 left-8 w-20 h-20 border border-cream -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-xs tracking-widest uppercase bg-gold text-charcoal px-3 py-1">
                      {exh.opens}
                    </span>
                  </div>
                </div>
                <p className="font-sans text-xs text-stone tracking-wide mb-2">{exh.dates}</p>
                <h3 className="font-cormorant font-light text-2xl text-charcoal mb-3 leading-tight">
                  {exh.title}
                </h3>
                <p className="font-sans text-sm text-stone leading-relaxed">{exh.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Permanent Collection */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-2">Always Open</p>
              <h2 className="font-cormorant font-light text-4xl text-cream">Permanent Collection</h2>
            </div>
            <p className="font-sans text-sm text-cream/40 max-w-sm text-right">
              Over 42,000 works spanning 5,000 years of human creativity across cultures and continents.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {permanentCollections.map((col) => (
              <div
                key={col.label}
                className="group relative h-40 overflow-hidden cursor-default"
                style={{ background: col.color }}
              >
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <p className="font-cormorant text-lg font-light text-cream leading-tight mb-1">
                    {col.label}
                  </p>
                  <p className="font-sans text-xs text-cream/50 tracking-wide">{col.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
