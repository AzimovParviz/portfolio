import React from "react";
import '../App.css'

function Home() {
    return (
        <div className="homepage">
            <div id="skills">
                <h2 style={{ fontWeight: 'bold' }}>Parviz Azimov</h2>
                <h4>Fullstack developer</h4>
                <article>
                    <p>React+Bootstrap</p>
                    <p>Node.js/.NET</p>
                    <p>SQL</p>
                    <p>Python</p>
                </article>
                <hr></hr>
                <div id="skills-details">
                    <article>
                        <p>Hooks, state management, frontend styling</p>
                        <p>Express.js, APIs</p>
                        <p>Database administration, Entity Framework</p>
                        <p>Workplace automation, webscraping</p>
                    </article>
                </div>
            </div>
            <img id="avatar" src="/pfp.png" width={'30%'} height={'30%'} />
        </div>
    )
}

export default Home