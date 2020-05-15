import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logo } from '../../image';
import { Container, Image, Col, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';


class Header extends Component {

    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }

    handleOpen = () => {
        this.setState({ isOpen: true })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
    }

    render() {
        const pages = [
            { name: "Home", link: "/The-Mermaid-Spa-and-Bath/#/" },
            { name: "About Us", link: "/The-Mermaid-Spa-and-Bath/#/about" },
            { name: "Products", link: "/The-Mermaid-Spa-and-Bath/#/products" },
            { name: "Treatments", link: "/The-Mermaid-Spa-and-Bath/#/treatments" },
            { name: "Promo", link: "/The-Mermaid-Spa-and-Bath/#/promo" },
            { name: "Reservations", link: "/The-Mermaid-Spa-and-Bath/#/reservations" }
        ]
        return (
            <Container fluid className="header-padding">
                <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" className="header-details-nav-bar">
                    <Row style={{ width: "100%" }}>
                        <Col xs={6} md={9} lg={6}>
                            <Navbar.Brand>
                                <Row>
                                    <Col md={2} lg={4}>
                                        <Image src={logo} rounded className="header-logo-nav-bar" />
                                    </Col>
                                    <Col md={9} lg={8} className='header-title-nav-bar'>
                                        The Meramaid Spa and Bath
                                    </Col>
                                </Row>
                            </Navbar.Brand>
                        </Col>
                        <Col xs={6} md={3} lg={6} className="header-hamburger">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header-toggle" />
                            <Navbar.Collapse id="responsive-navbar-nav" className="header-navbar">
                                <Nav className="header-menu">
                                    {pages !== ''
                                        ? pages.map((data, i) => {
                                            return (
                                                <div key={i} style={{ paddingRight: "10px" }}>
                                                    <Nav.Link href={data.link}>{data.name}</Nav.Link>
                                                </div>
                                            );
                                        })
                                        : 'No Data'
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                </Navbar>
            </Container >
        );
    }
}

export default Header;