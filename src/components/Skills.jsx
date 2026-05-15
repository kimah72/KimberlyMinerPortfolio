import "./Skills.css";

// src/components/Skills.jsx
// This component renders the skills section of the portfolio
// Skills are organized into categories and displayed as tags

const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "C#", "HTML5", "CSS3", "SQL"],
    frameworks: ["React", "Angular", ".NET Core", "Node.js", "Express", "Bootstrap"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server", "DynamoDB"],
    tools: ["Git", "GitHub", "AWS", "Postman", "Jira", "Visual Studio", "VS Code", "JetBrains Rider"],
    concepts: ["RESTful APIs", "CI/CD", "Role-Based Auth", "Responsive Design", "Agile"]
}

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            {/* Data driven approach */}
            {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                    <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <div className="skill-tags">
                        {items.map((skill) => (
                            <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}

        </section>
    )
}

export default Skills;