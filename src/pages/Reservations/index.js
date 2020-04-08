import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, InputGroup, DropdownButton, Dropdown, Button, Card, Tabs, Tab, ListGroup } from 'react-bootstrap';

import Header from '../../common/header';
import Footer from '../../common/footer';

const Reservations = () => {
    return (
        <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Header />
            <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px", paddingTop: "50px" }}>
                <Row>
                    Hello from Reservations
                </Row>
            </Container>
            <Footer />
        </Container>
    );
}

export default Reservations;