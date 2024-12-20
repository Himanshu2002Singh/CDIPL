import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Company.css';

const Companies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4); // Default is 4 items for desktop
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false); // Track if the carousel should pause
  const carouselRef = useRef(null);
  const navigate = useNavigate(); // Hook to navigate to a different page

  const companies = [
    {
      name: "Startup",
      description: "Meet your new venture needs with affordable and convenient spaces.",
      icon: "fa-rocket",
      propertyType: "",
    },
    {
      name: "New Property",
      description: "Begin your journey of first property ownership with a safe and steady choice.",
      icon: "fa-building",
      propertyType: "Residential",
    },
    {
      name: "Investment",
      description: "Strategically invest in dynamic and promising workspaces with expertise.",
      icon: "fa-chart-line",
      propertyType: "Commercial",
    },
    {
      name: "ROI & Appreciation",
      description: "Take advantage of our diverse investment options for extraordinary returns.",
      icon: "fa-seedling",
      propertyType: "OfficeSpace",
    },
    {
      name: "Property Management",
      description: "We manage your property with the best possible care and precision.",
      icon: "fa-home",
      propertyType: "",
    },
    {
      name: "Commercial Spaces",
      description: "Discover the right commercial space for your business needs.",
      icon: "fa-briefcase",
      propertyType: "Commercial",
    },
    {
      name: "Residential",
      description: "Find your dream home with our exclusive residential properties.",
      icon: "fa-house-user",
      propertyType: "Residential",
    },
    {
      name: "Leasing Options",
      description: "Choose from flexible leasing options for residential and commercial spaces.",
      icon: "fa-handshake",
      propertyType: "",
    },
  ];

  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setItemsPerSlide(1); // Mobile
    } else if (width <= 1024) {
      setItemsPerSlide(2); // Tablet
    } else {
      setItemsPerSlide(4); // Desktop
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(companies.length / itemsPerSlide);

  // Auto-slide logic
  useEffect(() => {
    if (isPaused) return;

    const slideInterval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
      }
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [totalSlides, isDragging, isPaused]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleDragStart = (event) => {
    const startPos = event.type === "touchstart" ? event.touches[0].clientX : event.clientX;
    setStartPos(startPos);
    setIsDragging(true);
    setTransition(false); // Disable transition for dragging
  };

  const handleDragMove = (event) => {
    if (!isDragging) return;
    const currentPos = event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    const distance = currentPos - startPos;
    setTranslate(distance);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setTransition(true); // Re-enable transition
    const threshold = 50; // Minimum distance to consider it as a slide change
    if (translate > threshold) {
      setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
    } else if (translate < -threshold) {
      setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, totalSlides - 1));
    }
    setTranslate(0); // Reset the translation after drag ends
  };

  const handleCardClick = (propertyType) => {
    const queryString = new URLSearchParams({ propertyType }).toString();
    navigate(`/property?${queryString}`); // Navigates to the property page with query params
  };

  // Pause carousel on hover or touch
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="c-wrapper">
      <h2 className="about5-title">What's your Approach?</h2>
      <p className="c-description">To Acquire Property For</p>

      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onMouseEnter={handleMouseEnter} // Pause on hover
        // eslint-disable-next-line react/jsx-no-duplicate-props
        onMouseLeave={handleMouseLeave} // Resume on leave
        onTouchStart={() => setIsPaused(true)} // Pause on touch
        onTouchEnd={() => setIsPaused(false)} // Resume on touch end
        onTouchMove={handleDragMove}
      >
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${(currentSlide * 100) / totalSlides}%)`,
            width: `${totalSlides * 100}%`,
            transition: transition ? "transform 0.3s ease" : "none",
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div className="slide" key={slideIndex} style={{ width: `${100 / totalSlides}%` }}>
              {companies
                .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                .map((company, index) => (
                  <div
                    key={index}
                    className="company-box"
                    onClick={() => handleCardClick(company.propertyType)}
                  >
                    <i className={`fas ${company.icon} company-icon`}></i>
                    <h3>{company.name}</h3>
                    <p className="classp2">{company.description}</p>
                    <a href="#" className="see-all">
                      See all <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="dots-container">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
