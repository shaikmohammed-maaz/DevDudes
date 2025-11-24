import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

const About = () => {
    const stats = [
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
        { number: '5+', label: 'Years Experience' },
        { number: '100%', label: 'Client Satisfaction' }
    ];

    const values = [
        {
            icon: '🎯',
            title: 'Quality First',
            description: 'We never compromise on quality. Every line of code, every design element is crafted with precision and care.'
        },
        {
            icon: '⚡',
            title: 'Fast Delivery',
            description: 'Time is valuable. We deliver projects on schedule without sacrificing quality or attention to detail.'
        },
        {
            icon: '🤝',
            title: 'Client Partnership',
            description: 'We view our clients as partners. Your success is our success, and we\'re committed to your growth.'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'We stay ahead of the curve, using cutting-edge technologies to build future-proof solutions.'
        }
    ];

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            emoji: '👩‍💼'
        },
        {
            name: 'Michael Chen',
            role: 'Lead Developer',
            emoji: '👨‍💻'
        },
        {
            name: 'Emily Rodriguez',
            role: 'UI/UX Designer',
            emoji: '👩‍🎨'
        },
        {
            name: 'David Kim',
            role: 'Project Manager',
            emoji: '👨‍💼'
        }
    ];

    return (
        <div className="about-page">
            {/* Header */}
            <section className="about-header">
                <div className="container">
                    <AnimatedSection>
                        <h1>About DevAgency</h1>
                        <p className="header-subtitle">
                            We're a passionate team of developers, designers, and innovators dedicated
                            to building exceptional digital products that make a difference.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section mission-section">
                <div className="container">
                    <div className="mission-content">
                        <AnimatedSection>
                            <div className="mission-text">
                                <h2>Our Mission</h2>
                                <p>
                                    At DevAgency, we believe that great software can transform businesses and
                                    change lives. Our mission is to empower entrepreneurs and businesses with
                                    digital products that are not just functional, but exceptional.
                                </p>
                                <p>
                                    We combine technical expertise with creative thinking to deliver solutions
                                    that exceed expectations. Every project is an opportunity to push boundaries
                                    and create something remarkable.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="stats-grid">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="stat-card"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="stat-number">{stat.number}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section values-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="text-center">Our Values</h2>
                        <p className="text-center text-light section-subtitle">
                            These core principles guide everything we do and shape how we work with our clients.
                        </p>
                    </AnimatedSection>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="value-card">
                                    <div className="value-icon">{value.icon}</div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section team-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="text-center">Meet Our Team</h2>
                        <p className="text-center text-light section-subtitle">
                            The talented people behind DevAgency who make the magic happen.
                        </p>
                    </AnimatedSection>

                    <div className="team-grid">
                        {team.map((member, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <motion.div
                                    className="team-card"
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="team-avatar">{member.emoji}</div>
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <div className="container">
                    <AnimatedSection>
                        <div className="about-cta-content">
                            <h2>Ready to work with us?</h2>
                            <p>
                                Let's create something amazing together. Get in touch and let's discuss
                                how we can help bring your vision to life.
                            </p>
                            <Link to="/contact" className="btn btn-accent">
                                Start Your Project
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default About;
