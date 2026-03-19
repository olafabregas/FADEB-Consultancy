import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-surface-container-low pt-20 pb-10 px-6 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">
        {/* Col 1: Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary-fixed">
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
            <h2 className="font-headline font-black text-xl text-white">
              Fadeb Consultancy
            </h2>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Pioneering the future of talent acquisition and organizational
            growth through human-centric design.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Website"
              className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors hover:scale-110 hover:-translate-y-1"
              data-tooltip="Visit Website"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a
              href="#"
              aria-label="Email"
              className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors hover:scale-110 hover:-translate-y-1"
              data-tooltip="Send Email"
            >
              <span className="material-symbols-outlined text-sm">
                alternate_email
              </span>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-headline font-bold text-white mb-8 text-lg">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="/privacy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                to="/terms"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Latest Posts */}
        <div>
          <h4 className="font-headline font-bold text-white mb-8 text-lg">
            Latest Posts
          </h4>
          <div className="space-y-4">
            <a
              href="https://www.jobscan.co/resume-tips"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 group"
            >
              <div className="size-16 rounded bg-white/5 shrink-0 overflow-hidden">
                <img
                  className="object-cover size-full group-hover:scale-110 transition-transform"
                  alt="Resume tips article thumbnail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUw8RYsdC8QS68Qj3bVgQpIGkrDfDyh-masyrrRYIkhyF9sIG9Zw9hyNfJ92E_i2AF2R5N3ECVeuVGF7oY0mG3myEGN0Ocu4fPHIx-JFyIPf4p84Zo6tuWIOF10OXHv5DMiEcLsawE93vpLN7nZGJk02LViiOTWeI4SHivPs7IJ4TqJhABjMLHJFIv2WZigeI3c4IFMBla8Me_-uwNKZBnXiOPKfRSPqMbEf26hmz4sJyXc9zLDWzjOfR0Mffqhym8feeOH7LvSLE"
                />
              </div>
              <div>
                <p className="text-xs text-primary-fixed font-bold mb-1">
                  MARCH 12, 2024
                </p>
                <p className="text-sm font-semibold group-hover:text-white transition-colors">
                  Top Resume Tips for 2024
                </p>
              </div>
            </a>

            <a
              href="https://content.wisestep.com/how-to-pass-a-job-interview/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 group"
            >
              <div className="size-16 rounded bg-white/5 shrink-0 overflow-hidden">
                <img
                  className="object-cover size-full group-hover:scale-110 transition-transform"
                  alt="Job interview guide thumbnail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApyuHfZlZ0XsOjrs7F2o3BbT_SAeV1G8JfX674Ufn6yqKHMqmm_YDBWVSJHtzPc8vq3MFTXjy-4r7thT2rgSZau0JO4vZWX-waen3H1KpuV0ih4tHhMlYN3yxT6J4-w4YC9XI47sEvFYhDKOTpIIRvMyZqNxgZjAaf8IeLD9vhOrsVCZbaRsq_AWSk5WbhYZ_vrUtcFsBbv04r7EqNkOjtERXHP7Ejt6VYnd4X8PkxPAMPIRjFqOHf3O5P-vmkiCUNGXvHajSURpk"
                />
              </div>
              <div>
                <p className="text-xs text-primary-fixed font-bold mb-1">
                  FEB 28, 2024
                </p>
                <p className="text-sm font-semibold group-hover:text-white transition-colors">
                  How to Pass a Job Interview
                </p>
              </div>
            </a>

            <a
              href="https://www.betterteam.com/common-interview-questions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 group"
            >
              <div className="size-16 rounded bg-white/5 shrink-0 overflow-hidden">
                <div className="size-full bg-primary/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed">
                    question_answer
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs text-primary-fixed font-bold mb-1">
                  FEB 10, 2024
                </p>
                <p className="text-sm font-semibold group-hover:text-white transition-colors">
                  Common Interview Questions
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Col 4: Contact Info */}
        <div>
          <h4 className="font-headline font-bold text-white mb-8 text-lg">
            Contact Info
          </h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-fixed shrink-0 mt-0.5">
                location_on
              </span>
              134, Stadium Road, Taiwo Ilorin, Kwara State
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-fixed shrink-0">
                mail
              </span>
              <a
                href="mailto:info@fadebconsultingservices.com"
                className="hover:text-primary transition-colors break-all"
              >
                info@fadebconsultingservices.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-fixed shrink-0">
                call
              </span>
              <a
                href="tel:+2347060622264"
                className="hover:text-primary transition-colors"
              >
                +234 (0) 706-062-2264
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs opacity-50 font-label uppercase tracking-widest">
        <p>© 2024 Fadeb Consultancy Services. All Rights Reserved.</p>
        <p>Designed with Intentional Elegance</p>
      </div>
    </footer>
  );
}
