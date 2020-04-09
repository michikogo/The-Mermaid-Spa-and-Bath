import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, InputGroup, DropdownButton, Dropdown, Button, Card, Tabs, Tab, ListGroup, Toast } from 'react-bootstrap';
import { check, logo } from '../../image';

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

    const [addToCart, setAddToCart] = useState(false);


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
                        <Row>
                            <p className="specific-product-title">{props.location.state.name}</p>
                        </Row>
                        <Row>
                            <p className="specific-product-brand">The Body Shop</p>
                        </Row>
                        <Row>
                            <p className="specific-product-desc">{props.location.state.desc}</p>
                        </Row>
                        <Row>
                            <ListGroup variant="flush">
                                {props.location.state.pros !== ''
                                    ? props.location.state.pros.map((data, i) => {
                                        return (
                                            <div>
                                                <Row>
                                                    <Col lg={1} className="specific-product-emoji">
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
                        <Row>
                            <p className="specific-product-price">{props.location.state.price}</p>
                        </Row>
                        <Row>
                            <p className="specific-product-quantity-title">Quantity</p>
                        </Row>
                        {/* DROPDOWN OPTION OF HOW MANY ITEMS */}
                        <Row>
                            <Col lg={1}>
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
                            <Col lg={3} className="specific-product-add-buy">
                                <Button variant="success">Buy Now</Button>
                            </Col>
                            <Col lg={3} className="specific-product-add-buy">
                                <Button variant="primary" onClick={() => setAddToCart(true)}>Add to Cart</Button>
                            </Col>
                            {/* POPUP (TOAST) WHEN ADD TO CART IS CLICKED */}
                            <Col lg={5}>
                                <Toast onClose={() => setAddToCart(false)} show={addToCart} delay={5000} autohide className="specific-product-toast">
                                    <Toast.Header>
                                        <img src={logo} className="rounded mr-2 specific-product-logo" alt="" />
                                        <strong className="mr-auto">The Mermaid Spa and Bath </strong>
                                    </Toast.Header>
                                    <Toast.Body>{props.location.state.name} is added to cart</Toast.Body>
                                </Toast>
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
                                        <div>
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