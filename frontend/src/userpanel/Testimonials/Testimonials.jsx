import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';  // Import the CSS
import user from '../../assets/user.png';

const testimonialsData = [
    {
        name: 'Anil - Madhu',
        testimonial: 'A big thank you to CDIPL Ur Homes for an amazing experience. They listened to our needs and made the process of finding a great property so smooth and stress-free...',
        image: user
    },
    {
        name: 'Dr. Namita Nadar',
        testimonial: 'I came to know about Wellness Mart in Noida, a unique concept of health and wellness hub right in the middle of a premium commercial centre really fascinated me...',
        image: user
    },
    {
        name: 'Raghav - Deepika',
        testimonial: 'Choosing CDIPL Ur Homes for our investment in Sukhbiri Farms was one of the best decisions we’ve ever made...',
        image: user
    },
    {
        name: 'Rajesh',
        testimonial: 'Another testimonial text for Rajesh, describing the good experience they had...',
        image: user
    },
    {
        name: 'Shyam',
        testimonial: 'Shyam shares their experience, highlighting the good services and support...',
        image: user
    }
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // Show 3 cards at a time for larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768, // Adjust for mobile view
                settings: {
                    slidesToShow: 1, // Show only 1 card on mobile
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024, // Tablet view (optional customization)
                settings: {
                    slidesToShow: 2, // Show 2 cards on tablet
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="testimonials-section">
            <div className="testimonials-header">
                <h2 className='testimonials-header-heading '>What Our Clients Say!</h2>
                <p>Read The Thoughts Of Our Investors</p>
            </div>
            <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide">
                        <div className="testimonial-content">
                            <div className="quote-mark">❝</div>
                            <img src={testimonial.image} alt={testimonial.name} className="client-image" />
                            <p className="testimonial-text">{testimonial.testimonial}</p>
                            <h3 className="client-name">{testimonial.name}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
