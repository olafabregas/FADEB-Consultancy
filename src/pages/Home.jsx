import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  return (
    <div>
      <HeroCarousel />

      {/* SERVICES SECTION */}
      <section className="py-32 px-6 lg:px-40 bg-surface">
        <div className="flex flex-col items-center mb-20">
          <h2 className="font-headline text-4xl lg:text-5xl font-black text-on-surface mb-4">
            Our Services
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Cards */}
          {[
            {
              icon: "group",
              title: "Recruitment & Staffing",
              desc: "Find the right talent with comprehensive recruitment services tailored to your culture.",
            },
            {
              icon: "menu_book",
              title: "Training & Development",
              desc: "Empower your workforce with targeted training programs designed for modern growth.",
            },
            {
              icon: "work",
              title: "HR Consulting",
              desc: "Strategic HR solutions tailored to business needs — from compliance to strategy.",
            },
            {
              icon: "handshake",
              title: "Talent Management",
              desc: "Build high-performing teams with retention strategies that actually work.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-surface-container-lowest p-8 rounded-xl editorial-shadow border-l-[6px] border-primary-container hover:border-primary transition-all duration-500 hover:-translate-y-3 card-stagger"
            >
              <div className="size-16 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-on-primary transition-colors icon-box">
                <span className="material-symbols-outlined scale-125">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <a
                href="#"
                className="service-link font-label text-primary font-bold text-sm group-hover:text-primary-fixed"
              >
                Explore Service
                <span className="material-symbols-outlined text-base leading-none">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
