import React from 'react';
import './BlogSection.css';
import et from '../../assets/hq720.jpg';
import wt from '../../assets/SukhbiriHomes94.jpg';
import kt from '../../assets/3.webp';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Jewar Noida International Airport Takes Flight",
      date: '14 November',
      // author: 'John Doe',
      image: et, // Use the image directly here
      description: 'The long-awaited Noida International Airport, located in Jewar, is poised to transform the region’s aviation landscape. With the airport preparing for its first commercial flights, there are major milestones being celebrated, signaling a promising future for Noida and the entire NCR.',
      link: '/jewar-noida-international-airport-takes-first-flight',
    },
    {
      id: 2,
      title: "Sukhbiri Homes, Sector 107 Noida – Where Luxury Meets Comfort!",
      date: '20 November',
    
      image: wt, // Use the image directly here
      description: 'When it comes to finding the perfect home, the search often feels endless. But what if there was a place that ticked every box on your wish list—a place where luxury meets comfort and every day feels like a vacation? Welcome to Sukhbiri Homes Sector 107 Noida , a residential paradise crafted to bring your dreams to life.',
      link: '/sukhbiri-homes-noida',
    },
    {
      id: 3,
      title: "Understanding the Real Estate Market Trends in 2024",
      date: '28 June',
      author: 'Michael Johnson',
      image: kt, // Use the image directly here
      description: 'Stay ahead of the curve by learning the latest trends shaping the real estate market in 2024.',
      link: '/insights',
    },
  ];

  return (
    <div className="real-estate-section">
      <h2 className="section-title">Latest Real Estate Blogs</h2>
      <h3 className="section-subtitle">Stay Informed About the Real Estate World</h3>
      <div className="blog-cards">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-details">
              <div className="blog-info">
                <p>By {blog.author}</p>
                <span className="blog-date-box">{blog.date}</span>
              </div>
              <h4 className="blog-title">{blog.title}</h4>
              <p className="blog-description">{blog.description}</p>
              <a href={blog.link} className="read-more">→ Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
