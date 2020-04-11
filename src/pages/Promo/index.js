import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { promo, abstract7 } from '../../image';

import Header from '../../common/header';
import Footer from '../../common/footer';

const Voucher = () => {
    return (
        <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Header />
            <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px", paddingBottom: "40px" }}>
                <p className="promo-title-style">Promo</p>
                <Row>
                    <Col lg={6}>
                        <Image src={promo} className="promo-image-banner" />
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <p className="promo-mechanics-title">GENERAL MECHANICS:</p>
                        </Row>
                        <Row>
                            <p className="promo-mechanics-content">
                                This promotion is open to all, members and non-members.<br />
                            Promo period is on February 28, February 29 and March 01, 2020<br />
                            This promotion does not have any purchase limit.<br />
                            Mode of payment will be in cash and credit card ONLY.<br />
                            Gift Cards are transferrable.<br />
                            All Cards are valid at any branches depending on accommodation and availability of rooms.<br />
                            Any lost or stolen Gift Card is not replaceable.<br />
                            The management shall not be responsible for any lost or stolen Gift Card.<br />
                            This promotion is not in conjunction with any other discount, promo, including PWD, Diplomat and Senior Citizen Discount.
                        </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/* <div className="promo-background-div">
                <Image src={abstract7} className="promo-background-image" />
            </div> */}
            <Footer />
        </Container>
    );
}
export default Voucher;