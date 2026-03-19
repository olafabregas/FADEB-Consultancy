import { useEffect, useState } from "react";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: "./Assets/hero-1.jpeg" },
    { id: 2, image: "./Assets/hero2-team meeting.jpeg" },
    { id: 3, image: "./Assets/hero3-receptionist.jpeg" },
  ];

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-20">
      {/* Hero Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="hero-bg-image absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${slide.image}')`,
              opacity: currentSlide === index ? 1 : 0,
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-on-surface/90 via-on-surface/20 to-transparent"></div>
          </div>
        ))}
      </div>

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

      {/* Hero Content */}
      <div className="relative z-10 px-6 lg:px-40 max-w-5xl">
        <span
          className="font-label font-bold text-primary-fixed uppercase tracking-widest text-sm mb-4 block"
          style={{
            animation: "textReveal 0.8s ease-out 0.2s both",
          }}
        >
          Elevating HR Excellence
        </span>
        <h1
          className="font-headline text-5xl lg:text-8xl font-black text-on-primary leading-[1.1] mb-8"
          style={{
            animation: "textReveal 0.8s ease-out 0.3s both",
          }}
        >
          Transform Your <br />
          <span className="text-primary-container">Talent Strategy</span>
        </h1>
        <p
          className="font-body text-lg lg:text-xl text-surface-container-low max-w-xl mb-12 leading-relaxed"
          style={{
            animation: "textReveal 0.8s ease-out 0.4s both",
          }}
        >
          Empower your workforce and build winning teams with Fadeb Consultancy
          Services. We bridge the gap between ambition and professional reality.
        </p>
      </div>

      {/* Slide Pagination Dots */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3"
        role="tablist"
        aria-label="Hero slides"
        style={{
          animation: "textReveal 0.8s ease-out 0.5s both",
        }}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => handleDotClick(index)}
            role="tab"
            aria-selected={currentSlide === index}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "h-1.5 w-12 bg-primary"
                : "h-1.5 w-3 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
