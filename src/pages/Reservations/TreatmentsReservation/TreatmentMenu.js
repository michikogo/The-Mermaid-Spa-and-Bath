import React, { useState, useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Tab, Tabs, Table } from 'react-bootstrap';


import TreatmentsTable from './TreatmentsTable.js';

// import * as firebase from 'firebase';
// import 'firebase/firestore';
import database from "../../../firebase";
const TreatmentMenu = () => {

    const [facialTreatments, setFacialTreatments] = useState([
        // { name: "Classic Facial", desc: "Clarifies and refines your skin by relaxing facial nerves and muscles, improving blood circulation and removing impurities.", price: "P 440" },
        // { name: "Acne Control Regular Facial", desc: "Diminishes acne-causing bacteria using an antiseptic mask which contains healing properties.", price: "P 690" },
        // { name: "Oil Control Regular Facial", desc: "Unclogs pores and helps reduce oil production using a seaweed mask.", price: "P 690" },
        // { name: "Age Defy Regular Facial", desc: "Uses a collagen mask to promote the skin's natural moisture.", price: "P 690" },
        // { name: "K-Glow Facial", desc: "The K- Glow Facial™ deeply hydrates the skin using the natural formulation of Epidermal Growth Factor, Bio Peptide Complex, botanical extracts and essential oils.", price: "P 690" },
        // { name: "Ultimate White Facial", desc: "Immediately lightens, smoothens and rejuvenates the skin with the use of combined natural ingredients from the Dead Sea, including Dunaliella Seaweed, and Gigawhite, a natural skin- lightening agent.", price: "P1 700" },
        // { name: "Acne Control Advanced Facial", desc: "Targets acne-causing bacteria while delivering healing and soothing benefits to the skin using a cooling green oxygenating mask.", price: "P 1 350" },
        // { name: "Oil Control Advanced Facial", desc: "Visibly reduces and unclogs pores, and helps control oil production using a powerful cooling mask, all while promoting its natural healing process.", price: "P 1 350" },
        // { name: "Flawless White Advanced Facial", desc: "Beautifully lightens and moisturizes face using White Nest extract and a moisturizing milk lotion, leaving the face evenly-toned, supple, and fair.", price: "P 1 350" },
        // { name: "Age Defy Advance Facial", desc: "Uses seaweed and vitamin C to effectively restore the skin's radiance and elasticity while promoting its natural healing process.", price: "1 350" },
        // { name: "Rejuvelite Age-Defy Mask Facial", desc: "Effectively restores skin elasticity and delivers youthful radiance by increasing collagen production.", price: "P 1 140" },
        // { name: "Oil Control Advanced with Rejuvelite", desc: "Visibly unclogs pores from skin impurities while controlling oil production and boosting the skin’s natural healing process.", price: "P 1 800" },
        // { name: "RG Advance with Rejuvelite", desc: "   Minimizes pores, reduces oil effectively restores the skin's natural balance using a charcoal mask and LED color therapy.", price: "P 1 800" },
    ])

    // QUERY
    useEffect(() => {
        database
            .firestore()
            .collection('facial')
            .orderBy("key", "asc")
            .onSnapshot((snapshot) => {
                // To check array size 'snapshot.docs' 
                // To check data 'snapshot.docs[0].data()' 
                // debugger
                const facialData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setFacialTreatments(facialData)
            })
    }, [])

    const [bodyTreatments, setBodyTreatments] = useState([
        //     // { name: "Back Cleaning", desc: "This deep moisturizing and clarifying treatment makes the skin on your back supple as it eliminates bacne problems, blackheads, ingrown hairs, and oily deposits. It also lightens the complexion and gives the skin a healthy glow.", price: "P 850" },
        //     // { name: "Nano RF", desc: "Uses radio frequency applied on the skin to lift, contour and tone problem areas. Also stimulates the production of collagen, resulting to a smoother and tighter skin.", price: "P 1 200" },
        //     // { name: "Body Scrub", desc: "Removes dead, dry and rough skin. Evens out skin tone and texture.", price: "P 2 200" },
        //     // { name: "Shape & Sculpt", desc: "Flawless’ premier non-invasive and pain free slimming solution that reduces fat, tones up muscles, and contours the body. It uses a synergistic system of cavitation ultrasound, radio frequency, and interference muscle toning to slim down and tone the face, arms, abdomen, hips, thighs, and legs. Results visible in just one session.", price: "P 1 000" },
        //     // { name: "Cellutite", desc: "Uses the combined technology of radio frequency, infrared waves and vacuum and mechanical massage to firm up specific areas of the body and to reduce cellulite.", price: "P 1 400" },
        //     // { name: "Mesolipo", desc: "Melts fatty tissues and tightens loose skin by injecting a concoction of slimming agents, such as L-Carnitine and phosphatidlycholine, into problem areas.", price: "P 5 500" },
        //     // { name: "Sweatox", desc: "Uses small amounts of botulinum toxin to significantly reduce sweating by temporarily blocking signals that stimulates the sweat glands.", price: "P 7 200" },
    ])

    useEffect(() => {
        database
            .firestore()
            .collection('body')
            .orderBy('key', 'asc')
            .onSnapshot((snapshot) => {
                const bodyData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setBodyTreatments(bodyData)
            })
    }, [])

    const [peel, setPeel] = useState([
        //     // { name: "Skin Peel", desc: "Uses a solution to exfoliate dull skin and lighten pigmentations, revealing a more youthful and radiant skin.", price: "P 770" },
        //     // { name: "Mesoestetic Peel", desc: "Exfoliates skin to address specific skin concerns. Depending on solution used (Mandelic, Glycolic, Lactic), this peeling treatment ca help dry out acne and decrease oiliness of the skin, rejuvenate skin and reduce appearance of fine lines, and lighten dull and uneven skin.", price: "P 1 700" },
        //     // { name: "Easy Peel", desc: "Using a highly concentrated peeling solution, Easy Peel effectively heats and eliminates skin discoloration, fine lines, acne, oilness, and the appearance of large pores.", price: "P 3 500" },
        //     // { name: "Flawless Signature Body Peel", desc: "A Flawless Exclusive, this intensive whole body micro peeling treatment uses multiple types of fruit acids to deliver a smoother, fairer and more radiant skin.", price: "P 4 500" }
    ])

    useEffect(() => {
        database
            .firestore()
            .collection('peel')
            .orderBy('key', 'asc')
            .onSnapshot((snapshot) => {
                const peelData = snapshot.docs.map((doc) => ({
                    id: doc.data,
                    ...doc.data()
                }))
                setPeel(peelData)
            })
    }, [])

    const [microdermabrasion, setMicrodermabrasion] = useState([
        //     // { name: "Platinum Peel", desc: "Promotes skin renewal by removing dead skin cells using a diamond-tip wand, resulting to a lighter, cleaner, and more radiant skin. (For best results: Add Advanced Whitening/Oil Control/Age Defy/Cell Booster Infusion Mask)", price: "P 940" },
        //     // { name: "Nano Powerpeel (Neck/Nape/Underarms/Scars)", desc: "Propels corundum crystals onto the skin to slough off dead skin cells to rejuvenate, lighten, and even out skin tone. It also helps reduce the appearance of certain types of scars.", price: "P 1 100" },
        //     // { name: "Power Facial", desc: "Ideal for those with sensitive skin, this innovative facial treatment effectively rejuvenates the skin and improves damages caused by the sun. It combines abrasion and vacuum while adding nutrient-rich and hydrating serums to exfoliate the outer layer of the skin.", price: "P 5500" }
    ])

    useEffect(() => {
        database
            .firestore()
            .collection('microdermabrasion')
            .orderBy('key', 'asc')
            .onSnapshot((snapshot) => {
                const microdermabrasionData = snapshot.docs.map((doc) => ({
                    id: doc.data,
                    ...doc.data()
                }))
                setMicrodermabrasion(microdermabrasionData)
            })
    }, [])

    return (
        <Container>
            <p className="treatments-title-style">Treatments</p>
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
            </Tabs>
        </Container>
    )
}

export default TreatmentMenu;