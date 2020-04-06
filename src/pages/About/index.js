import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image } from 'react-bootstrap';

import Header from '../../common/header';
import Footer from '../../common/footer';
import { about, about2, abstract3, abstract4 } from '../../image';

class About extends React.Component {
    render() {
        return (
            <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <Header />

                <Image src={abstract4} className="about-top-background-image" />
                <Image src={abstract3} className="about-bottom-background-image" />
                <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                    <p className="about-title-style">About Us</p>
                    <Row>
                        <Col className="about-col-align">
                            <p className="about-description-style">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque orci eros, sed fermentum tortor tincidunt
                                quis. In tincidunt lacinia mauris, vitae ullamcorper mauris euismod ac. Suspendisse mattis accumsan porttitor. Nam quis
                                dui arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit. Donec luctus commodo dui mollis finibus. Donec bibendum euismod turpis et elementum.
                                Cras quis sapien sed diam porta molestie a eu tortor. Fusce dolor dolor, laoreet et lorem ut, sodales bibendum elit.
                                Maecenas tempor erat vel est tincidunt sagittis. Suspendisse pretium tempus nunc, vel convallis sem convallis ut.
                                Phasellus ac velit ac lacus finibus porttitor eu sit amet dolor. Nam odio justo, tincidunt id sagittis non, laoreet sed
                                ante. Suspendisse eget molestie massa.
                            </p>
                        </Col>
                        <Col>
                            <Image src={about} className="about-picture-scale" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src={about2} className="about-picture-scale" />
                        </Col>
                        <Col className="about-col-align">
                            <p className="about-description-style">
                                Cras venenatis tellus sit amet erat consequat, vel ultricies magna consectetur. Morbi vestibulum lacinia rutrum. Nulla
                                vulputate odio vitae nibh auctor, non hendrerit eros condimentum. Curabitur molestie viverra est et laoreet. Nulla eu
                                dapibus mauris, id cursus nibh. Fusce ornare nisi ut nisi hendrerit interdum. Fusce sollicitudin aliquam magna, eu
                                interdum augue varius non. Phasellus vestibulum sapien facilisis tincidunt auctor. Nulla facilisi. Duis sit amet luctus
                                nunc. Sed libero neque, condimentum ac nibh a, consectetur sodales nisl. Maecenas ac varius nisi, non consectetur mauris.
                                Sed placerat est non velit gravida, nec tempus elit ornare. Nullam tempor eleifend sapien, quis vestibulum augue molestie
                                ut. Integer vehicula, risus vitae rhoncus lacinia, nulla velit maximus nibh, in aliquam sem nibh eu ex. Praesent hendrerit
                                tortor bibendum, condimentum velit mattis, luctus tellus.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </Container >
        );
    }
}

export default About;