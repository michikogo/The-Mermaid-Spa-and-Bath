import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <Container fluid className="footer-margin">
                <Row className="footer-background-color">
                    <Col className="footer-author-and-date">
                        <p>Designed by: Michiko Go</p>
                    </Col>
                    <Col className="footer-author-and-date">
                        <p>April 05, 2020</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;