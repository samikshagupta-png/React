import { Link, NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-container">
                    <Link to="/" className="logo-link">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="logo"
                            alt="Logo"
                        />
                    </Link>
                    <div className="nav-actions">
                        <Link to="#" className="login-btn">
                            Log in
                        </Link>
                        <Link to="#" className="start-btn">
                            Get started
                        </Link>
                    </div>
                    <div className="nav-menu" id="mobile-menu-2">
                        <ul className="menu-list">
                            <li>
                                <NavLink to="/" className="menu-item">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="menu-item">
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="menu-item">
                                    contact us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
