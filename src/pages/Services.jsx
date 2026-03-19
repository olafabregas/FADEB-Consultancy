import { Link } from "react-router-dom";

export default function Services() {
  const serviceBlocks = [
    {
      image: "/Assets/recruitment/temporary.jpg",
      title: "Temporary Employees",
      desc: "Whether your business is seasonal, or you take on special projects and need to beef up your staff short-term, our temporary staffing is a great solution. Our well-qualified pool of temporary employees is ready to hit the ground running.",
    },
    {
      image: "/Assets/recruitment/temporary-to-hire.jpg",
      title: "Temporary to Hire",
      desc: "With our temporary to hire program, we'll place a pre-screened candidate with you for a probationary period. This allows you to fully assess the candidate as a temp before making a commitment to employ them directly.",
    },
    {
      image: "/Assets/recruitment/permanent.jpg",
      title: "Permanent",
      desc: "Get your hiring right the first time. Our screening, interview, testing, and negotiation process takes the guess work out of finding the perfect candidate. Once you've selected your new employee, we'll walk you through the negotiation and hiring process using our in-depth industry knowledge to determine compensation, benefits and incentives.",
    },
  ];

  const infoBlocks = [
    {
      icon: "person",
      title: "Pre-Employment Testing",
      desc: "Pre-employment testing of candidates for optimum fit for eventual hires.",
    },
    {
      icon: "star",
      title: "Job Advertisements",
      desc: "Job Openings adverts on our website, job portal and associated platforms.",
    },
    {
      icon: "menu_book",
      title: "Interviewing",
      desc: "Remote and on-site interviewing of candidates and potential hires.",
    },
    {
      icon: "home",
      title: "Recruiting to Screening",
      desc: "Complete recruitment life-cycle from recruiting to screening and engagement.",
    },
    {
      icon: "shield",
      title: "Background Investigations",
      desc: "Comprehensive background investigation of candidates and hires.",
    },
    {
      icon: "thumb_up",
      title: "On-boarding Program",
      desc: "Smooth and un-eventful on-boarding of candidates to your workforce.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-40 bg-gradient-to-b from-primary/10 to-surface">
        <div className="text-center mb-8">
          <h1 className="font-headline text-5xl lg:text-6xl font-black text-on-surface mb-6">
            Recruitment Services
          </h1>
          <div className="h-1.5 w-24 bg-primary rounded-full mx-auto"></div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-12 px-6 lg:px-40 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl font-bold text-primary mb-4">
            Our Recruitment Services
          </h2>
          <p className="text-on-surface-variant text-lg">
            All our HR consultants are fully qualified and certified members of
            Human Resource Professional bodies home and abroad, that is CIPD and
            CIPM to offer you an excellent level of service.
          </p>
        </div>
      </section>

      {/* Service Blocks with Images */}
      <section className="py-16 px-6 lg:px-40 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {serviceBlocks.map((service, idx) => (
              <div key={idx} className="group">
                <div className="overflow-hidden rounded-lg mb-6 h-64 editorial-shadow">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Divider */}
      <section className="py-8 px-6 lg:px-40 bg-background">
        <div className="max-w-6xl mx-auto">
          <hr className="border-outline-variant/30" />
        </div>
      </section>

      {/* Info Blocks */}
      <section className="py-16 px-6 lg:px-40 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {infoBlocks.map((block, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="text-primary text-4xl flex-shrink-0">
                    <span className="material-symbols-outlined scale-125">
                      {block.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-primary mb-3">
                      {block.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {block.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-40 bg-gradient-to-r from-primary/90 to-primary-fixed">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold text-on-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-on-primary/90 text-lg mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you find the right talent for your
            organization.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-on-primary text-primary font-label px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
