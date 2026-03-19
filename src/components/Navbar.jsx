import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  return (
    <>
      {/* Desktop & Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-outline-variant/15 px-6 lg:px-20 py-4 flex items-center justify-between bg-white/85 backdrop-blur-2xl">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="size-8 text-primary">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="font-headline font-black text-xl tracking-tight text-on-surface">
            Fadeb Consultancy
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10 font-label text-sm font-semibold tracking-wide">
          <Link
            to="/about"
            className="relative pb-1 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={toggleServicesDropdown}
              className="relative pb-1 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1"
            >
              Services
              <span className="material-symbols-outlined text-base">
                expand_more
              </span>
            </button>

            {/* Desktop Dropdown Menu */}
            <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 border border-outline-variant/15">
              <Link
                to="/services"
                className="block px-4 py-3 text-on-surface hover:bg-surface-container hover:text-primary transition-colors text-sm"
              >
                Recruitment Services
              </Link>
              <Link
                to="/services/training"
                className="block px-4 py-3 text-on-surface hover:bg-surface-container hover:text-primary transition-colors text-sm"
              >
                Training Programs
              </Link>
              <Link
                to="/services/cv-resume"
                className="block px-4 py-3 text-on-surface hover:bg-surface-container hover:text-primary transition-colors text-sm"
              >
                CV and Resume Services
              </Link>
            </div>
          </div>

          <Link
            to="/employers"
            className="relative pb-1 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
          >
            Employers
          </Link>
          <Link
            to="/job-seekers"
            className="relative pb-1 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
          >
            Job Seekers
          </Link>
        </div>

        {/* Right Side - Button and Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-primary to-primary-fixed text-on-primary font-label px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300"
          >
            Contact Us
          </Link>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            id="hamburger"
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg hover:bg-surface-container transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-5 h-0.5 bg-on-surface transition-all duration-300 ${mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-on-surface transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-on-surface transition-all duration-300 ${mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed top-[73px] left-0 right-0 z-40 glass-nav border-b border-outline-variant/15 flex flex-col gap-1 px-6 py-4 md:hidden bg-white/85 backdrop-blur-2xl animate-fade-in-down"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <Link
            to="/about"
            onClick={closeMobileMenu}
            className="block font-label font-semibold text-sm py-3 px-4 rounded-lg hover:bg-surface-container hover:text-primary transition-colors"
          >
            About Us
          </Link>

          {/* Mobile Services Dropdown */}
          <button
            onClick={toggleMobileServices}
            className="w-full text-left font-label font-semibold text-sm py-3 px-4 rounded-lg hover:bg-surface-container hover:text-primary transition-colors flex items-center justify-between"
          >
            Services
            <span
              className={`material-symbols-outlined transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
            >
              expand_more
            </span>
          </button>

          {mobileServicesOpen && (
            <div className="flex flex-col gap-1 bg-surface-container/50 rounded-lg my-1">
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className="font-label text-sm py-3 px-8 rounded-lg hover:bg-surface-container hover:text-primary transition-colors"
              >
                Recruitment Services
              </Link>
              <Link
                to="/services/training"
                onClick={closeMobileMenu}
                className="font-label text-sm py-3 px-8 rounded-lg hover:bg-surface-container hover:text-primary transition-colors"
              >
                Training Programs
              </Link>
              <Link
                to="/services/cv-resume"
                onClick={closeMobileMenu}
                className="font-label text-sm py-3 px-8 rounded-lg hover:bg-surface-container hover:text-primary transition-colors"
              >
                CV and Resume Services
              </Link>
            </div>
          )}

          <Link
            to="/employers"
            onClick={closeMobileMenu}
            className="block font-label font-semibold text-sm py-3 px-4 rounded-lg hover:bg-surface-container hover:text-primary transition-colors"
          >
            Employers
          </Link>
          <Link
            to="/job-seekers"
            onClick={closeMobileMenu}
            className="block font-label font-semibold text-sm py-3 px-4 rounded-lg hover:bg-surface-container hover:text-primary transition-colors"
          >
            Job Seekers
          </Link>
        </div>
      )}
    </>
  );
}
