import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <span className="logo-icon">📱</span>
                            <span className="logo-text">DevAgency</span>
                        </div>
                        <p className="footer-description">
                            Building exceptional digital products that shine and deliver real value to businesses worldwide.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="/services#website">Website Development</a></li>
                            <li><a href="/services#webapp">Web Applications</a></li>
                            <li><a href="/services#mobile">Mobile Apps</a></li>
                            <li><a href="/services#mvp">MVP Development</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="LinkedIn">💼</a>
                            <a href="#" aria-label="GitHub">💻</a>
                            <a href="#" aria-label="Email">📧</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} DevAgency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
