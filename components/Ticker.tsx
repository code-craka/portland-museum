"use client";

const items = [
  "Open Tuesday – Sunday",
  "·",
  "Extended Hours Thursday until 8 pm",
  "·",
  "Free First Thursday Evenings",
  "·",
  "1219 SW Park Avenue, Portland",
  "·",
  "503-276-4208",
  "·",
  "Over 42,000 Works in Collection",
  "·",
  "Open Tuesday – Sunday",
  "·",
  "Extended Hours Thursday until 8 pm",
  "·",
  "Free First Thursday Evenings",
  "·",
  "1219 SW Park Avenue, Portland",
  "·",
  "503-276-4208",
  "·",
  "Over 42,000 Works in Collection",
  "·",
];

export default function Ticker() {
  return (
    <div className="bg-charcoal overflow-hidden py-3 border-t border-b border-cream/5">
      <div className="flex whitespace-nowrap animate-ticker">
        {items.map((item, i) => (
          <span
            key={i}
            className={`inline-block px-4 font-sans text-xs tracking-widest uppercase ${
              item === "·" ? "text-rust" : "text-cream/50"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
