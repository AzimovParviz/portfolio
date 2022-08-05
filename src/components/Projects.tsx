import React from "react";
import { Card } from 'react-bootstrap';

type project = {
    readonly id: number,
    title: string,
    description: string,
    url: string,
    tech: string,
}

const projects: project[] = [
    {
        id: 0,
        title: 'HR management and new hire training web application',
        description: 'web application for managing personnel and providing education to new and returning employees in the intranet. No source code due to NDA',
        url: '',
        tech: '.NET Core 3, Microsoft SQL, Razor Pages, JavaScript, CSS'
    },

    {
        id: 1,
        title: 'ASP.NET 6 minimal web API with PostgreSQL db',
        description: 'practice project to get familiar with ASP.NET 6 and integration of PostgreSQL into Entity Framework. A backend for an TODO application',
        url: 'https://github.com/AzimovParviz/todobackend',
        tech: 'ASP.NET 6, PostgreSQL'
    },

    {
        id: 2,
        title: 'boorupaper',
        description: 'CLI app to quickly update your wallpaper using image aggregator gelbooru.com, for that command line efficiency and simplicity',
        url: 'https://github.com/AzimovParviz/boorupaper',
        tech: 'Python 3'
    },
    {
        id: 3,
        title: 'holodex-cli',
        description: 'Access holodex.net API from your command line and get a feed of currently live or upcoming streams with variety of filtering options',
        url: 'https://github.com/AzimovParviz/holodex-cli',
        tech: 'Python 3'
    },
    {
        id: 4,
        title: 'Portfolio website (you are here)',
        description: 'Simple portfolio website that tells about my skills, projects and experiences',
        url: 'https://github.com/AzimovParviz/portfolio',
        tech: 'React, TypeScript'
    }
]

function Projects() {
    return (
        <div className="projects">
            <div className="flex-container">
                {projects.map(pr =>
                    <Card key={pr.id} className="card" style={{color: 'brown',backgroundColor: '#FADBD8'}}>
                        <Card.Body>
                            <Card.Title style={{fontWeight: 'bold'}}>{pr.title}<hr></hr></Card.Title>
                            <Card.Subtitle style={{fontStyle: 'italic'}}>{pr.tech}</Card.Subtitle>
                            <Card.Text>
                                <hr></hr>
                                {pr.description}
                            </Card.Text>
                            {pr.url && <Card.Link href={pr.url} target='_blank'>Source code</Card.Link>}
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default Projects;