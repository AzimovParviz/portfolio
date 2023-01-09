import { Card } from "react-bootstrap";
import {experience} from "../types";



const experiences: experience[] = [
  {
    id: 0,
    company: "Avenla Oy",
    title: ".NET developer",
    duration: "6 months",
    description:
      "Worked on a full stack web application for the company's client, utilized all of the tech listed below. I was responsible for front-end, back-end and the database",
    tech: [
      "ASP.NET",
      "SQL",
      "Docker",
      "JavaScript",
      "Razor Pages",
      "Powershell",
    ],
  },
  {
    id: 1,
    company: "Integrify Oy",
    title: "Fullstack trainee",
    duration: "6 months",
    description:
      "Studying Full-stack + DevOps + Cloud for 6 months with various projects and tests done both solo and in group to test and refine skills and technologies learned",
    tech: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "MongoDB",
      "React",
      "Java",
      "Springboot",
      "Docker",
      "AWS",
      "Azure",
      "Testing",
    ],
  },
];

function Experience() {
  return (
    <div className="experience">
      <div className="flex-container">
        {experiences.map((exp) => (
          <Card
            key={exp.company}
            className="experience-card"
            style={{ color: "brown", backgroundColor: "#FADBD8" }}
          >
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>
                {exp.company}
              </Card.Title>
              <hr></hr>
              <Card.Subtitle style={{ fontStyle: "italic" }}>
                <Card.Text>
                  {exp.title} , {exp.duration}
                </Card.Text>
              </Card.Subtitle>
              <hr></hr>
              <Card.Text>{exp.description}</Card.Text>
              <hr></hr>
              <Card.Text>
                {exp.tech.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Experience;
