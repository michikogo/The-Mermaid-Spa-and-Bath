import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, Image, InputGroup, DropdownButton, Dropdown, Button, Card, Tabs, Tab, ListGroup } from 'react-bootstrap';
import { abstract8 } from '../../image';

import Header from '../../common/header';
import Footer from '../../common/footer';

const Reservations = () => {
    return (
        <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Header />
            <Image src={abstract8} className="reservations-image" />
            <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px", paddingBottom: "40px" }}>
                <p className="reservations-title-style">Reservations</p>
                <Card style={{ padding: "100px" }}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="email" placeholder="Last Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="password" placeholder="First Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Date</Form.Label>
                                <Form.Control as="select" value="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Time</Form.Label>
                                <Form.Control as="select" value="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridState">
                            <Form.Label>Treatment Type</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="terms and COnditions" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Container>
            <Footer style={{ marginTop: "20px" }} />
        </Container>
    );
}

export default Reservations;