import { Card } from "react-bootstrap";
import {project} from "../types";

const projects: project[] = [
  {
    id: 0,
    title: "Full stack library application",
    description:
      "A fullstack app with OAuth2 using React, TypeScript and Node.JS. A library where you can browse, return and borrow books. Also includes an admin panel",
    url: "https://github.com/AzimovParviz/fullstack-library-app",
    tech: "React, TypeScript, Node.js, Redux-toolkit, Mongoose, Passport",
  },
  {
    id: 1,
    title: "ASP.NET 6 minimal web API with PostgreSQL db",
    description:
      "practice project to get familiar with ASP.NET 6 and integration of PostgreSQL into Entity Framework. A backend for an TODO application",
    url: "https://github.com/AzimovParviz/todobackend",
    tech: "ASP.NET 6, PostgreSQL",
  },

  {
    id: 2,
    title: "boorupaper",
    description:
      "CLI app to quickly update your wallpaper on Linux (Gnome, KDE, Late, Cinammon DE) and MacOS using image aggregator gelbooru.com, for that command line efficiency and simplicity",
    url: "https://github.com/AzimovParviz/boorupaper",
    tech: "Python 3",
  },
  {
    id: 3,
    title: "holodex-cli",
    description:
      "Access holodex.net API from your command line and get a feed of currently live or upcoming streams with variety of filtering options",
    url: "https://github.com/AzimovParviz/holodex-cli",
    tech: "Python 3",
  },
  {
    id: 4,
    title: "Portfolio website (you are here)",
    description:
      "Simple portfolio website that tells about my skills, projects and experiences",
    url: "https://github.com/AzimovParviz/portfolio",
    tech: "React, TypeScript",
  },
  {
    id: 5,
    title: ".NET API + Azure blobs",
    description:
      ".NET backend that stores data in azure storage and a mysql database",
    url: "https://github.com/AzimovParviz/AzureBlobs",
    tech: "ASP.NET 6, MySQL, Azure",
  },

  {
    id: 6,
    title: "HR management and new hire training web application",
    description:
      "web application for managing personnel and providing education to new and returning employees in the intranet. No source code due to NDA",
    tech: ".NET Core 3, Microsoft SQL, Razor Pages, JavaScript, CSS",
  },
  {
    id: 7,
    title: "A library backend written in Java using Spring Boot framework",
    description:
      "A REST API similar to the Node.js found in the Full stack library application, uses OAuth2 through Google to authenticate requests. Users can return and borrow books and get information about them. Admins can browse , update and delete users and their information",
    tech: "Java 17, Spring Boot framework 2.7.5, PostgreSQL",
    url: "https://github.com/AzimovParviz/SpringBootKirjasto",
  },
];

function Projects() {
  return (
    <div className="projects">
      <div className="flex-container">
        {projects.map((pr) => (
          <Card
            key={pr.title}
            className="project-card"
            style={{ color: "brown", backgroundColor: "#FADBD8" }}
          >
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>{pr.title}</Card.Title>
              <hr></hr>
              <Card.Subtitle style={{ fontStyle: "italic" }}>
                {pr.tech}
              </Card.Subtitle>
              <hr></hr>
              <Card.Text>{pr.description}</Card.Text>
              {pr.url && (
                <Card.Link href={pr.url} target="_blank">
                  Source code
                </Card.Link>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
