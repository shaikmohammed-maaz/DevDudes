import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './Pricing.css';

const Pricing = () => {
    const pricingPlans = [
        {
            name: 'Starter',
            price: '$2,999',
            description: 'Perfect for small businesses and startups',
            features: [
                'Responsive Website Design',
                'Up to 5 Pages',
                'Basic SEO Optimization',
                'Contact Form Integration',
                'Mobile Responsive',
                '1 Month Support',
                'Fast Delivery (2-3 weeks)'
            ],
            highlighted: false,
            color: '#6B8CFF'
        },
        {
            name: 'Professional',
            price: '$5,999',
            description: 'Ideal for growing businesses',
            features: [
                'Everything in Starter',
                'Up to 15 Pages',
                'Advanced SEO & Analytics',
                'CMS Integration',
                'E-commerce Functionality',
                'Custom Animations',
                '3 Months Support',
                'Priority Development'
            ],
            highlighted: true,
            color: '#FF7B6D'
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For large-scale applications',
            features: [
                'Everything in Professional',
                'Unlimited Pages',
                'Custom Web Application',
                'Advanced Integrations',
                'Dedicated Team',
                'Performance Optimization',
                '6 Months Support',
                'Ongoing Maintenance'
            ],
            highlighted: false,
            color: '#6B8CFF'
        }
    ];

    return (
        <div className="pricing-page">
            {/* Header */}
            <section className="pricing-header">
                <div className="container">
                    <AnimatedSection>
                        <h1>Simple, Transparent Pricing</h1>
                        <p className="header-subtitle">
                            Choose the perfect plan for your project. All plans include our commitment
                            to quality, timely delivery, and exceptional support.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section pricing-cards-section">
                <div className="container">
                    <div className="pricing-grid">
                        {pricingPlans.map((plan, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <motion.div
                                    className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {plan.highlighted && (
                                        <div className="popular-badge">Most Popular</div>
                                    )}

                                    <div className="pricing-header-content">
                                        <h3>{plan.name}</h3>
                                        <div className="price">{plan.price}</div>
                                        <p className="plan-description">{plan.description}</p>
                                    </div>

                                    <ul className="features-list">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <span className="check-icon">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to="/contact"
                                        className={`btn ${plan.highlighted ? 'btn-accent' : 'btn-primary'} btn-full`}
                                    >
                                        Get Started
                                    </Link>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section faq-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="text-center">Frequently Asked Questions</h2>
                    </AnimatedSection>

                    <div className="faq-grid">
                        <AnimatedSection delay={0.1}>
                            <div className="faq-item">
                                <h4>What's included in the support?</h4>
                                <p>
                                    Our support includes bug fixes, minor updates, and technical assistance.
                                    We're here to ensure your project runs smoothly.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="faq-item">
                                <h4>Can I upgrade my plan later?</h4>
                                <p>
                                    Absolutely! You can upgrade your plan at any time. We'll work with you
                                    to add new features and functionality as your business grows.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div className="faq-item">
                                <h4>Do you offer custom solutions?</h4>
                                <p>
                                    Yes! If none of our plans fit your needs, we can create a custom solution
                                    tailored specifically to your requirements.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.4}>
                            <div className="faq-item">
                                <h4>What's your refund policy?</h4>
                                <p>
                                    We offer a satisfaction guarantee. If you're not happy with our work in
                                    the first 14 days, we'll refund your deposit.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pricing-cta-section">
                <div className="container">
                    <AnimatedSection>
                        <div className="pricing-cta-content">
                            <h2>Still have questions?</h2>
                            <p>
                                Let's discuss your project and find the perfect solution for your needs.
                                Get in touch with us today!
                            </p>
                            <Link to="/contact" className="btn btn-accent">
                                Contact Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
