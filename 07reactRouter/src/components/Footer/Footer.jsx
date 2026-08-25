import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <Link to="/" className="logo-link">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="logo"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="footer-grid">
                        <div>
                            <h2 className="footer-heading">Resources</h2>
                            <ul className="footer-list">
                                <li><Link to="/" className="footer-link">Home</Link></li>
                                <li><Link to="/about" className="footer-link">About</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="footer-heading">Follow us</h2>
                            <ul className="footer-list">
                                <li><a href="https://github.com/hiteshchoudhary" target="_blank" rel="noreferrer" className="footer-link">Github</a></li>
                                <li><Link to="/" className="footer-link">Discord</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="footer-heading">Legal</h2>
                            <ul className="footer-list">
                                <li><Link to="#" className="footer-link">Privacy Policy</Link></li>
                                <li><Link to="#" className="footer-link">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="footer-divider" />
                <div className="footer-bottom">
                    <span className="footer-copy">
                        © 2023 <a href="https://hiteshchoudhary.com/" className="footer-link">hiteshchoudhary</a>. All Rights Reserved.
                    </span>
                    <div className="footer-social">
                        <Link to="#" className="social-icon">FB</Link>
                        <Link to="#" className="social-icon">Discord</Link>
                        <Link to="#" className="social-icon">Twitter</Link>
                        <Link to="#" className="social-icon">GitHub</Link>
                        <Link to="#" className="social-icon">Dribbble</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
