import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import websiteDevImage from '../assets/website-development.png';
import webAppDevImage from '../assets/web-app-development.png';
import mobileAppDevImage from '../assets/mobile-app-development.png';
import mvpDevImage from '../assets/mvp-development.png';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 'website',
            title: 'Website Development',
            description: 'Create powerful, high-performance websites that help your business grow. We build responsive, SEO-friendly websites that deliver exceptional user experiences and drive real business results.',
            image: websiteDevImage,
            bgColor: '#FFF5ED',
            technologies: 'Next.js, React, Wordpress'
        },
        {
            id: 'webapp',
            title: 'Web Application Development',
            description: 'Build scalable, high-quality web applications tailored to your business needs. Our solutions are robust, secure, and designed to handle complex business logic and high user loads.',
            image: webAppDevImage,
            bgColor: '#1A3A3A',
            technologies: 'Node.js, Python, AWS'
        },
        {
            id: 'mobile',
            title: 'Mobile App Development',
            description: 'Transform your ideas into stunning, user-friendly mobile apps. We create native and cross-platform mobile applications that engage users and provide seamless experiences across all devices.',
            image: mobileAppDevImage,
            bgColor: '#FFE8E8',
            technologies: 'React Native, Flutter, Firebase'
        },
        {
            id: 'mvp',
            title: 'MVP Development',
            description: 'Launch your startup idea faster with a minimum viable product. Get your feedback early and iterate quickly. We help you validate your concept and gather real user feedback efficiently.',
            image: mvpDevImage,
            bgColor: '#FFE5CC',
            technologies: 'Node.js, React, Vercel'
        }
    ];

    const howItWorks = [
        {
            icon: '📋',
            title: 'Share Requirements',
            description: 'Tell us about your project goals, vision, and vision.'
        },
        {
            icon: '💰',
            title: 'Get Quote',
            description: 'We provide a quick and transparent pricing proposal for your project.'
        },
        {
            icon: '⚙️',
            title: 'Development',
            description: 'Our team gets to work, and we keep you updated every step of the way.'
        },
        {
            icon: '🚀',
            title: 'Launch',
            description: 'We deploy your project and provide ongoing support for your success.'
        }
    ];

    return (
        <div className="services-page">
            {/* Header */}
            <section className="services-header">
                <div className="container">
                    <AnimatedSection>
                        <h1>What We Build</h1>
                        <p className="header-subtitle">
                            We transform your ideas into exceptional digital products. Our philosophy is
                            simple: build with passion, precision, and a relentless pursuit of excellence.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section services-detail-section">
                <div className="container">
                    <div className="services-detail-grid">
                        {services.map((service, index) => (
                            <AnimatedSection key={service.id} delay={index * 0.1}>
                                <div className="service-detail-card" id={service.id}>
                                    <div
                                        className="service-detail-image"
                                        style={{ backgroundColor: service.bgColor }}
                                    >
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                    <div className="service-detail-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <div className="service-tech">
                                            <span className="tech-label">Tech Stack:</span>
                                            <span className="tech-list">{service.technologies}</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section how-it-works-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="text-center">How It Works</h2>
                    </AnimatedSection>

                    <div className="how-it-works-grid">
                        {howItWorks.map((step, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="how-it-works-step">
                                    <div className="step-icon">{step.icon}</div>
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta-section">
                <div className="container">
                    <AnimatedSection>
                        <div className="services-cta-content">
                            <h2>Ready to build your next big idea?</h2>
                            <p>
                                Let's talk about how we can bring your vision to life. We're excited to
                                hear about your project and explore how we can help you succeed.
                            </p>
                            <Link to="/contact" className="btn btn-accent">
                                Get a Quote
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Services;
