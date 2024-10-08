import React, { useState, useEffect } from "react";
import './Company.css';

const Companies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4); // Default is 4 items for desktop

  const companies = [
    {
      name: "Startup",
      description: "Meet your new venture needs with affordable and convenient spaces.",
      icon: "fa-rocket",
    },
    {
      name: "New Property",
      description: "Begin your journey of first property ownership with a safe and steady choice.",
      icon: "fa-building",
    },
    {
      name: "Investment",
      description: "Strategically invest in dynamic and promising workspaces with expertise.",
      icon: "fa-chart-line",
    },
    {
      name: "ROI & Appreciation",
      description: "Take advantage of our diverse investment options for extraordinary returns.",
      icon: "fa-seedling",
    },
    {
      name: "Property Management",
      description: "We manage your property with the best possible care and precision.",
      icon: "fa-home",
    },
    {
      name: "Commercial Spaces",
      description: "Discover the right commercial space for your business needs.",
      icon: "fa-briefcase",
    },
    {
      name: "Residential",
      description: "Find your dream home with our exclusive residential properties.",
      icon: "fa-house-user",
    },
    {
      name: "Leasing Options",
      description: "Choose from flexible leasing options for residential and commercial spaces.",
      icon: "fa-handshake",
    }
  ];

  // Update items per slide based on screen width
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
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 10000); // Slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section className="c-wrapper">
        <h2 className="c-heading">What's your Approach?</h2>
        <p className="c-description ">To Acquire Property For</p>

        <div className="carousel">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`, // Adjusts based on current slide
              width: `${totalSlides * 100}%`, // Ensures the correct width for the carousel
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div className="slide" key={slideIndex} style={{ width: `${100 / totalSlides}%` }}>
                {companies
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((company, index) => (
                    <div key={index} className="company-box">
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
    </>
  );
};

export default Companies;
