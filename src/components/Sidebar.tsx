import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import AboutMe from "../pages/AboutMe";

function Sidebar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" className="navigation">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="#home" style={{ padding: "10px" }}>
          Parviz Azimov
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/experience">
                Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                About me
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Contact me" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.github.com/AzimovParviz"
                target="_blank"
              >
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/parviz-azimov-28a101153/"
                target="_blank"
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="mailto:azimovp17@gmail.com">
                E-mail: azimovp17 (at) gmail.com
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default Sidebar;
