import "./ModuleGrid.css";

// src/components/ModuleGrid.jsx
// This component renders the modules section in a grid layout
// Data is stored in an array of objects - adding a new module
// just means adding a new object to the array

const grid = [
    { title: "SQL Relational Databases - Quiltforge", description: "Designed and implemented a SQL relational database to support the Quiltforge app, including tables for users, projects, fabrics, and inventory management.", tech: ["SQL", "SQLite", "Database Design"], status: "Completed", github: "https://github.com/kimah72/Quiltforge" },
    { title: "Web Apps - Portfolio Site", description: "Built a personal portfolio website using React to showcase projects, skills, and experience. Implemented responsive design and smooth scrolling navigation.", tech: ["React", "CSS", "JavaScript"], status: "In Progress", github: "https://github.com/kimah72/KimberlyMinerPortfolio" },
    { title: "Cloud Databases - Rooted Upright", description: "Coming soon.", tech: ["AWS", "DynamoDB", "Cognito"], status: "Coming Soon", github: null },
    { title: "Mobile App - Rooted Upright", description: "Coming soon.", tech: ["React Native"], status: "Coming Soon", github: null },
    { title: "TypeScript", description: "Coming soon.", tech: ["TypeScript"], status: "Coming Soon", github: null },
    { title: "Self-Chosen Project", description: "Coming soon.", tech: [], status: "Coming Soon", github: null },
];

function ModuleGrid() {
    return (
        <section id="modules">
            <h2>Modules</h2>
            <div className="module-grid">
                {grid.map((module, index) => (
                    <div key={index} className="module-card">
                        <h3>{module.title}</h3>
                        <p>{module.description}</p>
                        {module.tech.length > 0 && <p className="module-tech">{module.tech.join(" · ")}</p>}
                        {module.github && <a href={module.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                        <p className="module-status">{module.status}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ModuleGrid;