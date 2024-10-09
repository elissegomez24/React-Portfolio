import { NavLink } from 'react-router-dom';

function NavTabs() {
    return (
        <header className="header">
            <h1 className="logo">Elisse Gomez</h1>
            <nav className="navbar" aria-label="Main Navigation">
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    About Me
                </NavLink>
                <NavLink 
                    to="/portfolio" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Portfolio
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Contact Me
                </NavLink>
                <NavLink 
                    to="/resume" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Resume
                </NavLink>
            </nav>
        </header>
    );
}

export default NavTabs;
