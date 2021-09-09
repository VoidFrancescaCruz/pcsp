import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import HomePage from '../HomePage/HomePage';
import AboutUs from '../AboutUsPage/AboutUs';
import ReportPage from '../ReportPage/ReportPage';
import AdminPage from '../AdminPage/AdminPage';
import Resources from '../ResourcesPage/Resources';
import CyberSecurityTopicsPage from '../ResourcesPage/CyberSecurityTopicsPage';
import NewsAndUpdatesPage from '../ResourcesPage/NewsAndUpdatesPage';
import ReadAndUnderstandPage from '../ReadAndUnderstandPage/ReadAndUnderstandPage';

//Cyber Security Topics 
import CyberAvoidance from '../ResourcesPage/TopicsforCyberSecurity/CyberAvoidance';
import CyberImportance from '../ResourcesPage/TopicsforCyberSecurity/CyberImportance';
import CyberInPH from '../ResourcesPage/TopicsforCyberSecurity/CyberInPH';
import CyberReportIncident from '../ResourcesPage/TopicsforCyberSecurity/CyberReportIncident';
import CyberSafeguard from '../ResourcesPage/TopicsforCyberSecurity/CyberSafeguard';
import CyberThreats from '../ResourcesPage/TopicsforCyberSecurity/CyberThreats';
import CyberTips from '../ResourcesPage/TopicsforCyberSecurity/CyberTips';

import './NavbarComp.css';

const NavbarComp = () => {

    return (
        <Router>
            <div>
                <Navbar variant="dark" expand="lg" className="NavbarComp">
                    <Navbar.Brand href="/home"><img src="/images/logo.png" className="Logo" /></Navbar.Brand>
                    {/* <Navbar.Brand href="/home">Philippine Cyber Security Portal</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="MenuItems">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '154px' }}
                            navbarScroll
                        >
                            {/* <Nav.Link as={Link} to="/home">Home</Nav.Link> */}

                            <Button variant="secondary" className="ResourcesDropDown" href="/home">Home</Button>

                            {/* Resources Tab with Drop Down Menu */}
                            <Dropdown as={ButtonGroup}>
                                <Button variant="secondary" className="ResourcesDropDown" href="/resources">Resources</Button>

                                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" className="ResourcesDropDown" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/cybersecurity">Cyber Security Topics</Dropdown.Item>
                                    <Dropdown.Item href="/newsandupdates">News and Updates</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Button variant="secondary" className="ResourcesDropDown" href="/about">About Us</Button>

                            {/* <Nav.Link as={Link} to="/about">About Us</Nav.Link> */}

                        </Nav>

                        {/* Search Bar */}
                        {/* <Form className="SearchBar">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                        </Form> */}

                    </Navbar.Collapse>

                    {/* Report Here Button */}
                    <Button className="ReportButton" as={Link} to="/read">Report Here</Button>

                </Navbar>
            </div>

            {/* Links to other pages */}
            <div>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home">
                        <HomePage />
                    </Route>
                    <Route path="/report">
                        <ReportPage />
                    </Route>
                    <Route path="/admin">
                        <AdminPage />
                    </Route>
                    <Route path="/about">
                        <AboutUs />
                    </Route>
                    <Route path="/resources">
                        <Resources />
                    </Route>
                    <Route path="/cybersecurity">
                        <CyberSecurityTopicsPage />
                    </Route>
                    <Route path="/newsandupdates">
                        <NewsAndUpdatesPage />
                    </Route>
                    <Route path="/read">
                        <ReadAndUnderstandPage />
                    </Route>
                    <Route path="/cyberavoidance">
                        <CyberAvoidance />
                    </Route>
                    <Route path="/cyberimportance">
                        <CyberImportance />
                    </Route>
                    <Route path="/cyberinph">
                        <CyberInPH />
                    </Route>
                    <Route path="/cyberreportincident">
                        <CyberReportIncident />
                    </Route>
                    <Route path="/cybersafeguard">
                        <CyberSafeguard />
                    </Route>
                    <Route path="/cyberthreats">
                        <CyberThreats />
                    </Route>
                    <Route path="/cybertips">
                        <CyberTips />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default NavbarComp;


