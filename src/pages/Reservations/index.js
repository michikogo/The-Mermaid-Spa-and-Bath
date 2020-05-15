import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, Image, Button, Card, InputGroup, Modal } from 'react-bootstrap';
import { abstract8Top } from '../../image';
import database from "../../firebase";

import Header from '../../common/header';
import Footer from '../../common/footer';

const Reservations = props => {
    // console.log(props.location.state)
    // Client Information
    const [information, setInformation] = useState({
        lastName: '',
        firstName: '',
        contact: '',
        email: '',
        appointmentDate: '',
        appointmentTime: '',
        branch: '',
        treatment: ''
    })

    // Date and Time
    const time = new Date();
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const isWeekday = date => {
        const day = date.getDay(date);
        return day !== 0 && day !== 6;
    };

    const reserveTime = (time) => {
        setStartTime(time)

        const hour = time.getHours()
        const mins = time.getMinutes()
        const schedTime = hour + ":" + mins
        // console.log(schedTime)

        setInformation({ ...information, appointmentTime: schedTime })
    }

    const reserveDate = (date) => {
        setStartDate(date)

        // console.log("Month: " + date.getMonth())
        // console.log("Day: " + date.getDate())
        // console.log("Year: " + date.getFullYear())

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const numMonth = date.getMonth()
        const day = date.getDate()
        const year = date.getFullYear()
        const schedDate = monthNames[numMonth] + " " + day + ", " + year

        setInformation({ ...information, appointmentDate: schedDate })
    }

    // const checkNumbers = (e) => {
    //     if (!isNaN(e.target.value)) {
    //         setInformation({ ...information, contact: e.target.value })
    //         console.log("Information: " + information.contact)
    //     } else {
    //         return (
    //             <Form.Control.Feedback type="invalid">
    //                 Contact Number required.
    //             </Form.Control.Feedback>
    //         )
    //     }
    // }

    // Branch
    const [branch, setBranch] = useState(["Rockwell", "Podium", "SM Mega Mall", "Shangri-la Mall", "Robinsons Magnolia"]);

    // Treatments
    const [facialTreatments, setFacialTreatments] = useState([]);
    useEffect(() => {
        if (props.location.state !== undefined) {
            setInformation({ ...information, treatment: props.location.state.treatment })
            console.log(props.location.state.treatment)
            console.log(information.treatment)
        }
        window.scrollTo(0, 0)

        database
            .firestore()
            .collection('facial')
            .orderBy("key", "asc")
            .onSnapshot((snapshot) => {
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

    // On Submit
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            handleShow()
            database
                .firestore()
                .collection('reservations')
                .add({ ...information })
            console.log("Add to Database: " + { ...information })
        }
        setValidated(true);
    };

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        window.location.reload(true)
    }
    const handleShow = () => setShow(true);

    return (
        <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Header />
            <Container fluid className="reservations-content-padding">
                <Image src={abstract8Top} className="reservations-top-image" />
                <p className="reservations-title-style">Reservations</p>
                <Card className="reservation-card-padding">
                    {/* FORM */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            {/* LAST NAME */}
                            <Form.Group sm={12} lg={6} as={Col} controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    // value={information.lastName}
                                    onChange={(e) => setInformation({ ...information, lastName: e.target.value })}
                                    placeholder="Last Name"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Last Name Required.
                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* FIRST NAME */}
                            <Form.Group sm={12} lg={6} as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="First Name"
                                    onChange={(e) => setInformation({ ...information, firstName: e.target.value })}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    First Name Required.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            {/* CONTACT NUMBER */}
                            <Form.Group sm={12} lg={6} as={Col} controlId="formGridContactNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">+63</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="number"
                                        onChange={(e) => setInformation({ ...information, contact: e.target.value })}
                                        required
                                        className="reservations-contact-number"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Contact Number required.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            {/* EMAIL ADDRESS */}
                            <Form.Group sm={12} lg={6} as={Col} controlId="formGridEmailAddress">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    onChange={(e) => setInformation({ ...information, email: e.target.value })}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Email Address required.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            {/* DATE */}
                            <Form.Group sm={12} md={6} as={Col} controlId="formGridDate">
                                <Form.Label>Preferred Date</Form.Label>
                                <br />
                                <DatePicker
                                    className="form-control"
                                    selected={startDate}
                                    onChange={date => reserveDate(date)}
                                    filterDate={isWeekday}
                                    dateFormat="MMMM d, yyyy"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Preferred Date required.
                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* TIME */}
                            <Form.Group sm={12} md={6} as={Col} controlId="formGridTime">
                                <Form.Label>Preferred Time</Form.Label>
                                <br />
                                <DatePicker
                                    className="form-control"
                                    selected={startTime}
                                    onChange={time => reserveTime(time)}
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
                                onChange={(e) => setInformation({ ...information, branch: e.target.value })}
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
                                value={information.treatment}
                                // value={props.location.state.treatment}
                                onChange={(e) => setInformation({ ...information, treatment: e.target.value })}
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
                            <Button variant="primary" type="submit" style={{ width: "150px" }}>
                                Submit
                            </Button>
                        </div>
                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Reservation Submitted</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, {information.firstName} {information.lastName} your reservation is being processed. Please check either your email or text for confirmation.</Modal.Body>
                        </Modal>
                    </Form>
                </Card>
            </Container>
            <Footer />
        </Container >
    );
}

export default Reservations;