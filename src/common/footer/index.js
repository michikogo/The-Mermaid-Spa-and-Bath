import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Col, Row, Carousel, Image } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <Container fluid className="footer-margin">
                <Row className="background-color-footer">
                    <Col style={{ paddingTop: "15px", textAlign: "center" }}>
                        <p>Designed by: Michiko Go</p>
                    </Col>
                    <Col style={{ paddingTop: "15px", textAlign: "center" }}>
                        <p>April 05, 2020</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;