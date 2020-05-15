import React, { useState, useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Tab, Tabs, Table } from 'react-bootstrap';

import Header from '../../common/header';
import Footer from '../../common/footer';
import TreatmentsTable from './TreatmentsTable.js';

// import * as firebase from 'firebase';
// import 'firebase/firestore';
import database from "../../firebase";
import TreatmentMenu from './TreatmentMenu';

// function usedFacialTreatments() {
//     const [facialTreatments, setFacialTreatments] = useState([]);

//     useEffect(() => {
//         database
//             .firestore()
//             .collection('products')
//             .onSnapshot((snapshot) => {
//                 debugger
//             })
//     }, [])

//     return facialTreatments
// }

const Treatments = props => {

    return (
        <Container fluid className="treatments-header-padding">
            <Header />
            <Container fluid className="treatments-content-padding">
                <TreatmentMenu />
                {/* <p className="treatments-title-style">Treatments</p>
                <Tabs fill defaultActiveKey="0" id="uncontrolled-tab-example">
                    <Tab eventKey="0" title="Facial Treatments" style={{ paddingTop: "30px" }}>
                        <TreatmentsTable name={"Facial Treatment"} data={facialTreatments} />
                    </Tab>
                    <Tab eventKey="1" title="Body Treatments" style={{ paddingTop: "30px" }}>
                        <TreatmentsTable name={"Body Treatment"} data={bodyTreatments} />
                    </Tab>
                    <Tab eventKey="2" title="Peels" style={{ paddingTop: "30px" }}>
                        <TreatmentsTable name={"Peels"} data={peel} />
                    </Tab>
                    <Tab eventKey="3" title="Microdermabrasion" style={{ paddingTop: "30px" }}>
                        <TreatmentsTable name={"Microdermabrasion"} data={microdermabrasion} />
                    </Tab>
                </Tabs> */}
            </Container>
            <Footer />
        </Container >
    );
}

export default Treatments;