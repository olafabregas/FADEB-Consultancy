import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home after 8 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-6">
      {/* Main Content */}
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-fixed rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-on-primary">
                check_circle
              </span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-headline text-5xl lg:text-6xl font-black text-on-surface mb-6">
          Thank You!
        </h1>

        {/* Description */}
        <p className="text-xl text-on-surface-variant mb-4 leading-relaxed">
          Your submission has been received successfully.
        </p>

        <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
          Our team will review your information and get back to you within 24
          hours. We appreciate your interest in Fadeb Consultancy Services.
        </p>

        {/* Auto-redirect message */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-primary-fixed/10 border border-primary/30">
          <p className="text-on-surface-variant">
            You will be redirected to the home page in{" "}
            <span className="font-bold text-primary">8 seconds</span>...
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            Contact Support
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-12 border-t border-on-surface/10">
          <p className="text-on-surface-variant mb-6">
            Have questions while you wait?
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm">
            <a
              href="tel:+2347060622264"
              className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">phone</span>
              +234 (0) 706-062-2264
            </a>
            <a
              href="mailto:info@fadebconsultingservices.com"
              className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">mail</span>
              info@fadebconsultingservices.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
