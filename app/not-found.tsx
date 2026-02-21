import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-rust mb-4">404</p>
        <h1 className="font-cormorant font-light text-7xl text-charcoal mb-4">Page Not Found</h1>
        <p className="font-sans text-stone mb-10 max-w-sm mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-rust text-cream font-sans text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-rust/90 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
