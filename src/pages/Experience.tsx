import { Card } from "react-bootstrap";
import { experience } from "../types";

const experiences: experience[] = [
  {
    company: "Avenla Oy",
    title: ".NET developer",
    duration: "01.2020 - 06.2020",
    description:
      "Worked on a full stack web application for the company's client, utilized all of the tech listed below. I was responsible for front-end, back-end and the database",
    tech: [
      "ASP.NET, ",
      "SQL, ",
      "Docker, ",
      "JavaScript, ",
      "Razor Pages, ",
      "Powershell",
    ],
  },
  {
    company: "Integrify Oy",
    title: "Full stack developer",
    duration: "6.2022 - 8.2024",
    description:
      "MERN stack projects. Worked with containers. Received training on AWS (EC2, Lambda, DynamoDB, Amazon IAM) and Azure",
    tech: [
      "JavaScript, ",
      "TypeScript, ",
      "HTML, ",
      "CSS, ",
      "MongoDB, ",
      "React, ",
      "Java, ",
      "Spring Boot, ",
      "Docker, ",
      "AWS, ",
      "Azure",
    ],
  },
  {
    company: "QADental / Suomen kotilääkäripalvelut",
    title: "Software Developer",
    duration: "2023 - current",
    description:
      "Working on transitioning a Drupal 7 website to the newest Drupal 10 version. Reimplementation of a custom theme, using Twig templates, JavaScript and Tailwind. Implementation of various functionality such as online exams and a Q&A forum through custom Drupal modules, written in PHP.",
    tech: ["PHP", "Twig", "JavaScript", "Docker", "Linux", "MariaDB"],
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
