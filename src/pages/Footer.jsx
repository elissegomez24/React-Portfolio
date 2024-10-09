import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        // Footer Design
        <footer className="footer">
            <div className="social-media">
                <a href="https://www.linkedin.com/in/elissegomez/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-linkedin-square"></i>
                </a>
                <a href="https://github.com/elissegomez24" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.instagram.com/lissieeegxo/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-instagram"></i>
                </a>
            </div>
            <div className="footer-text">
                <p>Copyright &copy; 2024 Made By Elisse | All Rights Reserved.</p>
            </div>
            <div className="footer-iconTop">
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    aria-label="Back to About Me"
                >
                    <i className="bx bx-up-arrow-alt"></i>
                </NavLink>
            </div>
        </footer>
    );
}
