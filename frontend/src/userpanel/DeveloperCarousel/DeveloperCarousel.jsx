import React from 'react';
import Slider from 'react-slick';
import './DeveloperCarousel.css'; // Import the CSS for styles
import m3m from '../../assets/download-3.png';
import sharda from '../../assets/download (2).png';
import imge2 from '../../assets/images.jpeg';

const testimonials = [
  {
    logo: m3m, // Use the imported image directly
    text: 'We are overjoyed to work with <strong>CDIPL</strong>. Their involvement in our  project has been truly amazing. Their expert professionalism, transparency, and genuine care have created a strong bond of trust with our investors. Their support has been crucial in helping us establish a strong presence.',
    author: 'M3M',
  },
  {
    logo: sharda, // Use the imported image directly
    text: 'We are happy to be associated with <strong>CDIPL</strong> from the beginning. Phase 1 has been a roaring success because of <strong>CDIPL</strong>, and we look forward to their continued professional support in Phase 2 of Spectrum Metro.',
    author: 'SHARDA',
  },
  {
    logo: imge2, // Use the imported image directly
    text: 'We have been associated with <strong>CDIPL</strong> for a long time. <strong>CDIPL</strong> was instrumental in spreading the word about our top projects. We are grateful to the <strong>CDIPL</strong> team.',
    author: 'THE LINE',
  }
];

const DeveloperCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 testimonials at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px, show 2 slides
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px, show 1 slide
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="developer-carousel">
      <h2 className="developer-carousel-heading">Hear It from Our Developers</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="developer-carousel-slide">
            <div className="developer-carousel-content">
              <img src={testimonial.logo} alt="logo" className="developer-carousel-logo" />
              <p className="developer-carousel-text" dangerouslySetInnerHTML={{ __html: testimonial.text }} />
              <p className="developer-carousel-author">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DeveloperCarousel;
