import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, InputGroup, DropdownButton, Dropdown, Button, Card, Tabs, Tab, ListGroup } from 'react-bootstrap';
import { check } from '../../../image';

import Header from '../../../common/header';
import Footer from '../../../common/footer';

const Services = props => {
    return (
        <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Header />
            <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px", paddingTop: "50px" }}>
                <Row>
                    <p style={{ fontStyle: "Italic", fontSize: "x-large" }}>Facial Treatments</p>
                    <p></p>

                </Row>
            </Container>
            <Footer />
        </Container>
    );
}

// Source: https://www.leaf.tv/articles/different-types-of-spa-treatments/
export default Services;