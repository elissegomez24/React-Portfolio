import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <h1 className="logo">Elisse Gomez</h1> 
            <nav className="navbar" aria-label="Main Navigation">
                {/* Replace anchor tags with Link components for routing */}
                <Link to="/about" className="nav-link active" aria-current="page">
                    About Me
                </Link>
                <Link to="/portfolio" className="nav-link">
                    Portfolio
                </Link>
                <Link to="/contact" className="nav-link">
                    Contact Me
                </Link>
                <Link to="/resume" className="nav-link">
                    Resume
                </Link>
            </nav>
        </header>
    );
}