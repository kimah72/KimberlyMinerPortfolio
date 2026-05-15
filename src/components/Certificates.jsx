import "./Certificates.css";

const certificates = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "April 6, 2026",
        credlyId: "b9c55e2b-9535-4c4c-a57f-c1fc4a6f94ab",
        verify: "https://www.credly.com/badges/b9c55e2b-9535-4c4c-a57f-c1fc4a6f94ab"
    },
    {
        title: "Full Stack Web Development",
        issuer: "Brigham Young University — Idaho",
        date: "December 17, 2025",
        verify: null
    },
    {
        title: "Web Development",
        issuer: "Brigham Young University — Idaho",
        date: "December 17, 2025",
        verify: null
    },
    {
        title: "Web and Computer Programming",
        issuer: "Brigham Young University — Idaho",
        date: "December 18, 2024",
        verify: null
    }
]

function Certificates() {
    return (
        <section id="certificates">
            <h2>Certificates</h2>
            {certificates.map((cert, index) => (
                <div key={index} className="cert-card">
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                    <p><em>{cert.date}</em></p>
                    {cert.verify && (
                        <a href={cert.verify} target="_blank" rel="noopener noreferrer">
                            Verify on Credly
                        </a>
                    )}
                </div>
            ))}
        </section>
    )
}

export default Certificates;