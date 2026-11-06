import { Link } from 'react-router-dom';
import BrandLogo from '../common/BrandLogo.jsx';

/**
 * Navbar - top bar of the landing page: logo, section links, LOGIN and JOIN buttons.
 * "#about" style links scroll to the section with that id on the same page.
 * LOGIN / JOIN now go to the /login and /register pages.
 */
export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        {/* Shared CampusCode symbol (also used on Register and Login) */}
        <BrandLogo />

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#how-it-works">HOW IT WORKS</a>
          <a href="#arena">HACKATHONS</a>
          <a href="#community">COMMUNITY</a>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="login-btn">LOGIN</Link>
          <Link to="/register" className="get-started-btn">
            JOIN CAMPUSCODE
            <span className="button-arrow">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
