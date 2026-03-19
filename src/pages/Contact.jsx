import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    });

    fetch("https://formspree.io/f/mwvryldn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          navigate("/thank-you");
        } else {
          alert("Error sending message. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Form error:", error);
        alert("Error sending message. Please try again.");
      });
  };

  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section - Simplified */}
      <section
        className="relative min-h-[60vh] pt-24 pb-20 px-6 lg:px-40 bg-gradient-to-br from-primary via-primary-fixed to-purple-900 overflow-hidden flex items-center"
        style={{
          animation: "gradientShift 8s ease infinite",
          backgroundSize: "200% 200%",
        }}
      >
        {/* Decorative Floating Orbs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"
          style={{ animation: "floatOrb1 20s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-50"
          style={{ animation: "floatOrb2 25s ease-in-out infinite" }}
        ></div>

        <div className="relative z-10 max-w-3xl">
          <h1
            className="font-headline text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
            style={{ animation: "textReveal 0.8s ease-out 0.2s both" }}
          >
            Get in Touch
          </h1>

          <p
            className="text-white/85 text-xl max-w-2xl leading-relaxed font-light"
            style={{ animation: "textReveal 0.8s ease-out 0.3s both" }}
          >
            Have questions? We&apos;re here to help. Reach out to our team and
            we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Information Cards - Creative Layout */}
      <section className="py-12 px-6 lg:px-40 bg-surface relative">
        <div className="max-w-7xl mx-auto">
          {/* Contact Cards with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-20">
            {/* Address Card - Both Locations */}
            <div className="group relative">
              <div className="backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/10 border border-primary/50 rounded-3xl p-8 hover:border-primary/80 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/30 transition-all"></div>
                <div className="relative z-10">
                  <div className="inline-block p-4 bg-gradient-to-br from-primary to-primary-fixed rounded-2xl mb-6 text-on-primary">
                    <span className="material-symbols-outlined text-3xl">
                      location_on
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                    Locations
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-on-surface-variant leading-relaxed">
                        <strong className="text-on-surface block mb-2">
                          Ilorin Office
                        </strong>
                        134, Stadium Road
                        <br />
                        Taiwo Ilorin, Kwara State
                        <br />
                        <span className="text-primary font-semibold">
                          Nigeria
                        </span>
                      </p>
                    </div>
                    <div className="border-t border-primary/20 pt-6">
                      <p className="text-on-surface-variant leading-relaxed">
                        <strong className="text-on-surface block mb-2">
                          Lagos Office
                        </strong>
                        109B Browns Road
                        <br />
                        Aguda, Surulere, Lagos
                        <br />
                        <span className="text-primary font-semibold">
                          Nigeria
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card - Bigger */}
            <div className="group relative md:col-span-1">
              <div className="backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/10 border border-primary/50 rounded-3xl p-8 hover:border-primary/80 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/30 transition-all"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="inline-block p-4 bg-gradient-to-br from-primary to-primary-fixed rounded-2xl mb-6 text-on-primary w-fit">
                    <span className="material-symbols-outlined text-3xl">
                      phone
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-6 text-on-surface">
                    Call Us
                  </h3>
                  <div className="space-y-4 flex-grow flex flex-col justify-center">
                    <a
                      href="tel:+2347060622264"
                      className="text-on-surface-variant hover:text-primary transition-colors font-semibold text-lg"
                    >
                      +234 706-062-2264
                    </a>
                    <a
                      href="tel:+2348034871326"
                      className="text-on-surface-variant hover:text-primary transition-colors font-semibold text-lg"
                    >
                      +234 803-487-1326
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative">
              <div className="backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/10 border border-primary/50 rounded-3xl p-8 hover:border-primary/80 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/30 transition-all"></div>
                <div className="relative z-10">
                  <div className="inline-block p-4 bg-gradient-to-br from-primary to-primary-fixed rounded-2xl mb-6 text-on-primary">
                    <span className="material-symbols-outlined text-3xl">
                      mail
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">
                    Email
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:info@fadebconsultingservices.com"
                      className="text-sm text-on-surface-variant hover:text-primary transition-colors font-semibold break-all block"
                    >
                      info@fadebconsultingservices.com
                    </a>
                    <a
                      href="mailto:hr@fadebconsultancyservices.com"
                      className="text-sm text-on-surface-variant hover:text-primary transition-colors font-semibold break-all block"
                    >
                      hr@fadebconsultancyservices.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Contact Form Section */}
      <section className="py-20 px-6 lg:px-20 bg-gradient-to-b from-background via-surface to-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-5xl font-black text-on-surface mb-4">
              Send us a Message
            </h2>
            <p className="text-on-surface-variant text-lg">
              Fill out the form below and our team will get back to you within
              24 hours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-on-surface font-headline font-bold mb-3 text-sm tracking-wide uppercase">
                      Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John Doe"
                        required
                        className={`w-full px-6 py-4 backdrop-blur-xl bg-white/10 border rounded-xl focus:outline-none transition-all duration-300 placeholder-on-surface-variant/50 text-on-surface ${
                          focusedField === "name"
                            ? "border-primary bg-white/20 shadow-xl shadow-primary/20"
                            : "border-primary/50 hover:border-primary/70"
                        }`}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">
                          check_circle
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-on-surface font-headline font-bold mb-3 text-sm tracking-wide uppercase">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="john@example.com"
                        required
                        className={`w-full px-6 py-4 backdrop-blur-xl bg-white/10 border rounded-xl focus:outline-none transition-all duration-300 placeholder-on-surface-variant/50 text-on-surface ${
                          focusedField === "email"
                            ? "border-primary bg-white/20 shadow-xl shadow-primary/20"
                            : "border-primary/50 hover:border-primary/70"
                        }`}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">
                          check_circle
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-on-surface font-headline font-bold mb-3 text-sm tracking-wide uppercase">
                    Phone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+234 (0) XXX XXX XXXX"
                      className={`w-full px-6 py-4 backdrop-blur-xl bg-white/10 border rounded-xl focus:outline-none transition-all duration-300 placeholder-on-surface-variant/50 text-on-surface ${
                        focusedField === "phone"
                          ? "border-primary bg-white/20 shadow-xl shadow-primary/20"
                          : "border-primary/50 hover:border-primary/70"
                      }`}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="group">
                  <label className="block text-on-surface font-headline font-bold mb-3 text-sm tracking-wide uppercase">
                    Subject *
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-6 py-4 backdrop-blur-xl bg-white/10 border rounded-xl focus:outline-none transition-all duration-300 appearance-none cursor-pointer text-on-surface ${
                        focusedField === "subject"
                          ? "border-primary bg-white/20 shadow-xl shadow-primary/20"
                          : "border-primary/50 hover:border-primary/70"
                      }`}
                    >
                      <option value="" className="text-on-surface">
                        Choose a subject
                      </option>
                      <option value="recruitment" className="text-on-surface">
                        Recruitment Services
                      </option>
                      <option value="training" className="text-on-surface">
                        Training Programs
                      </option>
                      <option value="cvresume" className="text-on-surface">
                        CV & Resume Services
                      </option>
                      <option value="consulting" className="text-on-surface">
                        HR Consulting
                      </option>
                      <option value="other" className="text-on-surface">
                        Other
                      </option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-on-surface font-headline font-bold mb-3 text-sm tracking-wide uppercase">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your needs and how we can help..."
                      required
                      rows="5"
                      className={`w-full px-6 py-4 backdrop-blur-xl bg-white/10 border rounded-xl focus:outline-none transition-all duration-300 placeholder-on-surface-variant/50 text-on-surface resize-none ${
                        focusedField === "message"
                          ? "border-primary bg-white/20 shadow-xl shadow-primary/20"
                          : "border-primary/50 hover:border-primary/70"
                      }`}
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group relative mt-8 px-8 py-4 bg-gradient-to-r from-primary to-primary-fixed text-on-primary rounded-xl font-headline font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      send
                    </span>
                  </span>
                </button>
              </form>
            </div>

            {/* Sidebar - Contact Info & Stats */}
            <div className="space-y-8">
              {/* Glassmorphic Info Card */}
              <div className="backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/10 border border-primary/50 rounded-3xl p-8">
                <h3 className="font-headline text-xl font-bold text-on-surface mb-6">
                  Response Time
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-on-surface-variant">
                      Usually replies within 2-4 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-on-surface-variant">
                      Available Mon - Fri, 9AM - 5PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Services Card */}
              <div className="backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/10 border border-primary/50 rounded-3xl p-8">
                <h3 className="font-headline text-xl font-bold text-on-surface mb-6">
                  Services
                </h3>
                <ul className="space-y-3">
                  {[
                    "Recruitment",
                    "Training",
                    "CV Services",
                    "HR Consulting",
                  ].map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base text-primary">
                        check
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Inquiries Section */}
      <section className="py-20 px-6 lg:px-40 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-5xl font-black text-on-surface mb-6">
              Common Inquiries
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ Item 1 */}
            <div className="bg-surface p-8 rounded-xl hover:bg-surface-container-low transition-colors duration-300 group cursor-pointer">
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center text-on-surface">
                <span className="text-primary mr-4 opacity-50 group-hover:opacity-100 transition-opacity text-2xl font-black">
                  01
                </span>
                How long does the recruitment process take?
              </h3>
              <p className="text-on-surface-variant leading-relaxed ml-12">
                Our typical search-to-hire cycle ranges from 14 to 30 days,
                depending on the seniority and specialization of the role
                required.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors duration-300 group cursor-pointer">
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center text-on-surface">
                <span className="text-primary mr-4 opacity-50 group-hover:opacity-100 transition-opacity text-2xl font-black">
                  02
                </span>
                Do you provide training programs for in-house teams?
              </h3>
              <p className="text-on-surface-variant leading-relaxed ml-12">
                Absolutely. We specialize in customized training programs
                designed to enhance soft skills, technical competencies, and
                leadership capabilities.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors duration-300 group cursor-pointer">
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center text-on-surface">
                <span className="text-primary mr-4 opacity-50 group-hover:opacity-100 transition-opacity text-2xl font-black">
                  03
                </span>
                What industries does Fadeb specialize in?
              </h3>
              <p className="text-on-surface-variant leading-relaxed ml-12">
                While we are cross-functional, our primary expertise lies in
                Finance, Technology, Healthcare, and Executive Leadership across
                various sectors.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-surface p-8 rounded-xl hover:bg-surface-container-low transition-colors duration-300 group cursor-pointer">
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center text-on-surface">
                <span className="text-primary mr-4 opacity-50 group-hover:opacity-100 transition-opacity text-2xl font-black">
                  04
                </span>
                Are your HR consulting services ongoing?
              </h3>
              <p className="text-on-surface-variant leading-relaxed ml-12">
                We offer both project-based consulting and long-term HR
                strategic partnership models to suit your organization&apos;s
                growth stage and needs.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-surface p-8 rounded-xl hover:bg-surface-container-low transition-colors duration-300 group cursor-pointer">
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center text-on-surface">
                <span className="text-primary mr-4 opacity-50 group-hover:opacity-100 transition-opacity text-2xl font-black">
                  05
                </span>
                Can you help with CV and resume services?
              </h3>
              <p className="text-on-surface-variant leading-relaxed ml-12">
                Yes! Our CV and resume services help both job seekers optimize
                their applications and employers create compelling job postings.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors duration-300 group cursor-pointer">
              <h3 className="font-headline text-xl font-bold mb-4 flex items-center text-on-surface">
                <span className="text-primary mr-4 opacity-50 group-hover:opacity-100 transition-opacity text-2xl font-black">
                  06
                </span>
                What&apos;s the typical response time for inquiries?
              </h3>
              <p className="text-on-surface-variant leading-relaxed ml-12">
                We typically respond to all inquiries within 24 hours during
                business hours (Monday-Friday, 9AM-5PM WAT).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
