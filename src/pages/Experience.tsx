import { Card } from "react-bootstrap";
import { experience } from "../types";

const experiences: experience[] = [
  {
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
    company: "Integrify Oy",
    title: "Full stack developer",
    duration: "6 months",
    description:
      "MERN stack projects. Worked with containers. Received training on AWS (EC2, Lambda, DynamoDB, Amazon IAM) and Azure",
    tech: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "MongoDB",
      "React",
      "Java",
      "Spring Boot",
      "Docker",
      "AWS",
      "Azure",
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
                  <span key={t}>{t}</span>
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
