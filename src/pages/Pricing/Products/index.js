import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, CardDeck, Col, Row } from 'react-bootstrap';
import { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10 } from '../../../image';

import Header from '../../../common/header';
import Footer from '../../../common/footer';

class Products extends Component {
    render() {
        const products = [
            { name: "Tea Tree Oil", price: "P 495", image: product1, desc: "Tea Tree Oil—a potent purifying treatment that claims to easily get rid of those pesky blemishes, fast. It’s made with hand-harvested leaves that are steam-distilled to produce the purest oil formula. It’s easy to use, too! Just apply directly on skin with a cotton swab and wait to see the results." },
            { name: "Olive Shower Gel", price: "P 1,095/750ml", image: product2, desc: "The Olive Shower Gel is a soap-free, lather-rich shower gel that contains organic, cold-pressed olive oil. The shower staple has a fresh, delicate scent that leaves skin smelling great and feeling rejuvenated." },
            { name: "Drops of Youth Concentrate", price: "P 1,995", image: product3, desc: "The Body Shop’s Drops of Youth Concentrate is a facial serum that uses plant stem cells to target the first signs of aging. Its gel-like consistency quickly absorbs into the skin and promises to leave it instantly smoother and moisturized." },
            { name: "Skin Defence Multi-Protection Essence", price: "P1,495/40ml", image: product4, desc: "This Multi-Protection Essence is a strong facial SPF that’s designed to combat the harmful rays of the sun (it has both UVA and UVB protection!). As a plus, its non-greasy milk-to-water formula will leave your face looking bright and extremely moisturized." },
            { name: "Lip & Cheek Stain", price: "P 795", image: product5, desc: "This dual-purpose liquid stain from The Body Shop is a great example. The formula isn’t too runny so it makes it easy to blend, and all the colors are buildable to give you that natural-looking flush!" },
            { name: "British Rose Body Yogurt", price: "P 750", image: product6, desc: "The Body Shop’s Body Yogurt has a gel-cream formula that’s lightweight and easily absorbs into the skin. It’s a great alternative for those who aren’t keen on the stickiness of your typical body lotion. It's got a subtle rose scent, and it leaves skin feeling smooth and hydrated for up to 48 hours." },
            { name: "Ginger Shampoo", price: "P 450", image: product7, desc: "The Ginger Haircare Range by The Body Shop is formulated with ginger root extract to strengthen hair follicles as well as willow bark extract and honey, which both help in exfoliating the scalp and keeping it hydrated." },
            { name: "White Musk Fragrance Mist ", price: "P 995", image: product8, desc: "This mist is a lighter version of the Eau De Parfum variant, making it more suitable for everyday use. It has notes of musk, rose, amber, and wood, giving you a clean and refreshing scent. Some even say it gets better as the day goes by!" },
            { name: "Skin Defence Mist", price: "P 1,695", image: product9, desc: "Skin Defence Multi-Protection Face Mist is feels like nothing on the skin, so you can spray it on top of makeup—allowing you to easily reapply sunscreen throughout the day. It helps protect skin against UVA and UVB rays as well as pollution, while helping it appear brighter and more radiant. This product is enriched with marula oil, red algae extract, and vitamin C, to help nourish skin." },
            { name: "Fresh Nude BB", price: "P 995", image: product10, desc: "The Body Shop’s Fresh Nude BB Cream is a lightweight, multi-tasking beauty balm. It promises to give you lasting coverage, while keeping your face hydrated and safe from the sun. It’s also 100% vegan and works great for those with sensitive skin." },
        ];

        return (
            <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <Header />
                <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                    <p className="products-title-style">Products</p>
                    <Row>
                        <CardDeck>
                            {products !== ''
                                ? products.map((data, i) => {
                                    return (
                                        <Col sm={12} lg={4} style={{ paddingBottom: "25px" }}>
                                            <Card style={{ paddingTop: "10px" }}>
                                                <Card.Img variant="top" src={data.image} />
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: "medium" }}>{data.name}</Card.Title>
                                                    <Card.Text style={{ textAlign: "right", color: "Blue" }}>
                                                        {data.price}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    );
                                })
                                : "No Data"
                            }
                        </CardDeck>
                    </Row>
                </Container>
                <Footer />
            </Container>
        );
    }
}

export default Products;