import { useState } from "react";
import { Link } from "react-router-dom";

export default function JobSeekers() {
  const [cvFormData, setCvFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cvFile: null,
  });

  const handleCvChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cvFile") {
      setCvFormData({ ...cvFormData, [name]: files[0] });
    } else {
      setCvFormData({ ...cvFormData, [name]: value });
    }
  };

  const handleCvSubmit = (e) => {
    e.preventDefault();
    console.log("CV Form:", cvFormData);
  };

  return (
    <div>
      {/* Hero Section with Image and Animations */}
      <section
        className="relative pt-32 pb-20 px-6 lg:px-40 overflow-hidden bg-gradient-to-br from-primary via-primary-fixed to-purple-900"
        style={{
          animation: "gradientShift 8s ease infinite",
          backgroundSize: "200% 200%",
        }}
      >
        {/* Decorative Floating Orbs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"
          style={{
            animation: "floatOrb1 20s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-50"
          style={{
            animation: "floatOrb2 25s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"
          style={{
            animation: "floatOrb3 22s ease-in-out infinite",
          }}
        ></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto relative z-10">
          {/* Left Content */}
          <div className="relative z-10">
            <span
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/15 text-white font-label font-semibold text-xs tracking-widest uppercase border border-white/20"
              style={{ animation: "textReveal 0.8s ease-out 0.1s both" }}
            >
              Career Evolution
            </span>
            <h1
              className="text-5xl lg:text-7xl font-headline font-extrabold text-white leading-[1.1] mb-8 tracking-tighter"
              style={{ animation: "textReveal 0.8s ease-out 0.2s both" }}
            >
              Unlock Your <br />
              <span className="text-white/80 italic font-editorial font-normal">
                Career Potential
              </span>
            </h1>
            <p
              className="text-lg lg:text-xl text-white/85 max-w-xl mb-10 leading-relaxed font-light"
              style={{ animation: "textReveal 0.8s ease-out 0.3s both" }}
            >
              Navigate the future of work with Fadeb Consultancy. We connect
              ambitious professionals with organizations that value growth,
              clarity, and structural elegance.
            </p>
            <div
              className="flex flex-wrap gap-4"
              style={{ animation: "textReveal 0.8s ease-out 0.4s both" }}
            >
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-full font-headline font-bold text-base hover:scale-[1.02] transition-all shadow-xl shadow-black/20"
              >
                Find Your Next Role
              </Link>
              <Link
                to="/services/cv-resume"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-headline font-bold text-base hover:bg-white/30 transition-all border border-white/30"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-surface-container-low">
              <img
                alt="Professional career development and job opportunities"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                src="/Assets/jobseeker/browsing-opportunity.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Elevate Your First Impression Section */}
      <section className="bg-gray-50 py-24 px-6 lg:px-40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-background">
              Elevate Your First <br />
              Impression
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Your CV is your digital greenhouse—a place where your skills
              should flourish. Our expert consultants provide bespoke review and
              rewriting services tailored to modern high-end markets.
            </p>
            <Link
              to="/services/cv-resume"
              className="inline-flex items-center gap-3 px-8 py-4 bg-on-background text-white rounded-full font-bold hover:bg-primary transition-colors group"
            >
              Request Review
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg space-y-4 translate-y-8 hover:shadow-xl transition-shadow duration-300">
              <span className="material-symbols-outlined text-4xl text-primary">
                edit_note
              </span>
              <h3 className="text-xl font-headline font-bold text-on-background">
                Expert Rewriting
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Transform your experience into a compelling narrative that
                catches the eye of top-tier recruiters.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg space-y-4 hover:shadow-xl transition-shadow duration-300">
              <span className="material-symbols-outlined text-4xl text-secondary">
                visibility
              </span>
              <h3 className="text-xl font-headline font-bold text-on-background">
                Visual Audits
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                A deep dive into the structural aesthetics and clarity of your
                current professional profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-40">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4">
            Services Designed for <br />
            <span className="text-primary italic font-editorial font-normal">
              Your Success
            </span>
          </h2>
          <p className="text-center text-on-surface-variant text-lg max-w-2xl mx-auto mb-24">
            We provide comprehensive solutions to help you find the right job
            and advance your career
          </p>

          {/* Service 1: CV Review & Optimization */}
          <div className="grid md:grid-cols-2 gap-20 items-center mb-40">
            <div className="order-2 md:order-1 space-y-8">
              <h3 className="font-headline text-3xl font-bold text-on-background">
                CV Review & Optimization
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Your CV is your first impression. Our expert consultants review
                your CV and provide professional rewriting services to ensure it
                captures the attention of recruiters.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface font-body">
                    ATS-Friendly Formatting
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface font-body">
                    Industry-Specific Keywords
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface font-body">
                    Executive Summary Crafting
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface font-body">
                    Personal Branding Consultation
                  </span>
                </li>
              </ul>
              <Link
                to="/services/cv-resume"
                className="inline-flex items-center gap-2 text-primary font-bold group hover:gap-3 transition-all"
              >
                Learn More
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl transform hover:shadow-xl transition-all duration-700 hover:scale-105">
              <img
                src="/Assets/jobseeker/reviewing resume.jpeg"
                alt="Professional reviewing a CV"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Service 2: Job Search Guidance */}
          <div className="grid md:grid-cols-2 gap-20 items-center mb-40">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:shadow-xl transition-all duration-700 hover:scale-105">
              <img
                src="/Assets/jobseeker/browsing-opportunity.jpeg"
                alt="Job search with laptop"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="space-y-8">
              <h3 className="font-headline text-3xl font-bold text-on-background">
                Comprehensive Job Search Guidance
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Navigating the job market can be overwhelming. Our expert career
                counselors provide personalized guidance to help you find
                positions that match your skills and aspirations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface font-body">
                    Hidden Market Strategies
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface font-body">
                    LinkedIn Profile Mastery
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface font-body">
                    Interview Preparation & Mock Sessions
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface font-body">
                    Salary Negotiation Guidance
                  </span>
                </li>
              </ul>
              <button className="bg-primary text-on-primary font-label px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20">
                Get Started
              </button>
            </div>
          </div>

          {/* Service 3: Development & Training */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <h3 className="font-headline text-3xl font-bold text-on-background">
                Development & Training
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Continuous learning is key to career advancement. Access our
                training programs designed to enhance your skills and keep you
                competitive in the job market.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface font-body">
                    Soft Skills Workshops
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface font-body">
                    Technical Upskilling Pathways
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface font-body">
                    Leadership Development
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span className="text-on-surface font-body">
                    Professional Certification Prep
                  </span>
                </li>
              </ul>
              <Link
                to="/services/training"
                className="inline-flex items-center gap-2 text-primary font-bold group hover:gap-3 transition-all"
              >
                Explore Training
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl transform hover:shadow-xl transition-all duration-700 hover:scale-105">
              <img
                src="/Assets/jobseeker/continuous learning.jpeg"
                alt="Professional development training"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CV Upload Form Section */}
      <section className="py-32 px-6 lg:px-40 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-xl shadow-purple-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <h2 className="font-headline text-3xl font-bold mb-4 text-on-background">
              Submit Your CV
            </h2>
            <p className="text-on-surface-variant mb-12">
              Let our expert recruiters find the right match for you. Upload
              your resume today.
            </p>

            <form onSubmit={handleCvSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-sm font-semibold text-on-surface">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={cvFormData.fullName}
                    onChange={handleCvChange}
                    required
                    placeholder="Jane Doe"
                    className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all text-on-surface placeholder-on-surface/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-sm font-semibold text-on-surface">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={cvFormData.email}
                    onChange={handleCvChange}
                    required
                    placeholder="jane@example.com"
                    className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all text-on-surface placeholder-on-surface/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label text-sm font-semibold text-on-surface">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={cvFormData.phone}
                  onChange={handleCvChange}
                  required
                  placeholder="+234 (0) XXX XXX XXXX"
                  className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all text-on-surface placeholder-on-surface/40"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label text-sm font-semibold text-on-surface">
                  Upload CV (PDF or DOC)
                </label>
                <div className="border-2 border-dashed border-outline/30 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 hover:border-primary transition-all cursor-pointer group">
                  <input
                    type="file"
                    name="cvFile"
                    onChange={handleCvChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="cvFile"
                  />
                  <label
                    htmlFor="cvFile"
                    className="cursor-pointer flex flex-col items-center w-full"
                  >
                    <span className="material-symbols-outlined text-4xl text-primary mb-2 group-hover:scale-110 transition-transform">
                      cloud_upload
                    </span>
                    <span className="text-on-surface-variant font-semibold">
                      Click to browse or drag and drop
                    </span>
                  </label>
                </div>
              </div>

              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  className="mt-1 rounded border-outline text-primary focus:ring-primary accent-primary"
                />
                <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  I agree to the privacy policy and consent to Fadeb Consultancy
                  storing my data for recruitment purposes.
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-fixed text-on-primary py-5 rounded-full font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 transition-all active:translate-y-0"
              >
                Submit CV for Review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Registration & Login CTA */}
      <section className="py-20 px-6 lg:px-40 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl font-bold text-center mb-4 text-on-surface">
            Ready to Take Your Career Forward?
          </h2>
          <p className="text-center text-on-surface-variant text-lg mb-12">
            Create your profile today and access exclusive job opportunities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/contact"
              className="flex flex-col items-center gap-6 p-10 bg-primary text-on-primary rounded-2xl hover:-translate-y-4 transition-transform duration-300 text-center group shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              <span className="material-symbols-outlined text-6xl group-hover:scale-125 transition-transform duration-300">
                person_add
              </span>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-2">
                  Create Job Seeker Profile
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Register now to start applying for exciting opportunities
                </p>
              </div>
              <span className="text-on-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                Get Started →
              </span>
            </Link>

            <Link
              to="/services/cv-resume"
              className="flex flex-col items-center gap-6 p-10 bg-gradient-to-br from-secondary to-secondary-container text-on-secondary rounded-2xl hover:-translate-y-4 transition-transform duration-300 text-center group shadow-lg shadow-secondary/20 hover:shadow-secondary/40"
            >
              <span className="material-symbols-outlined text-6xl group-hover:scale-125 transition-transform duration-300">
                login
              </span>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-2">
                  Access Your Account
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Login to manage your profile and applications
                </p>
              </div>
              <span className="text-on-secondary font-bold text-sm group-hover:translate-x-1 transition-transform">
                Sign In →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories / Growth Stories */}
      <section className="py-32 px-6 lg:px-40 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline text-4xl font-bold text-center mb-20 text-on-background">
            Growth Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Chioma Okonkwo",
                role: "Senior Product Manager",
                testimonial:
                  "The CV review was a game changer. Within two weeks of applying with my new resume, I had landed interviews with three Fortune 500 companies.",
                borderColor: "border-primary",
              },
              {
                name: "Tunde Adeyemi",
                role: "Lead Software Engineer",
                testimonial:
                  "The career guidance sessions helped me transition from a stagnant role into a leadership position I actually care about. Truly transformative.",
                borderColor: "border-secondary",
              },
              {
                name: "Zainab Hassan",
                role: "Digital Marketing Strategist",
                testimonial:
                  "I never realized how many opportunities I was missing until Fadeb Consultancy refined my search strategy. The training was concise and highly effective.",
                borderColor: "border-tertiary",
              },
            ].map((story, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl border-l-8 ${story.borderColor} p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        star
                      </span>
                    </span>
                  ))}
                </div>
                <p className="text-on-surface-variant text-lg mb-8 italic leading-relaxed">
                  &quot;{story.testimonial}&quot;
                </p>
                <div>
                  <p className="font-headline font-bold text-on-background">
                    {story.name}
                  </p>
                  <p className="text-primary font-label text-sm">
                    {story.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
