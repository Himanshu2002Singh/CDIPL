import React, { useState, useEffect } from 'react';
import { FaPhone, FaSearch, FaFacebookF, FaInstagram, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // For page detection
import './Header.css';
import log2 from '../../assets/cdiplogo.png'; // Sticky logo
import log1 from '../../assets/cdipl.png'; // Transparent logo

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
    const [isInquiryPopupOpen, setIsInquiryPopupOpen] = useState(false);

    const location = useLocation(); // Get the current page URL

    // Detect if it's the Home page
    const isHomePage = location.pathname === '/';

    // Handle scroll event for sticky behavior (only for the Home page)
    useEffect(() => {
        if (isHomePage) {
            const handleScroll = () => {
                setIsSticky(window.scrollY > 0); // Make sticky on scroll
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            setIsSticky(true); // Always sticky for other pages
        }
    }, [isHomePage]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSearchPopup = () => {
        setIsSearchPopupOpen(!isSearchPopupOpen);
    };

    const toggleInquiryPopup = () => {
        setIsInquiryPopupOpen(!isInquiryPopupOpen);
    };

    return (
        <>
            {/* Navbar area */}
            <header className={`navbar-area ${isSticky ? 'sticky' : ''} ${isHomePage ? 'transparent-header' : 'solid-header'}`}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        {/* Left side: Logo */}
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="navbar-logo">
                                <a href="/">
                                    <img src={isSticky ? log2 : log1} alt="CDIPL Logo" className="logo" />
                                </a>
                            </div>
                        </div>

                        {/* Center: Desktop Navigation Menu */}
                        <div className="col-lg-6 col-md-6 d-none d-md-block">
                            <nav className="navbar-menu">
                                <ul className="menu-list">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/About-Us">About Us</a></li>
                                    <li><a href="/property">Projects</a></li>
                                    <li><a href="/Contact-Us">Contact</a></li>
                                </ul>
                            </nav>
                        </div>

                        {/* Right side: Search, Call, and Hamburger Icon */}
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="navbar-actions d-flex justify-content-end align-items-center">
                                <FaSearch className="mobile-search-icon" onClick={toggleSearchPopup} />
                                <button className="search-property-button" onClick={toggleInquiryPopup}>
                                    Inquiry
                                </button>
                                <FaBars className="hamburger-icon d-block d-lg-none" onClick={toggleMobileMenu} />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                            <div className="mobile-menu-header">
                                <FaTimes className="close-icon" onClick={toggleMobileMenu} />
                                <a href="/" className="logo" style={{width:'90%'}}>
                                    <img src={log2} alt="CDIPL Logo" />
                                </a>
                            </div>
                            <nav className="mobile-nav">
                                <ul className="mobile-menu-list">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/About-Us">About Us</a></li>
                                    <li><a href="/property">Projects</a></li>
                                    <li><a href="/Contact-Us">Contact</a></li>
                                    <li>
                                        <button className="search-property-button" onClick={toggleInquiryPopup}>
                                            Inquiry
                                        </button>
                                    </li>
                                </ul>

                                {/* Contact Info in Mobile Menu */}
                                <div className="">
                                    <p>B-84, Sector 2, Noida 201301</p>
                                    <p>Email: contourdirectindia@gmail.com</p>
                                    <p>Phone: +91 9266-768-043</p>
                                </div>

                                {/* Social Media Links */}
                                <div className="mobile-social-media-links">
                                    <a href="https://www.facebook.com/contourdirectindia/"><FaFacebookF /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="https://www.linkedin.com/company/contour-direct-india/"><FaLinkedinIn /></a>
                                </div>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Search Popup */}
            {isSearchPopupOpen && (
                <div className="popup-screen">
                    <div className="popup-content">
                        <h2>Search Property</h2>
                        <form>
                            <input type="text" placeholder="Property Name or Location" />
                            <button type="submit">Submit</button>
                        </form>
                        <button className="close-popup" onClick={toggleSearchPopup}>Close</button>
                    </div>
                </div>
            )}

            {/* Inquiry Popup */}
            {isInquiryPopupOpen && (
                <div className="popup-screen">
                    <div className="popup-content">
                        <h2>Inquiry Form</h2>
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" required></textarea>
                            <button type="submit">Submit</button>
                        </form>
                        <button className="close-popup" onClick={toggleInquiryPopup}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
