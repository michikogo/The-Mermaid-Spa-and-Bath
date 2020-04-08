import React, { Component, useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, InputGroup, DropdownButton, Dropdown, Button, Card, Tabs, Tab, ListGroup } from 'react-bootstrap';
import { check } from '../../../image';

import Header from '../../../common/header';
import Footer from '../../../common/footer';

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

    console.log("Specific Product")
    console.log(props.location.state)

    // Declare a new state variable, which we'll call "count"
    const [picked, setPicked] = useState(1);

    const [paymentOptions, setPaymentOptions] = useState([
        { name: "Credit Card" },
        { name: "Paypal" },
        { name: "Bank Deposit" },
        { name: "Cash on Delivery" }
    ]);

    return (
        <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Header />
            <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px", paddingTop: "50px" }}>
                {/* <p>
                    The name of the product is {props.location.state.name}
                    The price is {props.location.state.price}
                    The image is {props.location.state.image}
                    The description is {props.location.state.desc}
                </p> */}
                <Row>
                    <Col sm={5}>
                        <Image src={props.location.state.image} style={{ width: "inherit" }} />
                    </Col>
                    <Col>
                        <Row>
                            <p className="specific-product-title">{props.location.state.name}</p>
                        </Row>
                        <Row>
                            <p className="specific-product-brand">The Body Shop</p>
                        </Row>
                        <Row>
                            <p style={{ paddingTop: "20px" }}>{props.location.state.desc}</p>
                        </Row>
                        <Row>
                            <ListGroup variant="flush">
                                {props.location.state.pros !== ''
                                    ? props.location.state.pros.map((data, i) => {
                                        return (
                                            <ListGroup.Item key={i}>🎉 {data}</ListGroup.Item>
                                        );
                                    })
                                    : "No Data"
                                }
                            </ListGroup>
                        </Row>
                        <Row>
                            <p className="specific-product-price">{props.location.state.price}</p>
                        </Row>
                        <Row>
                            <p className="specific-product-quantity-title">Quantity</p>
                        </Row>
                        <Row>
                            <Col lg={1}>
                                <div style={{ borderRadius: "10px" }}>
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
                            <Col sm={4} style={{ display: "grid" }}>
                                <Button variant="success">Buy Now</Button>
                            </Col>
                            <Col sm={4} style={{ display: "grid" }}>
                                <Button variant="primary">Add to Cart</Button>
                            </Col>
                        </Row>
                        <Row>
                            <p style={{ paddingTop: "20px" }}>Payment options available:</p>
                        </Row>
                        <Row>
                            {paymentOptions !== ''
                                ? paymentOptions.map((data, i) => {
                                    return (
                                        <div>
                                            <Col>
                                                <Image src={check} style={{ width: "25px" }} /> {data.name}
                                            </Col>
                                        </div>
                                    );
                                })
                                : 'No Data'
                            }
                        </Row>
                    </Col>
                </Row>
                <Row style={{ width: "101%", margin: "0px", paddingTop: "15px" }}>
                    <Card style={{ marginTop: "10px", padding: "30px", width: "100%" }}>
                        <Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="What to Love">
                                <p style={{ paddingTop: "50px" }}>{props.location.state.whatToLove}</p>
                            </Tab>
                            <Tab eventKey="profile" title="How To Use">
                                <p style={{ paddingTop: "50px" }}>{props.location.state.howToUse}</p>
                            </Tab>
                            <Tab eventKey="contact" title="Ingredients">
                                <p style={{ paddingTop: "50px" }}>{props.location.state.ingredients}</p>
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