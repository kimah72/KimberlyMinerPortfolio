import "./Hero.css";

// Hero.jsx
// This is the first component I built for my portfolio
// A component in React is a reusable piece of UI
// It returns JSX which looks like HTML but is actually JavaScript

function Hero() {
    return (
        <section id="hero">
            <div className="hero-content">
                <h1>Kimberly Miner</h1>
                <p className="hero-tagline">Developer. Creator. Perpetual Learner.</p>
            </div>
            <div className="hero-graphic">
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="200,30 370,370 30,370" fill="none" stroke="#B8F0D8" strokeWidth="1.5" opacity="0.6"/>
                    <polygon points="200,80 320,330 80,330" fill="none" stroke="#B8F0D8" strokeWidth="1" opacity="0.4"/>
                    <polygon points="200,130 270,290 130,290" fill="none" stroke="#B8F0D8" strokeWidth="0.8" opacity="0.3"/>
                    <circle cx="200" cy="200" r="60" fill="none" stroke="#B8F0D8" strokeWidth="1" opacity="0.5"/>
                    <circle cx="200" cy="200" r="30" fill="#B8F0D8" opacity="0.1"/>
                    <line x1="200" y1="0" x2="200" y2="400" stroke="#B8F0D8" strokeWidth="0.5" opacity="0.2"/>
                    <line x1="0" y1="200" x2="400" y2="200" stroke="#B8F0D8" strokeWidth="0.5" opacity="0.2"/>
                </svg>
            </div>
        </section>
    );
}

// export default makes this component available to other files
// App.js imports it and renders it on the page
export default Hero;