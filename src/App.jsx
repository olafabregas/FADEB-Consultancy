import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import CVResume from "./pages/CVResume";
import Employers from "./pages/Employers";
import JobSeekers from "./pages/JobSeekers";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import "./index.css";

export default function App() {
  return (
    <div className="bg-background text-on-background">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/training" element={<Training />} />
        <Route path="/services/cv-resume" element={<CVResume />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/job-seekers" element={<JobSeekers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <Analytics />
    </div>
  );
}
