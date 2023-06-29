import React, { useState } from 'react';
import { Link } from "react-scroll";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem
} from 'reactstrap';

const MyNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark sticky="top" expand="md">
            <NavbarBrand href="https://www.linkedin.com/in/prateek-upadhyay-34b49117a/">
                PU
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ cursor: "pointer" }}
                        >
                            About
                            </Link>
                    </NavItem>
                    <NavItem>
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="showcase"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ cursor: "pointer" }}
                        >
                            Portfolio
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="cm"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ cursor: "pointer" }}
                        >
                            Contact
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default MyNavbar;
