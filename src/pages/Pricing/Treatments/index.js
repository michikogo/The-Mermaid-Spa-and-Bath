import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Tab, Tabs, Table } from 'react-bootstrap';

import Header from '../../../common/header';
import Footer from '../../../common/footer';

const Treatments = props => {
    const [facialTreatments, setFacialTreatments] = useState([
        { name: "Classic Facial", desc: "Clarifies and refines your skin by relaxing facial nerves and muscles, improving blood circulation and removing impurities.", price: "P 440" },
        { name: "Acne Control Regular Facial", desc: "Diminishes acne-causing bacteria using an antiseptic mask which contains healing properties.", price: "P 690" },
        { name: "Oil Control Regular Facial", desc: "Unclogs pores and helps reduce oil production using a seaweed mask.", price: "P 690" },
        { name: "Age Defy Regular Facial", desc: "Uses a collagen mask to promote the skin's natural moisture.", price: "P 690" },
        { name: "K-Glow Facial", desc: "The K- Glow Facial™ deeply hydrates the skin using the natural formulation of Epidermal Growth Factor, Bio Peptide Complex, botanical extracts and essential oils.", price: "P 690" },
        { name: "Ultimate White Facial", desc: "Immediately lightens, smoothens and rejuvenates the skin with the use of combined natural ingredients from the Dead Sea, including Dunaliella Seaweed, and Gigawhite, a natural skin- lightening agent.", price: "P1 700" },
        { name: "Acne Control Advanced Facial", desc: "Targets acne-causing bacteria while delivering healing and soothing benefits to the skin using a cooling green oxygenating mask.", price: "P 1 350" },
        { name: "Oil Control Advanced Facial", desc: "Visibly reduces and unclogs pores, and helps control oil production using a powerful cooling mask, all while promoting its natural healing process.", price: "P 1 350" },
        { name: "Flawless White Advanced Facial", desc: "Beautifully lightens and moisturizes face using White Nest extract and a moisturizing milk lotion, leaving the face evenly-toned, supple, and fair.", price: "P 1 350" },
        { name: "Age Defy Advance Facial", desc: "Uses seaweed and vitamin C to effectively restore the skin's radiance and elasticity while promoting its natural healing process.", price: "1 350" },
        { name: "Rejuvelite Age-Defy Mask Facial", desc: "Effectively restores skin elasticity and delivers youthful radiance by increasing collagen production.", price: "P 1 140" },
        { name: "Oil Control Advanced with Rejuvelite", desc: "Visibly unclogs pores from skin impurities while controlling oil production and boosting the skin’s natural healing process.", price: "P 1 800" },
        { name: "RG Advance with Rejuvelite", desc: "   Minimizes pores, reduces oil effectively restores the skin's natural balance using a charcoal mask and LED color therapy.", price: "P 1 800" },
    ])
    return (
        <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Header />
            <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                <p className="treatments-title-style">Treatments</p>
                <Tabs fill defaultActiveKey="0" id="uncontrolled-tab-example">
                    <Tab eventKey="0" title="Facial Treatments" style={{ paddingTop: "30px" }}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th style={{ fontSize: "x-large" }}>Facial</th>
                                    <th style={{ fontSize: "x-large" }}>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody >
                                {facialTreatments !== ''
                                    ? facialTreatments.map((data, i) => {
                                        return (
                                            <tr>
                                                <td style={{ width: "1000px" }}><p style={{ fontStyle: "italic", fontWeight: "500", marginBottom: "5px" }}>{data.name}</p> <p style={{ marginBottom: "5px" }}>{data.desc}</p></td>
                                                <td>{data.price}</td>
                                                <td>Book now</td>
                                            </tr>
                                        );
                                    })
                                    : 'No Data'
                                }
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="1" title="Body Treatments" style={{ paddingTop: "30px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <hr />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </Tab>
                    <Tab eventKey="2" title="Massages" style={{ paddingTop: "30px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Tab>
                    <Tab eventKey="3" title="Nail Treatments" style={{ paddingTop: "30px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Tab>
                </Tabs>
            </Container>
            <Footer />
        </Container >
    );
}

// Source: https://www.leaf.tv/articles/different-types-of-spa-treatments/
export default Treatments;