// src/components/BlogContent.js
import React from "react";
import blog1 from '../../assets/hq720.jpg';
import './Jware_Airport.css'
import Footer from '../Footer/Footer';


function BlogContent() {
    const faqs = [
        {
            question: "What is the expected timeline for the completion of Jewar International Airport?",
            answer: "The first phase of the airport is set to be completed by 2024, with future phases planned for further expansion.",
        },
        {
            question: "Which airlines will be testing the runway?",
            answer: "IndiGo and Akasa Airlines are currently involved in landing tests at Jewar International Airport.",
        },
        {
            question: "How many aircraft will undergo landing tests at the airport?",
            answer: "A total of 90 aircraft will undergo landing tests from November 15 to December 15, 2024.",
        },
        {
            question: "What will be the first flight services at Jewar Airport?",
            answer: "On the first day, 30 airlines will operate, including 25 domestic flights, 3 international flights, and 2 cargo flights.",
        },
        {
            question: "How will Noida benefit from the new airport?",
            answer: "The airport will enhance Noida's connectivity, bring in more business, tourism, and investment, and boost the local economy.",
        },
    ];

    return (
        <div>
        <main className="jewar-main-container flex flex-col md:flex-row">
            <article className="jewar-blog-content p-4 md:w-2/3">
                <img src={blog1} alt="Noida International Airport" className="jewar-img w-full h-auto mb-4 rounded" />
                <h2 className="jewar-title text-2xl font-bold mb-4">
                    Jewar Noida International Airport Takes Flight: A Milestone for Noida's Growth and Connectivity
                </h2>

                <p className="jewar-paragraph">
                    The long-awaited Noida International Airport, located in Jewar, is poised to transform the region’s aviation landscape. With the airport preparing for its first commercial flights, there are major milestones being celebrated, signaling a promising future for Noida and the entire NCR (National Capital Region).
                </p>

                <h3 className="jewar-heading text-xl font-semibold mt-4">Testing Phase Begins: Landing Tests for 90 Aircraft</h3>
                <p className="jewar-paragraph">
                    Starting from November 15, 2024, a crucial phase of testing will kick off at the Jewar International Airport. Over the next month, a total of <strong>90 aircraft</strong> will undergo landing tests. These tests will be conducted every day from <strong> November 15 to December 15, 2024</strong>, ensuring that the runway meets international safety and operational standards. As part of this test phase, <strong>IndiGo and Akasa </strong>Airlines will be among the carriers involved in the trials, reflecting the growing readiness of the airport for commercial use.
                </p>

                <h3 className="jewar-heading text-xl font-semibold mt-4">Phase One Development: A Giant Leap for Noida's Aviation Hub</h3>
                <p className="jewar-paragraph">
                    The first phase of <strong> Jewar Noida International Airport </strong> is being developed over an expansive <strong>1334 hectares</strong> of land.<strong> This massive development includes the construction of a state-of-the-art 3900-meter runway</strong>, a modern <strong>terminal building </strong>, and a <strong>Control Tower (ATC)</strong>. These facilities are designed to accommodate a variety of aircraft and ensure seamless operations, catering to both domestic and international flights. The scale of this project reflects the ambition behind this airport, which is set to become a major hub in North India.
                </p>

                <h3 className="jewar-heading text-xl font-semibold mt-4">A Strong Start: 30 Airlines on Day One</h3>
                <p className="jewar-paragraph">
                    On the first day of operation, the <strong>Noida International Airport</strong>  is expected to witness the launch of services by <strong>30 airlines</strong> , which will include both <strong>domestic and international flights </strong> . Of these, <storong>25 domestic flights, 3 international flights, and 2 cargo flights </storong>are expected to take off, marking the airport’s entry into the global aviation scene. This broad spectrum of flights reflects the airport's ability to cater to a diverse range of passengers, from business travelers to tourists, while also supporting the logistics and cargo sector.
                </p>

                <h3 className="jewar-heading text-xl font-semibold mt-4">Impact on Noida and NCR’s Connectivity</h3>
                <p className="jewar-paragraph">
                    The operationalization of Jewar International Airport will significantly enhance the connectivity of Noida with both domestic and international destinations. With Noida being a rapidly growing economic hub, this airport is expected to bring in tremendous growth opportunities, especially in sectors like tourism, real estate, and business. The increase in direct flights to global destinations will make Noida even more attractive to international investors and tourists.
                </p>
                <p className="jewar-paragraph">
                    Moreover, the airport's strategic location will make it easily accessible to residents of Greater Noida, Agra, and other parts of Uttar Pradesh. The anticipated increase in air traffic is also expected to stimulate job creation and economic development, benefiting the region’s economy in the long run.
                </p>

                <h3 className="jewar-heading text-xl font-semibold mt-4">A Vision for the Future</h3>
                <p className="jewar-paragraph">
                   <strong>Jewar International Airport </strong>  is not just a transportation hub but a symbol of the region’s ambition to become a global player in the aviation industry. With plans for further expansion in the coming years, the airport will play a vital role in enhancing Noida's status as a key player in India's growth story.
                </p>
                <p className="jewar-paragraph">
                    As we await the official takeoff, the <strong>Jewar Noida International Airport </strong> is already setting the stage for a promising future, offering unparalleled connectivity and becoming an essential catalyst for economic development in the region.
                </p>

                <h3 className="jewar-heading text-xl font-semibold mt-4">Conclusion</h3>
                <p className="jewar-paragraph">
                    In conclusion, the<strong>Noida International Airport at Jewar </strong> is poised to be a game-changer for Noida, bringing new opportunities for businesses, tourism, and connectivity to the region. The first test flights, the development of modern airport infrastructure, and the large-scale involvement of multiple airlines signal a bright future for this ambitious project. As the airport prepares for its grand opening, it is clear that <strong>Jewar Airport </strong> will play a pivotal role in shaping the aviation future of Noida and NCR.
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

export default BlogContent;
