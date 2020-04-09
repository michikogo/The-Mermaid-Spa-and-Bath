import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    spa1, spa2, spa3, spa4,
    products, staff, reservation,
    abstract5, abstract5Flip,
} from '../../image';
import { Container, Col, Row, Carousel, Image } from 'react-bootstrap';

import Header from '../../common/header';
import Footer from '../../common/footer';

class Home extends Component {
    render() {
        const ppt = [
            { image: spa1, title: "Swiddish Massage", description: "Swedish massage typically covers the whole body with firm strokes but without much deep, focused work." },
            { image: spa2, title: "Hot Stone Massage", description: "Hot stone massage uses smooth, rounded basalt stones that have been heated in water and retains their heat well. The heat helps warm up your muscles and is very relaxing." },
            { image: spa3, title: "Facial", description: "Facials have the same basics steps: Cleanse, exfoliate, extract, massage, and mask. The main difference is the skincare products used in each facial, and most spas carry at least two lines." },
            { image: spa4, title: "Body Treatments", description: "The basic body scrub exfoliates your outermost, dead skin cells with a salt scrub (rougher), a sugar scrub (gentler), or some other exfoliant, like coffee grounds or fruit enzymes that gently loosen the inter-cellular bonds. " },
        ];
        const details = [
            { name: staff, description: "Meet our Staff", url: "/about", link: "About Us >>" },
            { name: products, description: "Beauty Products", url: "/products", link: "Products >>" },
            { name: reservation, description: "Book an Appointment", url: "/reservation", link: "Reservation >>" }
        ];
        return (
            <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <Header />
                <Image src={abstract5} className="home-background-left" />
                <Image src={abstract5Flip} className="home-background-right" />
                <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                    <br />
                    {/* Carousel */}
                    <Row className="home-carosel-center">
                        <Carousel>
                            {/* First Slide */}
                            {ppt !== ''
                                ? ppt.map((data, i) => {
                                    return (
                                        <Carousel.Item key={i}>
                                            <div className="carousel-container">
                                                <img
                                                    className="home-images-size"
                                                    src={data.image}
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <div className="carousel-content">
                                                        <h3>{data.title}</h3>
                                                        <p>{data.description}</p>
                                                    </div>
                                                </Carousel.Caption>
                                            </div>
                                        </Carousel.Item>
                                    );
                                })
                                : "No Data"
                            }
                        </Carousel>
                    </Row>
                    <br />
                    <Row style={{ paddingBottom: "30px" }}>
                        {details !== ''
                            ? details.map((data, i) => {
                                return (
                                    <Col sm={4} key={i}>
                                        <div className="home-offerings-overlay-image">
                                            <Image src={data.name} className="home-offerings-image" />
                                            <div className="home-offerings-normal">
                                                <div className="home-offerings-text">
                                                    <p style={{ color: "black" }}>{data.description}</p>
                                                    <a href={data.url} style={{ color: "black" }}>{data.link}</a>
                                                </div>
                                            </div>
                                            <div className="home-offerings-hover">
                                                <div className="home-offerings-text">
                                                    <p style={{ color: "white" }}>{data.description}</p>
                                                    <a href={data.url} style={{ color: "white" }}>{data.link}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })
                            : "No Data"
                        }
                    </Row>
                </Container>
                <Footer />
            </Container >
        );
    }
}

export default Home;