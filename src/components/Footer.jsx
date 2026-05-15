import "./Footer.css";

function Footer() {
    return (
        <footer id="footer">
            <p>Kimberly Miner &copy; {new Date().getFullYear()}</p>
            <ul>
                <li>
                    <a href="https://github.com/kimah72" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/kimberly-miner" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;