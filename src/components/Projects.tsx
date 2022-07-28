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
        description: 'web application for managing personnel and providing education to new and returning employees in the intranet',
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
    }
]

function Projects() {
    return (
        <div className="projects">
            <div className="flex-container">
                {projects.map(pr =>
                    <Card key={pr.id} className="card">
                        <Card.Body>
                            <Card.Title>{pr.title}</Card.Title>
                            <Card.Subtitle>{pr.tech}</Card.Subtitle>
                            <Card.Text>
                                {pr.description}
                            </Card.Text>
                            {pr.url && <Card.Link href={pr.url}>Source code</Card.Link>}
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default Projects;