import React from 'react';
import './BlogPage.css';
import Footer from '../Footer/Footer';

const BlogPage = () => {

    return (
        <div>
        <div className="blog-page-container mt-5">
            
            <main className="blog-page-content mt-5">
                
                <Article
                    tag="Adventure"
                    title="Are You Ready For Discover Sea Diving Position Fall Nation Area Down"
                    description="Ahen an unknown printer took a galley of type and their scrambled imaketype specimen book has follorrrived not only fiver centuriewhen an unknown."
                    author="Admin"
                    date="August 30, 2024"
                    comments="0 Comments"
                    image="https://via.placeholder.com/150x100?text=Sea+Diving"
                />
                <Article
                    tag="Adventure"
                    title="Explore the New Heights of Mountain Adventures"
                    description="From scaling peaks to exploring mountain valleys, our adventure homes are perfect for thrill-seekers."
                    author="Admin"
                    date="September 12, 2024"
                    comments="5 Comments"
                    image="https://via.placeholder.com/150x100?text=Mountain+Adventure"
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
const Article = ({ tag, title, description, author, date, comments, image }) => {
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
                    <button className="blog-page-btn-read-more">Read More</button>
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
            category: "Fashion",
            title: "Budget Issues Force The Our To Be...",
            date: "December 9, 2021",
            image: "https://via.placeholder.com/100x100?text=News+1"
        },
        {
            id: 2,
            category: "Fashion",
            title: "Here What's In Battlefield $80...",
            date: "December 9, 2021",
            image: "https://via.placeholder.com/100x100?text=News+2"
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
                            <a href="#" className="popular-news-title">{news.title}</a>
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
        { id: 1, name: "Accident", count: 1, image: "https://via.placeholder.com/150x100?text=Accident" },
        { id: 2, name: "Action", count: 9, image: "https://via.placeholder.com/150x100?text=Action" },
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
        "Animal", "Business", "Dental", "Eye Care", "Fashion", "Food", "Gym", "Health", 
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