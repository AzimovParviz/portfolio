import { Card } from "react-bootstrap";

type experience = {
  id: number;
  company: string;
  title: string;
  duration: string;
  tech: string[];
};

const experiences: experience[] = [
  {
    id: 0,
    company: "Avenla Oy",
    title: ".NET developer",
    duration: "6 months",
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
        {experiences.map((pr) => (
          <Card
            key={pr.title}
            className="experience-card"
            style={{ color: "brown", backgroundColor: "#FADBD8" }}
          >
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>{pr.company}</Card.Title>
              <hr></hr>
              <Card.Subtitle style={{ fontStyle: "italic" }}>
                <Card.Text>
                  {pr.title} , {pr.duration}
                </Card.Text>
              </Card.Subtitle>
              <hr></hr>
              <Card.Text>
                {pr.tech.map((t) => (
                  <p>{t}</p>
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
