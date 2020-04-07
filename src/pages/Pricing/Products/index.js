import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, CardDeck, Col, Row } from 'react-bootstrap';
import { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10 } from '../../../image';
import { Link } from "react-router-dom";

import Header from '../../../common/header';
import Footer from '../../../common/footer';

class Products extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [
                { name: "Tea Tree Oil", price: "P 495", image: product1, link: "tea-tree-oil", desc: "Tea Tree Oil—a potent purifying treatment that claims to easily get rid of those pesky blemishes, fast. It’s made with hand-harvested leaves that are steam-distilled to produce the purest oil formula. It’s easy to use, too! Just apply directly on skin with a cotton swab and wait to see the results." },
                { name: "Olive Shower Gel", price: "P 1,095", image: product2, link: "olive-shower-gel", desc: "The Olive Shower Gel is a soap-free, lather-rich shower gel that contains organic, cold-pressed olive oil. The shower staple has a fresh, delicate scent that leaves skin smelling great and feeling rejuvenated." },
                { name: "Drops of Youth Concentrate", price: "P 1,995", image: product3, link: "drops-of-youth-concentrate", desc: "The Body Shop’s Drops of Youth Concentrate is a facial serum that uses plant stem cells to target the first signs of aging. Its gel-like consistency quickly absorbs into the skin and promises to leave it instantly smoother and moisturized." },
                { name: "Skin Defence Multi-Protection Essence", price: "P1,495", image: product4, link: "skin-defence-multi-protection-essence", desc: "This Multi-Protection Essence is a strong facial SPF that’s designed to combat the harmful rays of the sun (it has both UVA and UVB protection!). As a plus, its non-greasy milk-to-water formula will leave your face looking bright and extremely moisturized." },
                { name: "Lip & Cheek Stain", price: "P 795", image: product5, link: "lip-and-cheek-stain", desc: "This dual-purpose liquid stain from The Body Shop is a great example. The formula isn’t too runny so it makes it easy to blend, and all the colors are buildable to give you that natural-looking flush!" },
                { name: "British Rose Body Yogurt", price: "P 750", image: product6, link: "british-rose-body-yogurt", desc: "The Body Shop’s Body Yogurt has a gel-cream formula that’s lightweight and easily absorbs into the skin. It’s a great alternative for those who aren’t keen on the stickiness of your typical body lotion. It's got a subtle rose scent, and it leaves skin feeling smooth and hydrated for up to 48 hours." },
                { name: "Ginger Shampoo", price: "P 450", image: product7, link: "giner-shampoo", desc: "The Ginger Haircare Range by The Body Shop is formulated with ginger root extract to strengthen hair follicles as well as willow bark extract and honey, which both help in exfoliating the scalp and keeping it hydrated." },
                { name: "White Musk Fragrance Mist ", price: "P 995", image: product8, link: "white-musk-fragrance-mist", desc: "This mist is a lighter version of the Eau De Parfum variant, making it more suitable for everyday use. It has notes of musk, rose, amber, and wood, giving you a clean and refreshing scent. Some even say it gets better as the day goes by!" },
                { name: "Skin Defence Mist", price: "P 1,695", image: product9, link: "skin-defence-mist", desc: "Skin Defence Multi-Protection Face Mist is feels like nothing on the skin, so you can spray it on top of makeup—allowing you to easily reapply sunscreen throughout the day. It helps protect skin against UVA and UVB rays as well as pollution, while helping it appear brighter and more radiant. This product is enriched with marula oil, red algae extract, and vitamin C, to help nourish skin." },
                { name: "Fresh Nude BB", price: "P 995", image: product10, link: "fresh-nude-bb", desc: "The Body Shop’s Fresh Nude BB Cream is a lightweight, multi-tasking beauty balm. It promises to give you lasting coverage, while keeping your face hydrated and safe from the sun. It’s also 100% vegan and works great for those with sensitive skin." },
            ]
        }
    }

    newPage = (data) => {
        console.log("Products")
        console.log(data)
    }

    render() {
        return (
            <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <Header />
                <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                    <p className="products-title-style">Products</p>
                    <Row>
                        <CardDeck className="cards-samesize">
                            {this.state.products !== ''
                                ? this.state.products.map((data, i) => {
                                    return (
                                        <Col sm={12} lg={3} key={i} style={{ paddingBottom: "25px" }}>
                                            <Card className="products-card">
                                                <Link to={{
                                                    pathname: "/products/" + data.link,
                                                    state: {
                                                        name: data.name,
                                                        price: data.price,
                                                        image: data.image,
                                                        desc: data.desc
                                                    }
                                                }}>
                                                    <Card.Link onClick={() => this.newPage(data)}>
                                                        <Card.Img variant="top" src={data.image} />
                                                        <Card.Body>
                                                            <Card.Title className="products-card-title">{data.name}</Card.Title>
                                                            <Card.Text className="products-card-price">{data.price}</Card.Text>
                                                        </Card.Body>
                                                    </Card.Link>
                                                </Link>
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