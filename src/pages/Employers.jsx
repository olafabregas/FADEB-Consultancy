import { useState } from "react";
import { Link } from "react-router-dom";

export default function Employers() {
  const [formData, setFormData] = useState({ company: "", email: "" });

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-40 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="relative z-10">
            <span
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-surface-container-high text-primary font-label font-semibold text-xs tracking-widest uppercase"
              style={{ animation: "textReveal 0.8s ease-out 0.1s both" }}
            >
              Strategic Partnership
            </span>
            <h1
              className="text-5xl lg:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tighter"
              style={{ animation: "textReveal 0.8s ease-out 0.2s both" }}
            >
              Empowering <br />
              <span className="bg-gradient-to-r from-primary to-primary-fixed bg-clip-text text-transparent">
                Your Growth
              </span>
            </h1>
            <p
              className="text-lg lg:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed"
              style={{ animation: "textReveal 0.8s ease-out 0.3s both" }}
            >
              We don&apos;t just fill roles; we plant the seeds of long-term
              organizational success. Partner with Fadeb for elite talent
              acquisition and strategic human capital development.
            </p>
            <div
              className="flex flex-wrap gap-4"
              style={{ animation: "textReveal 0.8s ease-out 0.4s both" }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base hover:scale-[1.02] transition-all editorial-shadow"
              >
                Let&apos;s Build Your Team
              </Link>
              <Link
                to="/services"
                className="bg-surface-container-high text-on-secondary-container px-8 py-4 rounded-full font-headline font-bold text-base hover:bg-surface-container-highest transition-all"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden editorial-shadow bg-surface-container-low">
              <img
                alt="Diverse professional team collaborating in a bright modern office"
                className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 hover:scale-110"
                src="/Assets/hero-1.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-surface-container-low py-32 px-6 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-on-surface tracking-tight mb-6">
                Tailored Talent Solutions
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Our services are designed to address the specific lifecycle
                stages of your workforce, from rapid scaling to leadership
                succession.
              </p>
            </div>
            <Link
              to="/services"
              className="text-primary font-headline font-bold flex items-center gap-2 group cursor-pointer hover:text-primary-dim transition-colors"
            >
              All Services{" "}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "search_check",
                title: "Recruitment Services",
                desc: "End-to-end management of your hiring pipeline with a focus on cultural fit and technical excellence.",
              },
              {
                icon: "stars",
                title: "Executive Search",
                desc: "Discreet and targeted headhunting for C-suite and senior leadership roles that drive vision.",
              },
              {
                icon: "model_training",
                title: "Staff Training",
                desc: "Upskilling and internal development programs to ensure your team stays ahead of industry shifts.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-10 rounded-[1.5rem] editorial-shadow group hover:bg-gradient-to-br hover:from-primary hover:to-secondary transition-all duration-500 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-on-primary-container text-3xl group-hover:text-white">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant group-hover:text-white/80 transition-colors leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration & Login Section */}
      <section className="py-32 px-6 lg:px-40 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-outline-variant/10 rounded-[2rem] overflow-hidden editorial-shadow">
          {/* Register */}
          <div className="bg-surface-container-lowest p-12 lg:p-20">
            <h2 className="text-3xl font-headline font-bold mb-6">
              Register as an Employer
            </h2>
            <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
              Access our pool of vetted talent and start building your dream
              team today. It takes less than 2 minutes to create your profile.
            </p>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full bg-surface-container-highest border-0 rounded-xl px-6 py-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/50"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-surface-container-highest border-0 rounded-xl px-6 py-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/50"
                />
              </div>
              <button className="w-full bg-primary text-on-primary font-headline font-bold py-4 rounded-full hover:bg-primary-dim transition-colors">
                Get Started Now
              </button>
            </form>
          </div>

          {/* Login */}
          <div className="bg-surface-container p-12 lg:p-20 relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-headline font-bold mb-6">
                Employer Login
              </h2>
              <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
                Already a partner? Sign in to manage your active listings and
                view applicant profiles in real-time.
              </p>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center gap-3 bg-surface-container-lowest border-0 text-on-surface font-headline font-semibold py-4 rounded-full hover:bg-surface-bright transition-all">
                  <span className="material-symbols-outlined text-primary">
                    login
                  </span>
                  Secure Access Portal
                </button>
                <p className="text-center text-sm text-on-surface-variant">
                  Forgot password?{" "}
                  <a href="#" className="text-primary font-bold">
                    Reset here
                  </a>
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10 p-8">
              <span className="material-symbols-outlined text-[120px]">
                domain
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-32 px-6 lg:px-40 bg-surface">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-on-surface tracking-tight mb-6">
            Why Partner With Us
          </h2>
          <div className="w-24 h-1.5 bg-primary-container mx-auto rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          {[
            {
              icon: "location_on",
              iconColor: "text-primary",
              title: "Local Expertise",
              desc: "Deep understanding of regional markets, labor laws, and the unique cultural nuances that make a hire successful.",
            },
            {
              icon: "award_star",
              iconColor: "text-secondary",
              title: "Proven Success",
              desc: "A track record of placing candidates who don't just stay, but thrive and lead within their new organizations.",
            },
            {
              icon: "architecture",
              iconColor: "text-tertiary",
              title: "Tailored Solutions",
              desc: "We don't believe in one-size-fits-all. Every recruitment strategy is hand-crafted to meet your specific goals.",
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center group">
              <div className="mb-8 relative inline-block">
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-150 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span
                  className={`material-symbols-outlined text-6xl ${item.iconColor}`}
                >
                  {item.icon}
                </span>
              </div>
              <h4 className="text-2xl font-headline font-bold mb-4">
                {item.title}
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-40">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-[2.5rem] p-12 lg:p-24 text-center text-on-primary relative overflow-hidden editorial-shadow">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-headline font-extrabold mb-8 tracking-tighter leading-tight">
              Let&apos;s Build Your <br />
              High-Performance Team
            </h2>
            <p className="text-xl text-on-primary/80 mb-12 leading-relaxed">
              Join hundreds of employers who trust Fadeb Consultancy for their
              most critical staffing needs. Your next key hire is waiting.
            </p>
            <Link
              to="/contact"
              className="bg-surface-container-lowest text-primary px-10 py-5 rounded-full font-headline font-bold text-lg hover:scale-105 transition-all editorial-shadow inline-block"
            >
              Start Recruiting Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
