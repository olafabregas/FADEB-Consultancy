import { Link } from "react-router-dom";

export default function CVResume() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-40 bg-gradient-to-b from-primary/10 to-surface">
        <div className="text-center mb-8">
          <h1 className="font-headline text-5xl lg:text-6xl font-black text-on-surface mb-6">
            CV and Resume Services
          </h1>
          <div className="h-1.5 w-24 bg-primary rounded-full mx-auto"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-6 lg:px-40 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl font-bold text-primary mb-4">
            Our CV and Resume Services
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-2">
            We offer CV and Resume Review and CV/Resume Re-writing services to
            Job Seekers to improve their chances of securing employment.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Employers can also have paid access to our pool of CVs and Resumes
            for quick and no hassle recruitment needs.
          </p>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="py-16 px-6 lg:px-40 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-headline text-4xl font-bold text-primary mb-8">
                For Employers
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Placing adverts and waiting for CV submission from Job Seekers
                which can take several weeks is not ideal when as an Employer,
                you need to quickly fill a few vacancies. Our CV and Resume
                services for Employers help you overcome this challenge by
                providing you paid access to any number of CVs or Resumes that
                you need from our pool of CVs and Resumes.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-primary to-primary-fixed text-on-primary font-label px-8 py-3 rounded-full font-bold text-base hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Learn More
              </Link>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src="/Assets/cvresume/cv_employer.jpg"
                alt="CV and Resume Services for Employers"
                className="w-full h-auto rounded-xl shadow-lg editorial-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Job Seekers Section */}
      <section className="py-16 px-6 lg:px-40 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex items-center justify-center lg:order-1">
              <img
                src="/Assets/cvresume/jobseeker.jpg"
                alt="CV and Resume Services for Job Seekers"
                className="w-full h-auto rounded-xl shadow-lg editorial-shadow"
              />
            </div>

            {/* Content */}
            <div className="lg:order-2">
              <h2 className="font-headline text-4xl font-bold text-primary mb-8">
                For Job Seekers
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                It is said that first impression matters a lot and as a Job
                Seeker, your first impression is not made by your dressing or
                spoken English but rather by your CV or Resume. Our CV and
                Resume services for Job Seekers help to improve their
                marketability through their main instrument of marketing for
                employment to employers, which is essentially the CV.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-primary to-primary-fixed text-on-primary font-label px-8 py-3 rounded-full font-bold text-base hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-40 bg-gradient-to-r from-primary/90 to-primary-fixed">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold text-on-primary mb-6">
            Stand Out from the Crowd
          </h2>
          <p className="text-on-primary/90 text-lg mb-8 max-w-2xl mx-auto">
            Let our expert team help you create a compelling CV or Resume that
            gets noticed by employers.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-on-primary text-primary font-label px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
