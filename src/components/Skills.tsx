import React from "react";

function Skills() {
    return(
        <div id="skills">
                <h2 style={{ fontWeight: 'bold' }}>Parviz Azimov</h2>
                <h4>Fullstack developer</h4>
                <article>
                    <p>React + Material-UI</p>
		    <p>Node.js/ASP.NET Core 6</p>
                    <p>SQL</p>
                    <p>Python</p>
                </article>
                <hr></hr>
                <div id="skills-details">
                    <article>
                        <p>Hooks, state management (Redux), frontend styling(SCSS)</p>
                        <p>Express.js, API design and testing</p>
                        <p>Database administration, Entity Framework</p>
                        <p>Workplace automation, webscraping</p>
                    </article>
                </div>
            </div>
    )
}

export default Skills;
