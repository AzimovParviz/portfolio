import React from "react";
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Projects from "./Projects";

function Sidebar() {
    return (
        <div className="navigation">
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/skills">Skill overview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Routes>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </div>
    );
}

export default Sidebar;