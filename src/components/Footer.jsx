import { useState } from "react";
import "./Footer.css";

function Footer() {
    const [showEaster, setShowEaster] = useState(false);

    return (
        <footer id="footer">
            <p>
                Kimberly Miner &copy;{" "}
                <span
                    className="easter-trigger"
                    onClick={() => setShowEaster(!showEaster)}
                >
                    {new Date().getFullYear()}
                </span>
            </p>

            {showEaster && (
                <div className="easter-egg">
                    <p className="easter-reference">Ether 12:27</p>
                    <p className="easter-text">
                        "And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me; for if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them."
                    </p>
                    <button className="easter-close" onClick={() => setShowEaster(false)}>×</button>
                </div>
            )}

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