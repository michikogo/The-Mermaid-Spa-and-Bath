import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { promo, abstract7 } from '../../image';

import Header from '../../common/header';
import Footer from '../../common/footer';

const Voucher = () => {

    const [rules, setRules] = useState([
        "This promotion is open to all, members and non-members.",
        "Promo period is on February 28, February 29 and March 01, 2020",
        "This promotion does not have any purchase limit.",
        "Mode of payment will be in cash and credit card ONLY.",
        "Gift Cards are transferrable.",
        "All Cards are valid at any branches depending on accommodation and availability of rooms.",
        "Any lost or stolen Gift Card is not replaceable.",
        "The management shall not be responsible for any lost or stolen Gift Card.",
        "This promotion is not in conjunction with any other discount, promo, including PWD, Diplomat and Senior Citizen Discount."
    ])

    return (
        <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Header />
            <Container fluid className="promo-content-padding">
                <p className="promo-title-style">Promo</p>
                <Row>
                    <Col lg={6} className="promo-image-banner-div">
                        <Image src={promo} className="promo-image-banner" />
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <p className="promo-mechanics-title">GENERAL MECHANICS:</p>
                        </Row>
                        <Row>
                            <p className="promo-mechanics-content">
                                {rules.map((data, i) => {
                                    return (
                                        <p key={i}>{i + 1}. {data}</p>
                                    )
                                })}
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="promo-background-div">
                <Image src={abstract7} className="promo-background-image" />
            </div>
            <Footer />
        </Container>
    );
}
export default Voucher;