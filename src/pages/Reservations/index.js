import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, Image, Button, Card, InputGroup } from 'react-bootstrap';
import { abstract8 } from '../../image';
import database from "../../firebase";

import Header from '../../common/header';
import Footer from '../../common/footer';

const Reservations = () => {
    // getting Date
    const time = new Date();
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);

    const isWeekday = date => {
        const day = date.getDay(date);
        return day !== 0 && day !== 6;
    };

    const [branch, setBranch] = useState(["Rockwell", "Podium", "SM Mega Mall", "Shangri-la Mall", "Robinsons Magnolia"]);

    const [facialTreatments, setFacialTreatments] = useState([]);
    useEffect(() => {
        database
            .firestore()
            .collection('facial')
            .orderBy("key", "asc")
            .onSnapshot((snapshot) => {
                // To check array size 'snapshot.docs' 
                // To check data 'snapshot.docs[0].data()' 
                // debugger
                // console.log(snapshot.docs[0].data())
                const facialData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setFacialTreatments(facialData)
            })
    }, [])

    const [bodyTreatments, setBodyTreatments] = useState([]);
    useEffect(() => {
        database
            .firestore()
            .collection('body')
            .orderBy('key', 'asc')
            .onSnapshot((snapshot) => {
                const bodyData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setBodyTreatments(bodyData)
            })
    }, [])

    const [peel, setPeel] = useState([])
    useEffect(() => {
        database
            .firestore()
            .collection('peel')
            .orderBy('key', 'asc')
            .onSnapshot((snapshot) => {
                const peelData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setPeel(peelData)
            })
    }, [])

    const [microdermabrasion, setMicrodermabrasion] = useState([]);
    useEffect(() => {
        database
            .firestore()
            .collection('microdermabrasion')
            .orderBy('key', 'asc')
            .onSnapshot((snapshot) => {
                const microdermabrasionData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setMicrodermabrasion(microdermabrasionData)
            })
    })

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            console.log()
        }

        setValidated(true);
    };

    return (
        <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Header />
            <Image src={abstract8} className="reservations-image" />
            <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px", paddingBottom: "40px" }}>
                <p className="reservations-title-style">Reservations</p>
                <Card style={{ padding: "100px" }}>
                    {/* FORM */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            {/* LAST NAME */}
                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Last Name Required.
                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* FIRST NAME */}
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="First Name"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    First Name Required.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            {/* CONTACT NUMBER */}
                            <Form.Group as={Col} controlId="formGridContactNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">+63</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Contact Number required.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            {/* EMAIL ADDRESS */}
                            <Form.Group as={Col} controlId="formGridEmailAddress">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Email Address required.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            {/* DATE */}
                            <Form.Group as={Col} controlId="formGridDate">
                                <Form.Label>Preferred Date</Form.Label>
                                <br />
                                <DatePicker
                                    className="form-control"
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    filterDate={isWeekday}
                                    dateFormat="MMMM d, yyyy"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Preferred Date required.
                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* TIME */}
                            <Form.Group as={Col} controlId="formGridTime">
                                <Form.Label>Preferred Time</Form.Label>
                                <br />
                                <DatePicker
                                    className="form-control"
                                    selected={startTime}
                                    onChange={time => setStartTime(time)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    minTime={time.setHours(9)}
                                    maxTime={time.setHours(20)}
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Preferred Time required.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        {/* Branch */}
                        <Form.Group controlId="formGridBranch">
                            <Form.Label>Branch</Form.Label>
                            <Form.Control
                                as="select"
                                required
                            >
                                <option> </option>
                                {branch.map((data, i) => {
                                    return (
                                        <option key={i}>{data}</option>
                                    )
                                })}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Branch required.
                            </Form.Control.Feedback>
                        </Form.Group>
                        {/* TREATMENTS */}
                        <Form.Group controlId="formGridTreatment">
                            <Form.Label>Treatment Type</Form.Label>
                            <Form.Control
                                as="select"
                                required
                            >
                                <option> </option>
                                {facialTreatments.map((data, i) => {
                                    return (
                                        <option key={i}>{data.name}</option>
                                    )
                                })}
                                <hr />
                                {bodyTreatments.map((data, i) => {
                                    return (
                                        <option key={i}>{data.name}</option>
                                    )
                                })}
                                <hr />
                                {peel.map((data, i) => {
                                    return (
                                        <option key={i}>{data.name}</option>
                                    )
                                })}
                                <hr />
                                {microdermabrasion.map((data, i) => {
                                    return (
                                        <option key={i}>{data.name}</option>
                                    )
                                })}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Treatment Type required.
                            </Form.Control.Feedback>
                            <div>
                                <span className="reservations-link-treatments" onClick={() => window.open("http://localhost:3000/The-Mermaid-Spa-and-Bath/#/treatments", "Popup", "width=580, height=600")}>
                                    Dont know which one to pick? Check Treatments
                                </span>
                            </div>
                        </Form.Group>
                        {/* TERMS AND CONDITIONS */}
                        <Form.Group id="formGridTermsAndConditions">
                            <Form.Check
                                type="checkbox"
                                label="Terms and Conditions"
                                required
                            />
                            <div style={{ textAlign: "justify", paddingLeft: "19px" }}>In hac habitasse platea dictumst. Donec pretium diam ut mi bibendum sodales. Nullam malesuada convallis placerat. Vestibulum metus ante, luctus eget turpis sed, laoreet
                            vestibulum ex. Aliquam dapibus pretium nisl, in imperdiet libero. Suspendisse eros ante, euismod in quam sit amet, dictum convallis orci. Vivamus turpis leo, efficitur
                            eu ultrices vitae, egestas ut orci. Nullam pulvinar, est eget viverra feugiat, ex velit semper dolor, non placerat nunc augue ut elit. Sed nec convallis risus. Morbi
                            fringilla nunc in feugiat interdum.</div>
                        </Form.Group>
                        <div style={{ textAlign: "end" }}>
                            <Button variant="primary" type="submit" style={{ width: "150px" }} >
                                Submit
                        </Button>
                        </div>
                    </Form>
                </Card>
            </Container>
            <Footer style={{ marginTop: "20px" }} />
        </Container >
    );
}

export default Reservations;