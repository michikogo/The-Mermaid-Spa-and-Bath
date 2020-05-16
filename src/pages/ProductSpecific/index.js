import React, { useState, useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, InputGroup, DropdownButton, Dropdown, Button, Card, Tabs, Tab, ListGroup, Toast, Modal, Form } from 'react-bootstrap';
import { check, logo } from '../../image';

import database from "../../firebase";

import Header from '../../common/header';
import Footer from '../../common/footer';

// Normal React Alternative 
// class ProductSpecific extends Component{
//     constructor(props){
//         super(props)
//         console.log(this.props.location)
//     }
//     render(){
//         return(
//             < Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
//             <Header />
//             <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px" }}>
//                 <p>Hello</p>
//                 {/* <p>{this.props.location.query}</p> */}
//             </Container>
//             <Footer />
//         </Container >
//         );
//     }
// }

// React Hook

const ProductSpecific = props => {

    // console.log("Specific Product")
    // console.log(props.location.state)

    // Declare a new state variable, which we'll call "count"
    const [picked, setPicked] = useState(1);

    const [paymentOptions, setPaymentOptions] = useState([
        { name: "Credit Card" },
        { name: "Paypal" },
        { name: "Bank Deposit" },
        { name: "Cash on Delivery" }
    ]);

    const [addToCart, setAddToCart] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const backProducts = () => {
        handleClose()
        window.location.replace("https://michikogo.github.io/The-Mermaid-Spa-and-Bath/#/products");
    }

    const [validated, setValidated] = useState(false);
    const [information, setInformation] = useState({
        lastName: '',
        firstName: '',
        contact: '',
        branch: '',
        item: props.location.state.name
    })

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            backProducts()
            database
                .firestore()
                .collection('sold')
                .add({ ...information })
            console.log("Add to Database: " + { ...information })
        }
        setValidated(true);
    };

    return (
        <Container fluid className="specific-product-header-padding">
            <Header />
            <Container fluid className="specific-product-content-padding">
                {/* <p>
                    The name of the product is {props.location.state.name}
                    The price is {props.location.state.price}
                    The image is {props.location.state.image}
                    The description is {props.location.state.desc}
                </p> */}
                <Row>
                    {/* PRODUCT IMAGE */}
                    <Col sm={5} className="specific-product-image-div">
                        <Image src={props.location.state.image} className="specific-product-image" />
                    </Col>
                    {/* PRODUCT DETAILS */}
                    <Col>
                        <Row className="specific-product-center">
                            <p className="specific-product-title">{props.location.state.name}</p>
                        </Row>
                        <Row className="specific-product-center">
                            <p className="specific-product-brand">The Body Shop</p>
                        </Row>
                        <Row className="specific-product-center">
                            <p className="specific-product-desc">{props.location.state.desc}</p>
                        </Row>
                        <Row>
                            <ListGroup variant="flush">
                                {props.location.state.pros !== ''
                                    ? props.location.state.pros.map((data, i) => {
                                        return (
                                            <div>
                                                <Row>
                                                    <Col xs={4} lg={2} className="specific-product-emoji">
                                                        <span>🎉</span>
                                                    </Col>
                                                    <Col className="specific-product-benefits-div">
                                                        <ListGroup.Item className="specific-product-benefits" key={i}>{data}</ListGroup.Item>
                                                    </Col>
                                                </Row>
                                            </div>
                                        );
                                    })
                                    : "No Data"
                                }
                            </ListGroup>
                        </Row>
                        <Row className="specific-product-center">
                            <p className="specific-product-price">{props.location.state.price}</p>
                        </Row>
                        <Row>
                            <p className="specific-product-quantity-title">Quantity</p>
                        </Row>
                        {/* DROPDOWN OPTION OF HOW MANY ITEMS */}
                        <Row className="specific-product-quantity-center">
                            <Col xs={3} lg={2}>
                                <div className="specific-product-dropdown">
                                    <DropdownButton
                                        as={InputGroup.Prepend}
                                        variant="outline-secondary"
                                        title={picked}
                                        id="input-group-dropdown-1"
                                    >
                                        <Dropdown.Item onClick={() => setPicked(1)}>1</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setPicked(2)}>2</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setPicked(3)}>3</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setPicked(4)}>4</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setPicked(5)}>5</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </Col>
                            {/* BUTTON TO ADD TO CART OR BUY */}
                            <Col xs={4} lg={5} className="specific-product-add-buy">
                                <Button variant="success" onClick={handleShow}>Buy Now</Button>
                            </Col>
                            {/* MODAL */}
                            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Your Buying {information.item}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    We will be needing your information so that we can reserve the item, that will be picked up on store.
                                    <hr />
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formLastName">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text"
                                                    onChange={(e) => setInformation({ ...information, lastName: e.target.value })}
                                                    required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please place last name.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formFirstName">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    onChange={(e) => setInformation({ ...information, firstName: e.target.value })}
                                                    required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please place first name.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Group controlId="Phone Number">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control
                                                type="number"
                                                onChange={(e) => setInformation({ ...information, contact: e.target.value })}
                                                required
                                                className="specific-product-modal-contact"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a phone number.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="Branch">
                                            <Form.Label>Branch</Form.Label>
                                            <Form.Control as="select"
                                                onChange={(e) => setInformation({ ...information, branch: e.target.value })}
                                                required
                                            >
                                                <option> </option>
                                                <option>Rockwell</option>
                                                <option>Podium</option>
                                                <option>SM Mega Mall</option>
                                                <option>Shangri-la Mall</option>
                                                <option>Robinsons Magnolia</option>
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a branch.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <div className="specific-product-modal-buy-div">
                                            <Button variant="secondary" onClick={backProducts}>
                                                Back to Products
                                            </Button>
                                            <Button variant="primary" type="submit" className="specific-product-modal-buy">
                                                Buy
                                        </Button>
                                        </div>
                                    </Form>
                                </Modal.Body>
                            </Modal>

                            <Col xs={5} lg={5} className="specific-product-add-buy">
                                <Button variant="primary" onClick={() => setAddToCart(true)}>Add to Cart</Button>
                            </Col>
                            {/* POPUP (TOAST) WHEN ADD TO CART IS CLICKED */}
                            <Col xs={5} lg={5}>
                                {addToCart === true
                                    ?
                                    <Toast onClose={() => setAddToCart(false)} show={addToCart} delay={5000} autohide className="specific-product-toast">
                                        <Toast.Header>
                                            <img src={logo} className="rounded mr-2 specific-product-logo" alt="" />
                                            <strong className="mr-auto">The Mermaid Spa and Bath </strong>
                                        </Toast.Header>
                                        <Toast.Body>Add to Cart is under construction 🚧👷🚧</Toast.Body>
                                    </Toast>
                                    : ''
                                }
                            </Col>
                        </Row>
                        {/* PAYMENT DETAILS */}
                        <Row>
                            <p className="specific-product-payment">Payment options available:</p>
                        </Row>
                        <Row>
                            {paymentOptions !== ''
                                ? paymentOptions.map((data, i) => {
                                    return (
                                        <div className="specific-product-payment-options-div">
                                            <Col key={i}>
                                                <Image src={check} className="specific-product-payment-options" /> {data.name}
                                            </Col>
                                        </div>
                                    );
                                })
                                : 'No Data'
                            }
                        </Row>
                    </Col>
                </Row>
                {/* MORE DETAILS OF THE ITEM */}
                <Row className="specific-product-more-details">
                    <Card className="specific-product-more-details-card">
                        <Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="What to Love">
                                <p className="specific-product-more-details-tab">{props.location.state.whatToLove}</p>
                            </Tab>
                            <Tab eventKey="profile" title="How To Use">
                                <p className="specific-product-more-details-tab">{props.location.state.howToUse}</p>
                            </Tab>
                            <Tab eventKey="contact" title="Ingredients">
                                <p className="specific-product-more-details-tab">{props.location.state.ingredients}</p>
                            </Tab>
                        </Tabs>
                    </Card>
                </Row>
            </Container>
            <Footer />
        </Container >
    );

}

export default ProductSpecific;