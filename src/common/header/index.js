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
                            <Row>
                                <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about">About Us</Nav.Link>
                                    <NavDropdown title="Pricing"
                                        onMouseEnter={this.handleOpen}
                                        onMouseLeave={this.handleClose}
                                        open={this.state.isOpen}
                                        noCaret
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                                        <NavDropdown.Item href="/treatments">Treatments</NavDropdown.Item>
                                        <NavDropdown.Item href="/voucher">Voucher</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/reservations">Reservations</Nav.Link>
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