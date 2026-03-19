import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"
        style={{ animation: "floatOrb1 20s ease-in-out infinite" }}
      ></div>
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50"
        style={{ animation: "floatOrb2 25s ease-in-out infinite" }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <h1 className="font-headline text-9xl lg:text-[12rem] font-black bg-gradient-to-r from-primary via-primary-fixed to-primary bg-clip-text text-transparent mb-6 leading-none">
          404
        </h1>

        {/* Error Title */}
        <h2 className="font-headline text-4xl lg:text-5xl font-bold text-on-surface mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-on-surface-variant mb-8 leading-relaxed max-w-xl mx-auto">
          Oops! The page you&apos;re looking for seems to have taken a different
          career path. Let&apos;s get you back on track.
        </p>

        {/* Error Icon */}
        <div className="mb-12 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary-fixed/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-primary">
              location_off
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="px-8 py-4 bg-gradient-to-r from-primary to-primary-fixed text-on-primary rounded-xl font-headline font-bold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-surface text-on-surface rounded-xl font-headline font-bold border-2 border-primary hover:bg-surface-container transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-12 border-t border-on-surface/10">
          <p className="text-on-surface-variant mb-8">Browse Our Services:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/about"
              className="p-4 bg-surface rounded-lg hover:bg-surface-container transition-colors group"
            >
              <span className="material-symbols-outlined text-primary text-2xl mb-2 block group-hover:scale-110 transition-transform">
                info
              </span>
              <span className="text-sm font-semibold text-on-surface">
                About
              </span>
            </Link>
            <Link
              to="/services"
              className="p-4 bg-surface rounded-lg hover:bg-surface-container transition-colors group"
            >
              <span className="material-symbols-outlined text-primary text-2xl mb-2 block group-hover:scale-110 transition-transform">
                work
              </span>
              <span className="text-sm font-semibold text-on-surface">
                Services
              </span>
            </Link>
            <Link
              to="/job-seekers"
              className="p-4 bg-surface rounded-lg hover:bg-surface-container transition-colors group"
            >
              <span className="material-symbols-outlined text-primary text-2xl mb-2 block group-hover:scale-110 transition-transform">
                person_search
              </span>
              <span className="text-sm font-semibold text-on-surface">
                Job Seekers
              </span>
            </Link>
            <Link
              to="/employers"
              className="p-4 bg-surface rounded-lg hover:bg-surface-container transition-colors group"
            >
              <span className="material-symbols-outlined text-primary text-2xl mb-2 block group-hover:scale-110 transition-transform">
                business
              </span>
              <span className="text-sm font-semibold text-on-surface">
                Employers
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
