import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import heroImage from '../assets/hero-illustration.png';
import './Home.css';

const Home = () => {
    const services = [
        {
            icon: '🖥️',
            title: 'Website',
            description: 'Beautiful, responsive websites that help your business grow and establish a strong online presence.'
        },
        {
            icon: '📱',
            title: 'Web Apps',
            description: 'Powerful web applications with seamless user experiences and robust functionality.'
        },
        {
            icon: '📲',
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile apps that engage users and drive business growth.'
        },
        {
            icon: '🚀',
            title: 'MVP',
            description: 'Launch your startup idea quickly with a minimum viable product that validates your concept.'
        }
    ];

    const whyChooseUs = [
        {
            icon: '⚡',
            title: 'Affordable',
            description: 'Top-tier development services at competitive prices that fit your budget.'
        },
        {
            icon: '🚚',
            title: 'Fast Delivery',
            description: 'Quick turnaround times without compromising on quality or attention to detail.'
        },
        {
            icon: '👥',
            title: 'Expert Team',
            description: 'A dedicated team of experienced developers committed to your success.'
        }
    ];

    const techStack = ['React', 'TypeScript', 'SQL/NoSQL', 'Figma'];

    const process = [
        {
            icon: '🔍',
            number: '1',
            title: 'Discover',
            description: 'We dive deep into your project goals and vision to understand your needs.'
        },
        {
            icon: '🛠️',
            number: '2',
            title: 'Build',
            description: 'Our expert team brings your vision to life with cutting-edge technology.'
        },
        {
            icon: '👁️',
            number: '3',
            title: 'Review',
            description: 'We ensure everything meets your expectations through rigorous testing.'
        },
        {
            icon: '🚀',
            number: '4',
            title: 'Launch',
            description: 'Your product goes live and we provide ongoing support for success.'
        }
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <motion.div
                            className="hero-text"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>We Build Digital Products That Shine</h1>
                            <p>
                                From innovative ideas to reality, we transform your vision into exceptional
                                digital products that drive business growth and delight users.
                            </p>
                            <Link to="/contact" className="btn btn-primary">
                                Get Free Quote
                            </Link>
                        </motion.div>

                        <motion.div
                            className="hero-image"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <img
                                src={heroImage}
                                alt="Team collaboration"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="text-center">Our Services</h2>
                    </AnimatedSection>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="service-card">
                                    <div className="service-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section why-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="text-center">Why Choose Us?</h2>
                        <p className="text-center text-light section-subtitle">
                            We combine deep expertise with a passion for innovation to deliver exceptional results.
                        </p>
                    </AnimatedSection>

                    <div className="why-grid">
                        {whyChooseUs.map((item, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="why-card">
                                    <div className="why-icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="section tech-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="text-center">Our Tech Stack</h2>
                        <p className="text-center text-light section-subtitle">
                            We use modern, reliable technologies to build fast and scalable products for the web.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="tech-stack">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className="tech-item"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Process Section */}
            <section className="section process-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="text-center">Our Simple, Effective Process</h2>
                        <p className="text-center text-light section-subtitle">
                            We follow a proven methodology to ensure your project is delivered on time and exceeds expectations.
                        </p>
                    </AnimatedSection>

                    <div className="process-grid">
                        {process.map((step, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="process-step">
                                    <div className="process-icon">{step.icon}</div>
                                    <div className="process-number">{step.number}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <AnimatedSection>
                        <div className="cta-content">
                            <h2>Ready to Start Your Project?</h2>
                            <p>
                                Let's discuss your ideas. Drop us a line and we'll get back to you ASAP.
                                We're excited to hear about your vision and explore how we can help you succeed.
                            </p>
                            <Link to="/contact" className="btn btn-accent">
                                Request Your Free Quote
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Home;
