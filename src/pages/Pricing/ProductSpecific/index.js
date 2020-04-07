import React, { Component, useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, InputGroup, DropdownButton, Dropdown, Button, Card, Tabs, Tab, } from 'react-bootstrap';
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
                        {/* <Row>
                            <p style={{ paddingTop: "20px" }}>{props.location.state.desc}</p>
                        </Row> */}
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
                                <p style={{ paddingTop: "50px" }}>Integer sit amet dictum felis, eu elementum elit. Suspendisse ex diam, commodo id dictum eget, porttitor eget eros. Ut mauris mauris, blandit quis nunc blandit, tincidunt sollicitudin ante. Etiam odio quam, varius quis neque vel, fermentum tempor neque. Donec nec iaculis elit. Donec at enim a nisl placerat laoreet. Nam ut sem nisl. Curabitur ac lacinia lectus. Etiam lectus diam, placerat et dolor eget, laoreet cursus dui. Vivamus eleifend consectetur venenatis.</p>
                            </Tab>
                            <Tab eventKey="profile" title="How To Use">
                                <p style={{ paddingTop: "50px" }}>Maecenas quis porttitor odio, ut bibendum arcu. Fusce auctor eleifend justo sit amet pharetra. Vestibulum maximus tortor felis, vel aliquam turpis placerat nec. Fusce ultrices, magna ac molestie laoreet, arcu tellus auctor augue, dapibus faucibus nibh ipsum nec ex. Nullam et tellus at enim convallis semper nec non sapien. Vestibulum euismod, massa in consectetur porta, nisl lorem vehicula lectus, a feugiat turpis metus id erat. Sed varius elit nisl, et varius risus iaculis viverra. Integer congue tortor purus, a posuere odio ultrices et. Curabitur a mauris at ante placerat semper. Aliquam accumsan tincidunt magna, fermentum fringilla massa scelerisque sagittis. Morbi semper vehicula enim vel consectetur. Morbi commodo placerat odio, condimentum lobortis ipsum ultricies nec. Vestibulum efficitur, leo non aliquet finibus, arcu mauris fringilla metus, vel dictum turpis purus a lorem. Quisque tincidunt porttitor enim, ullamcorper viverra mauris semper efficitur.</p>
                            </Tab>
                            <Tab eventKey="contact" title="About the Brand">
                                <p style={{ paddingTop: "50px" }}>Suspendisse eleifend pellentesque finibus. In a ipsum ante. Morbi condimentum maximus diam, vitae lobortis enim. Aenean nunc mauris, elementum ac tortor facilisis, semper efficitur sapien. Sed quis sagittis libero, quis bibendum magna. Aliquam non ultrices diam. Pellentesque sit amet metus iaculis, suscipit eros eu, efficitur felis. Maecenas et velit aliquam, semper arcu vitae, aliquet lectus. Donec luctus enim in erat accumsan sodales. Morbi fermentum justo sit amet nibh mollis, a placerat tortor interdum. Donec ante augue, mattis nec dapibus non, molestie eu nunc. Ut ac enim gravida, sagittis lacus vitae, suscipit nulla. Quisque faucibus, eros quis vehicula rutrum, sapien sem tempus erat, a tincidunt tellus augue sit amet ex.</p>
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