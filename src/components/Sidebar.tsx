import React from "react";
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Projects from "./Projects";
import Home from "./Home";

function Sidebar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" className="navigation">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="#home">Parviz Azimov</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/contact"></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes>
                <Route path="/projects" element={<Projects />} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    );
}

export default Sidebar;