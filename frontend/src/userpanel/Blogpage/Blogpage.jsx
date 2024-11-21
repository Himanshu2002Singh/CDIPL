import React from 'react';
import './BlogPage.css';
import Footer from '../Footer/Footer';
import jewar from "../../assets/hq720.jpg";
import sukhbiri from "../../assets/SukhbiriHomes94.jpg";

const BlogPage = () => {

    return (
        <div>
        <div className="blog-page-container mt-5">
            
            <main className="blog-page-content mt-5">
                
                <Article
                    tag="Growth and Connectivity"
                    title=" Jewar Noida International Airport Takes Flight: A Milestone for Noida's Growth and Connectivity"
                    description=" The long-awaited Noida International Airport, located in Jewar, is poised to transform the region’s aviation landscape. With the airport preparing for its first commercial flights, there are major milestones being celebrated, signaling a promising future for Noida and the entire NCR"
                    author="Admin"
                    date="November 14, 2024"
                    comments="1 Comments"
                    image={jewar}
                    link="/jewar-noida-international-airport-takes-first-flight"
                />
                <Article
                    tag="Property"
                    title="Sukhbiri Homes, Sector 107 Noida – Where Luxury Meets Comfort!"
                    description="When it comes to finding the perfect home, the search often feels endless. But what if there was a place that ticked every box on your wish list—a place where luxury meets comfort and every day feels like a vacation? Welcome to Sukhbiri Homes Sector 107 Noida , a residential paradise crafted to bring your dreams to life."
                    author="Admin"
                    date="November 20, 2024"
                    comments="1 Comments"
                    image={sukhbiri}
                    link="/sukhbiri-homes-noida"
                />
                <Article
                    tag="Luxury"
                    title="Experience True Luxury in Our Beachfront Villas"
                    description="With stunning views and private beaches, our luxury villas redefine living by the sea."
                    author="Admin"
                    date="October 5, 2024"
                    comments="3 Comments"
                    image="https://via.placeholder.com/150x100?text=Beachfront+Villa"
                />
                {/* Add more <Article /> components here */}
            </main>

            <aside className="blog-page-sidebar mt-5">
                <Search />
                <SocialMedia />
                <PopularNews />
               
                <HotCategories />
                <Tags />
            </aside>
        </div>
        <Footer/>
        </div>
    );
};

// Reusable Article Component with updated structure
const Article = ({ tag, title, description, author, date, comments, image,link }) => {
    return (
        <article className="blog-page-post">
            <div className="blog-page-post-content">
                <div className="blog-page-post-text">
                    <div className={`blog-page-tag ${tag === "Luxury" ? "luxury" : ""}`}>{tag}</div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="blog-page-post-meta">
                        <span>By {author}</span>
                        <span>{date}</span>
                        <span>{comments}</span>
                    </div>
                    <a href={link}>
                    <button className="blog-page-btn-read-more">Read More</button></a>
                </div>
                <div className="blog-page-post-image-container">
                    <img src={image} alt={title} className="blog-page-post-image" />
                </div>
            </div>
        </article>
    );
};

// Sidebar and other components remain the same
const Search = () => {
    return (
        <div className="blog-page-search">
            <input type="text" placeholder="Search here..." />
        </div>
    );
};

const SocialMedia = () => {
    return (
        <div className="stay-connected">
            <h3 className="stay-connected-title">STAY CONNECTED <span className="title-dot">•</span></h3>

            <div className="social-media-buttons">
                <div className="social-button facebook">
                <i className="fab fa-facebook-f"></i>
                    <span>Fans</span>
                    <span>0</span>
                </div>
                <div className="social-button twitter">
                    <i className="fab fa-twitter"></i>
                    <span>Followers</span>
                    <span>0</span>
                </div>
                <div className="social-button pinterest">
                    <i className="fab fa-pinterest"></i>
                    <span>Followers</span>
                    <span>0</span>
                </div>
                <div className="social-button instagram">
                <i className="fab fa-instagram"></i>
                    <span>Followers</span>
                    <span>0</span>
                </div>
                <div className="social-button youtube">
                    <i className="fab fa-youtube"></i>
                    <span>Subscribers</span>
                    <span>0</span>
                </div>
            </div>
        </div>
    );
};


const PopularNews = () => {
    const popularNews = [
        {
            id: 1,
            category: "Growth and Connectivity",
            title: "Jewar Noida International Airport Takes Flight...",
            date: "November 14, 2024",
            image: jewar ,
            link:'/jewar-noida-international-airport-takes-first-flight'
        },
        {
            id: 2,
            category: "Property",
            title: "Sukhbiri Homes, Sector 107 Noida – Where Luxury Meets Comfort!",
            date: "November 20, 2024",
            image: sukhbiri ,
            link: '/sukhbiri-homes-noida'
        },
        {
            id: 3,
            category: "Fashion",
            title: "Model slams brands using fur in fashio...",
            date: "December 9, 2021",
            image: "https://via.placeholder.com/100x100?text=News+3"
        }
    ];

    return (
        <div className="blog-page-popular-news">
            <h3>Popular News</h3>
            <ul className="popular-news-list">
                {popularNews.map(news => (
                    <li key={news.id} className="popular-news-item">
                        <div className="popular-news-rank">{news.id}</div>
                        <img src={news.image} alt={news.title} className="popular-news-image" />
                        <div className="popular-news-info">
                            <span className="popular-news-category">{news.category}</span>
                            <a href={news.link} className="popular-news-title">{news.title}</a>
                            <div className="popular-news-date">{news.date}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};




const HotCategories = () => {
    const categories = [
        { id: 1, name: "Growth and Connectivity", count: 1, image:jewar},
        { id: 2, name: "Property", count: 1, image: sukhbiri },
        { id: 3, name: "Adventure", count: 3, image: "https://via.placeholder.com/150x100?text=Adventure" },
        { id: 4, name: "America", count: 4, image: "https://via.placeholder.com/150x100?text=America" },
        { id: 5, name: "Animal", count: 7, image: "https://via.placeholder.com/150x100?text=Animal" }
    ];

    return (
        <div className="hot-categories">
            <h3>HOT CATEGORIES <span className="title-dot">•</span></h3>
            <ul className="category-list">
                {categories.map(category => (
                    <li key={category.id} className="category-item">
                        <div className="category-image-container">
                            <img src={category.image} alt={category.name} className="category-image" />
                            <div className="category-name">{category.name}</div>
                            <div className="category-count">{category.count}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const Tags = () => {
    const tags = [
        "Growth and Connectivity", "Property", "Dental", "Eye Care", "Fashion", "Food", "Gym", "Health", 
        "Music", "Politics", "Sports", "Tech", "Technology", "Travel", "Yoga"
    ];

    return (
        <div className="tags-section">
            <h3>TAGS <span className="title-dot">•</span></h3>
            <div className="tags-list">
                {tags.map((tag, index) => (
                    <span key={index} className="tag-item">
                        <a href="#">{tag}</a>
                    </span>
                ))}
            </div>
        </div>
    );
};


export default BlogPage;