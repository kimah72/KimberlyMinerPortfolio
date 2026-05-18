import { useState } from "react";
import "./Nav.css";

// Nav.jsx
// The navigation component sits at the top right of the page
// It uses an HTML nav element for semantic structure
// Each link scrolls smoothly to a section on the page using href="#id"

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav id="main-nav">
            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={menuOpen ? "nav-links" : "nav-links hidden"}>
                <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
                <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
                <li><a href="#certificates" onClick={handleLinkClick}>Certificates</a></li>
                <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            </ul>
        </nav>
    );
}

// export default makes this component available to other files
export default Nav;