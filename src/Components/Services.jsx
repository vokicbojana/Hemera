import React from "react";

import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <h1 className="page-title">Our Services</h1>

            <div className="service-card counseling">
                <h2>Counseling Sessions</h2>
                <p>
                    Our experienced psychologists offer one-on-one counseling sessions tailored to your specific needs.
                    Whether you're dealing with stress, anxiety, or other challenges, our counselors are here to provide
                    support and guidance in a confidential and empathetic environment.</p>
            </div>

            <div className="service-card workshops">
                <h2>Therapeutic Workshops</h2>
                <p>Join our group workshops designed to explore and develop coping strategies in a supportive and collaborative
                    environment. Led by our skilled therapists, these workshops cover various topics, providing practical tools
                    to enhance your mental well-being and resilience.</p>
            </div>

            <div className="service-card online-therapy">
                <h2>Online Therapy</h2>
                <p>Connect with our experienced therapists from the comfort of your home through secure online therapy sessions.
                    Whether you're located remotely or prefer the convenience of virtual sessions, our online therapy services
                    offer the same level of professional and personalized care as in-person sessions.</p>
            </div>

            {/* Add more service cards as needed */}

        </div>
    );
}

export default Services;