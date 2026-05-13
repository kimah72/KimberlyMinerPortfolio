// Hero.jsx
// This is the first component I built for my portfolio
// A component in React is a reusable piece of UI
// It returns JSX which looks like HTML but is actually JavaScript

function Hero() {
    return (
        <section id="hero">
            <h1>Kimberly Miner</h1>
            <p>Developer. Creator. Perpetual Learner.</p>
        </section>
    );
}

// export default makes this component available to other files
// App.js imports it and renders it on the page
export default Hero;