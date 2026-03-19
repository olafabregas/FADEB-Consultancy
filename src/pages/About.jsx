import { useState } from "react";

export default function About() {
  const [openPanel, setOpenPanel] = useState(-1);

  const togglePanel = (index) => {
    setOpenPanel(openPanel === index ? -1 : index);
  };

  const solutions = [
    {
      title: "Pre-Employment Testing",
      content:
        "We offer services for Pre-Employment Testing of candidates to determine their academic and other relevant skills suitability for your available vacancies and job openings. Testing can be conducted online, within your premises or at designated locations as per customer request. One of our key selling points is the flexibility of delivery.",
    },
    {
      title: "Job Opening Advertising",
      content:
        "Whether through our website or online job portal or other available platforms to reach job applicants, we are able to push your job openings and vacancy advertisements to all the channels that matter and will bring you the most qualified candidates to select from, so you are able to get the best fit within the shortest possible time.",
    },
    {
      title: "Recruitment to Screening",
      content:
        "We cover the whole recruitment life-cycle from job opening determination, to vacancy advertisements and candidate screening. Our comprehensive background investigations and screening ensure that problematic and potentially troublesome employees are carefully screened out from your employment list, with several attendant cost savings.",
    },
    {
      title: "Interviewing and On-Boarding Program",
      content:
        "Regardless of the location or spread of candidates and your timeline for recruitment, we are able to conduct required interviews both remotely and on-site using our expert consultants to ensure you have the best candidates joining your workforce without any unnecessary delay.",
    },
  ];

  return (
    <div>
      {/* Hero Section with Gradient Background */}
      <section
        className="relative min-h-screen pt-24 pb-20 px-6 lg:px-40 bg-gradient-to-br from-primary via-primary-fixed to-purple-900 overflow-hidden flex items-center justify-center"
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
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"
          style={{
            animation: "floatOrb3 22s ease-in-out infinite",
          }}
        ></div>

        <div className="relative z-10 text-center max-w-3xl">
          {/* Animated Lines and Label */}
          <div
            className="flex items-center gap-3 mb-6 justify-center"
            style={{
              animation: "textReveal 0.8s ease-out 0.2s both",
            }}
          >
            <div
              className="h-1 bg-white rounded-full"
              style={{
                animation: "lineReveal 0.6s ease-out 0.4s both",
                width: 0,
              }}
            ></div>
            <span className="text-white/90 font-semibold text-sm tracking-widest uppercase">
              Our Story & Mission
            </span>
            <div
              className="h-1 bg-white rounded-full"
              style={{
                animation: "lineReveal 0.6s ease-out 0.45s both",
                width: 0,
              }}
            ></div>
          </div>

          {/* Animated Heading */}
          <h1
            className="font-headline text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight"
            style={{
              animation: "textReveal 0.8s ease-out 0.3s both",
            }}
          >
            About Fadeb <span className="text-white/80">Consultancy</span>
          </h1>

          {/* Animated Description */}
          <p
            className="text-white/85 text-xl lg:text-2xl mb-10 leading-relaxed font-light"
            style={{
              animation: "textReveal 0.8s ease-out 0.4s both",
            }}
          >
            Transforming careers and building exceptional teams through expert
            HR solutions and training
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6 lg:px-40 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl font-bold text-primary mb-8">
            Who We Are
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            We are a Human Resource Consulting firm cum staffing and training
            intervention located in Ilorin, North-Central Nigeria. This began
            out of the desire to contribute to this community — which means
            knowing the local market. So Fadeb Consultancy Services can really
            serve each client and employee with quality service by providing
            hands-on solutions to their staffing challenges. The company
            operates as a standard human resources consulting firm with a bias
            in recruitment and training.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            Fadeb Consultancy Services works with public sector, national,
            regional and local businesses. We have a strong commercial
            understanding and proven experience which is underpinned by a team
            of fully qualified recruitment professionals.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            From senior management level to support staff, across a broad
            spectrum of sectors of industry, we will work closely with you
            throughout the recruitment and HR process. Fadeb Consultancy
            Services provides a choice of permanent, contract and
            contract-to-permanent staff.
          </p>
        </div>
      </section>

      {/* Value for Money Section */}
      <section className="py-20 px-6 lg:px-40 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline text-4xl font-bold text-primary mb-8">
            Our Awesome Value for Money
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            Our superior service at Fadeb Consultancy Services offers you
            excellent value for money for highly insightful organisations that
            understand the many benefits of having a &quot;top notch&quot;
            workforce and high-performance employees.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features Grid */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-6">
                <div className="text-primary text-4xl flex-shrink-0">
                  <span className="material-symbols-outlined scale-150">
                    verified
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-3">
                    Expertise Engagement
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Our services rival the best qualified recruiters and
                    employment specialists with our expert CIPD and CIPM
                    qualified staff, usually at a lower cost.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6">
                <div className="text-primary text-4xl flex-shrink-0">
                  <span className="material-symbols-outlined scale-150">
                    clock_loader_40
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-3">
                    Save Huge Cost and Time
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Our services relieve employers of costs related to
                    pre-employment testing, job vacancy advertisements,
                    candidate interviews and background investigations.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6">
                <div className="text-primary text-4xl flex-shrink-0">
                  <span className="material-symbols-outlined scale-150">
                    trending_up
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-3">
                    Increase Retention
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Using our temporary service gives you the opportunity to
                    observe employee performance, qualifications and work habits
                    before offering the worker a permanent position.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Image */}
            <div>
              <img
                src="/Assets/fadeb-team.jpeg"
                alt="Fadeb Consultancy Services team"
                className="w-full h-auto max-h-96 rounded-2xl shadow-lg editorial-shadow object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Solutions Section */}
      <section className="py-20 px-6 lg:px-40 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Why Choose Us */}
          <div>
            <h3 className="font-headline text-2xl font-bold text-primary mb-4 pb-3 border-b-2 border-primary">
              Why Choose Us?
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              We offer an excellent level of service through our HR consultants
              who are fully qualified and certified members of Human Resource
              Professional bodies at home and abroad, with superior price and
              cost considerations.
              <br />
              <br />
              We are committed to connecting suitable candidates to your
              available vacancies within the shortest possible time.
            </p>
          </div>

          {/* Our Solutions - Accordion */}
          <div>
            <h3 className="font-headline text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary">
              Our Solutions
            </h3>
            <div className="space-y-2">
              {solutions.map((solution, idx) => (
                <div
                  key={idx}
                  className="border border-outline-variant rounded-lg overflow-hidden editorial-shadow"
                >
                  <button
                    onClick={() => togglePanel(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-surface-container hover:bg-surface-container-high transition-colors text-left"
                  >
                    <h4 className="font-headline font-bold text-on-surface">
                      {solution.title}
                    </h4>
                    <span
                      className={`text-primary transition-transform duration-300 ${openPanel === idx ? "rotate-90" : ""}`}
                    >
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </span>
                  </button>
                  {openPanel === idx && (
                    <div className="px-6 py-4 bg-background border-t border-outline-variant/30 text-on-surface-variant text-sm leading-relaxed animate-fade-in-down">
                      {solution.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Bars */}
          <div>
            <h3 className="font-headline text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary">
              Our Expertise
            </h3>
            <div className="space-y-6">
              {[
                { label: "Pre-Employment Testing", value: 90 },
                { label: "Job Opening Advertising", value: 98 },
                { label: "Recruitment to Screening", value: 95 },
                { label: "Interviewing & On-Boarding", value: 95 },
              ].map((expertise, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <p className="text-on-surface font-headline text-sm font-semibold">
                      {expertise.label}
                    </p>
                    <span className="text-primary font-bold text-sm">
                      {expertise.value}%
                    </span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-primary-fixed h-full transition-all duration-500"
                      style={{ width: `${expertise.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
