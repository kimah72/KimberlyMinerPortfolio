// Nav.jsx
// The navigation component sits at the top right of the page
// It uses an HTML nav element for semantic structure
// Each link scrolls smoothly to a section on the page using href="#id"

function Nav() {
    return (
        <nav id="main-nav">
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#certificates">Certificates</a></li>
                <li><a href="#contact">Contact</a></li>                
            </ul>
        </nav>
    );
}

// export default makes this component available to other files
export default Nav;