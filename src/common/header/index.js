import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logo } from '../../image';
import { Container, Image, Col, Row, Navbar, Nav } from 'react-bootstrap';


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
                <Row>
                    <Navbar bg="dark" variant="dark" className="header-details-nav-bar">
                        <Col xs={2}>
                            <div>
                                <Image src={logo} rounded className="header-logo-nav-bar" />
                            </div>
                        </Col>
                        <Col>
                            <Row className='header-title-nav-bar'>
                                The Mermaid Spa and Bath
                            </Row>
                        </Col>
                        <Col>
                            <Row style={{ paddingTop: "60px" }}>
                                <Nav className="mr-auto">
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
                            </Row>
                        </Col>
                    </Navbar>
                </Row>
            </Container>
        );
    }
}

export default Header;