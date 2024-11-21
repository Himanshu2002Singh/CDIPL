// src/components/BlogContent.js
import React from "react";
import blog1 from '../../assets/SukhbiriHomes94.jpg';
import './Jware_Airport.css'
import Footer from '../Footer/Footer';


function Blog2Content() {
    const faqs = [
        {
            question: "What types of apartments are available at Sukhbiri Homes Sector 107 Noida?",
            answer: "Sukhbiri Homes offers fully furnished 2BHK, 3BHK, and 4BHK duplex apartments tailored to suit diverse family needs.",
        },
        {
            question: "What amenities does Sukhbiri Homes provide?",
            answer: "The property includes a 45,000 sq. ft. clubhouse, a 6,000 sq. ft. park area, a swimming pool,and modern fitness centers, among other facilities.",
        },
        {
            question: "Where is Sukhbiri Homes located?",
            answer: "Sukhbiri Homes is situated in the prime locality of Sector 107, Noida, offering excellent connectivity to schools, hospitals, and entertainment hubs.",
        },
        {
            question: "Are the apartments at Sukhbiri Homes fully furnished?",
            answer: "Yes, all apartments at Sukhbiri Homes come fully furnished, complete with premium furniture, modular kitchens, and stylish interiors.",
        },
       
    ];

    return (
        <div>
        <main className="jewar-main-container flex flex-col md:flex-row">
            <article className="jewar-blog-content p-4 md:w-2/3">
                <img src={blog1} alt="Noida International Airport" className="jewar-img w-full h-auto mb-4 rounded" />
                <h2 className="jewar-title text-2xl font-bold mb-4">
                Sukhbiri Homes, Sector 107 Noida – Where Luxury Meets Comfort!

                </h2>

                <p className="jewar-paragraph">
                When it comes to finding the perfect home, the search often feels endless. But what if there was a place that ticked every box on your wish list—a place where luxury meets comfort and
                every day feels like a vacation? Welcome to <strong> Sukhbiri Homes Sector 107 Noida </strong>, a residential paradise crafted to bring your dreams to life.      </p>

                <h3 className="jewar-heading text-xl font-semibold mt-4">A Lifestyle Beyond Compare </h3>
                <p className="jewar-paragraph">
                At Sukhbiri Homes, you don’t just buy a house; you embrace a lifestyle that redefines modern living. The property offers <strong>fully furnished 2BHK, 3BHK, and 4BHK duplex
                apartments </strong>  designed with precision and elegance. Whether you're starting a family or seeking an upgrade, there's a space tailored for every need.
                </p>

                <h3 className="jewar-heading text-xl font-semibold mt-4">Why Choose Sukhbiri Homes?  </h3>
                <ul>
                    <li>
                        <h5><strong>1. Prime Location in Sector 107, Noida</strong></h5>
                        <p>
                        Located in the heart of Noida, Sukhbiri Homes ensures you're never too far from essential services, educational institutions, healthcare facilities, and entertainment hubs. It's where
                            convenience meets connectivity.
                        </p>

                    </li>
                    <li>
                        <h5><strong>2. World-Class Amenities</strong></h5>
                        <p>
                        Sukhbiri Homes is more than just an apartment complex—it’s a vibrant community. Here’s
what you can look forward to:
<ul>
    <li>
 A <strong>clubhouse sprawling over 45,000 sq. ft.</strong> , perfect for hosting events or unwinding
after a long day.</li>
<li> A beautifully landscaped<strong> park area of 6,000 sq. ft.</strong> , providing serene green spaces
for morning walks and evening leisure.</li>
<li>
A luxurious<strong> swimming pool,</strong>  ideal for relaxation or a fun family splash.</li>
<li> State-of-the-art fitness centers, children's play areas, and much more.</li>
</ul>
                        </p>
                    </li>
                </ul>
                

                <h3 className="jewar-heading text-xl font-semibold mt-4">Affordable Luxury: Fully Furnished Apartments in Noida for Sale  </h3>
                <p className="jewar-paragraph">
                Owning a luxury apartment in Noida is no longer a dream. At Sukhbiri Homes, you get the perfect balance of affordability and opulence. Whether you’re looking for a <strong>2BHK apartment for sale </strong>  or upgrading to a duplex, every option is curated to fit your aspirations                </p>

                <h3 className="jewar-heading text-xl font-semibold mt-4">Your Future Awaits at Sukhbiri Homes Noida</h3>
                <p className="jewar-paragraph">
                Imagine waking up every day to a home that feels like a retreat. With luxurious interiors, premium amenities, and a welcoming community, <strong>Sukhbiri Homes Sector 107 Noida </strong>  is where your story begins. Don’t wait to turn your dream into reality.
                </p>
               

               

                <h3 className="jewar-heading text-xl font-semibold mt-4">Conclusion</h3>
                <p className="jewar-paragraph">
                Sukhbiri Homes isn’t just a place to live—it’s a promise of a better tomorrow. Whether you’re searching for a fully furnished apartment or a duplex with all the bells and whistles, this is where you’ll find your forever home. Your dream life is waiting, so why wait to claim it?
                </p>
            </article>

            <section className="jewar-faq-section mt-8 p-4 bg-gray-100 rounded">
                <h2 className="jewar-faq-title text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div key={index} className="jewar-faq-item mb-4">
                        <h3 className="jewar-faq-question text-lg font-semibold">{faq.question}</h3>
                        <p className="jewar-faq-answer text-gray-700">{faq.answer}</p>
                    </div>
                ))}
            </section>
        </main>
        <Footer/>
        </div>
    );
}

export default Blog2Content;
