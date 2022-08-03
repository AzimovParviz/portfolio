import React from "react";

function Skills() {
    return(
        <div id="skills">
                <h2 style={{ fontWeight: 'bold' }}>Parviz Azimov</h2>
                <h4>Fullstack developer</h4>
                <article data-aos="fade-down">
                    <p>React+Bootstrap</p>
                    <p>Node.js/.NET</p>
                    <p>SQL</p>
                    <p>Python</p>
                </article>
                <hr></hr>
                <div id="skills-details" data-aos="fade-up">
                    <article>
                        <p>Hooks, state management, frontend styling</p>
                        <p>Express.js, APIs</p>
                        <p>Database administration, Entity Framework</p>
                        <p>Workplace automation, webscraping</p>
                    </article>
                </div>
            </div>
    )
}

export default Skills;