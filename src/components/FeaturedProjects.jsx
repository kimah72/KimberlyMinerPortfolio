import "./FeaturedProjects.css";

// FeaturedProjects.jsx
// This component renders the featured projects section
// Data is stored in an array of objects - adding a new project
// just means adding a new object to the array

const projects = [
  {
    title: "time_and_space™",
    description: "A full-stack personal journal with a time capsule feature that unlocks entries by date or registered recipient — currently live and growing.",
    tech: ["React", "Node", "MongoDB", "JWT"],
    github: "https://github.com/kimah72/TimeAndSpace",
    live: "https://kimberlyminer.com",
    status: "Live"
  },
  {
    title: "Quiltforge™",
    description: "A quilting companion app for designing projects, inventorying fabric, and generating cutting and sewing instructions from start to finish.",
    tech: ["Python", "SQLite"],
    github: "https://github.com/kimah72/Quiltforge",
    status: "In Development"
  },
  {
    title: "Rooted Upright™",
    description: "A houseplant care app for collectors — name your plants, track their care, and print personalized care cards.",
    tech: ["React", "AWS", "DynamoDB"],
    status: "Coming Soon"
  }
]

function FeaturedProjects() {
    return (
        <section id="projects">
            <h2>Featured Projects</h2>
            {projects.map((project, index) => (
                <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p><strong>Tech Stack:</strong> {project.tech.join(", ")}</p>
                    {project.github && <p><a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>}
                    {project.live && <p><a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a></p>}
                    <p><em>Status: {project.status}</em></p>
                </div>
            ))}
        </section>
    )
}

export default FeaturedProjects;