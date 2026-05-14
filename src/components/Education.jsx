function Education() {
    return (
        <section id="education">
            <h2>Education</h2>

            <div className="education-item">
                <h3>BYU-Idaho</h3>
                <p><strong>B.S. Software Development</strong> — Expected Spring 2027</p>
                <p>Fully online while working full-time. Coursework spans full-stack development, cloud computing, databases, software testing, and mobile development.</p>
            </div>

            <div className="education-item">
                <h3>Relevant Coursework</h3>
                <ul>
                    <li>Software Testing — pytest, Selenium, GitHub Actions, CI/CD</li>
                    <li>Cloud Foundations — AWS (EC2, Lambda, S3, DynamoDB, Cognito)</li>
                    <li>Database Management — MySQL, PostgreSQL, Microsoft SQL Server, relational design</li>
                    <li>Full-Stack Web Development — React, Angular, Node.js, REST APIs, Javascript</li>
                    <li>Web Apps — CSS, responsive design, component architecture</li>
                </ul>
            </div>

            <div className="education-item">
                <h3>Self-Taught</h3>
                <p>Started building on the web before formal education existed for it — hand-coding HTML on GeoCities in the late 90s. From there I spent five years as an administrator for a vBulletin forum community, managing the back end, troubleshooting, and keeping things running long before I had words for what I was actually doing. The foundation was curiosity. Everything since has been building on that.</p>
            </div>

        </section>
    )
}

export default Education;