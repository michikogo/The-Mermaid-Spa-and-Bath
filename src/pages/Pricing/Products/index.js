import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Card, CardDeck, Col, Row } from 'react-bootstrap';
import { abstract6Forground, product1, product2, product3, product4, product5, product6, product7, product8, product9, product10 } from '../../../image';
import { Link } from "react-router-dom";

import Header from '../../../common/header';
import Footer from '../../../common/footer';

class Products extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    name: "Tea Tree Oil",
                    price: "P 495",
                    image: product1,
                    link: "tea-tree-oil",
                    desc: "Targeted care for blemished skin. Can be used direct on skin.",
                    pros: ["Soothing", "Has antibacterial properties", "Does not dry out skin"],
                    whatToLove: " Tea Tree Oil—a potent purifying treatment that claims to easily get rid of those pesky blemishes, fast. It’s made with hand-harvested leaves that are steam-distilled to produce the purest oil formula. It’s easy to use, too! Just apply directly on skin with a cotton swab and wait to see the results.",
                    ingredients: "Aqua (Solvent/Diluent), Alcohol Denat. (Solvent/Diluent), PEG-40 Hydrogenated Castor Oil (Emulsifier), Polysorbate 20 (Emulsifier), Melaleuca Alternifolia Leaf Oil (Natural Additive), Limonene (Natural Additive), t-Butyl Alcohol (Denaturant), Calophyllum Inophyllum Seed Oil (Skin Conditioning Agent), Citral (Natural Additive), Leptospermum Petersonii Oil (Natural Additive), Denatonium Benzoate (Denaturant), Tocopherol (Antioxidant).",
                    howToUse: "Apply directly to skin using fingertips or a cotton bud.",
                },
                {
                    name: "Olive Shower Gel",
                    price: "P 1,095",
                    image: product2,
                    link: "olive-shower-gel",
                    desc: "The Olive Shower Gel is a soap-free, lather-rich shower gel that contains organic, cold-pressed olive oil. The shower staple has a fresh, delicate scent that leaves skin smelling great and feeling rejuvenated.",
                    pros: ["Shower gel", "Soap-free cleansing", "Liquid-gel texture", "Mediterranean", "fresh, delicate scent", "Community Trade organic olive oil from Italy"],
                    whatToLove: "Turn your shower into a Mediterranean delight, when you use our soap-free Olive Shower Gel that contains organic, cold-pressed olive oil and has a neutral scent. Surely, will leave your skin feeling soft, cleansed and gently scented with a fresh and fragrant aroma.",
                    ingredients: "Aqua/Water (Solvent/Diluent), Sodium Laureth Sulfate (Surfactant), Cocamidopropyl Betaine (Surfactant), Glycerin (Humectant), Polysorbate 20 (Emulsifier), PEG-40 Hydrogenated Castor Oil (Emulsifier), Parfum/Fragrance (Fragrance), Sodium Chloride (Viscosity Modifier), Polyglyceryl-2 Caprate (Skin-Conditioning Agent), Trisodium Sulfosuccinate (pH Adjuster), PEG-120 Methyl Glucose Dioleate (Viscosity Modifier), Mel/Honey (Natural Additive), Sodium Benzoate (Preservative), Citric Acid (pH Adjuster), Olea Europaea Fruit Oil/Olea Europaea (Olive) Fruit Oil (Emollient), Linalool (Fragrance Ingredient), Disodium EDTA (Chelating Agent), Denatonium Benzoate (Denaturant), CI 19140/Yellow 5 (Colour), CI 42090/Blue 1 (Colour), CI 17200/Red 33 (Colour",
                    howToUse: "Lather up in the bath or shower using hands or a bath lily. Rinse thoroughly.",
                },
                {
                    name: "Drops of Youth Concentrate",
                    price: "P 1,995",
                    image: product3,
                    link: "drops-of-youth-concentrate",
                    desc: "The Body Shop’s Drops of Youth Concentrate is a facial serum that uses plant stem cells to target the first signs of aging. Its gel-like consistency quickly absorbs into the skin and promises to leave it instantly smoother and moisturized.",
                    pros: ["99% ingredients of natural origin", "Enriched with the power of plants and natural antioxidants", "Helps protect skin daily from indoor and outdoor pollution", "Enriched with Community Trade moringa seed oil from Rwanda", "Enriched with three plant stem cells: edelweiss from the Italian Alps, criste marine and sea holly from the Brittany Coast", "The remaining ingredients are perfectly safe for skin and help to maintain the long-lasting performance and feel-good texture of our formula."],
                    whatToLove: "Get fresher and healthier looking skin with our Drops of Youth™ Youth Concentrate. This refreshing gel-like serum leaves skin feeling fresher, replenished with moisture, and with a healthy-looking glow. Now reinforced with environmental protection and natural antioxidants for skin that feels strengthened and suppler.",
                    ingredients: "Aqua/Water/Eau, Glycerin, Propanediol, Alcohol Denat., Fagus Sylvatica Bud Extract, Sodium Hyaluronate, Benzyl Alcohol, Xanthan Gum, Salicylic Acid, Sodium Hydroxide, Adenosine, Parfum/Fragrance, Leontopodium Alpinum Callus Culture Extract, Linalool, Crithmum Maritimum Extract, Eryngium Maritimum Extract, Orbignya Oleifera Seed Oil, Citronellol, Malva Sylvestris Flower Extract/Mallow Flower Extract, Benzoic Acid, Sorbic Acid, Citric Acid, Limonene, Sodium Benzoate, Potassium Sorbate.",
                    howToUse: "Gently massage two to three drops into skin, and allow to sink in before applying your usual moisturiser or serum.",
                },
                {
                    name: "Skin Defence Multi-Protection Essence",
                    price: "P1,495",
                    image: product4,
                    link: "skin-defence-multi-protection-essence",
                    desc: "This Multi-Protection Essence is a strong facial SPF that’s designed to combat the harmful rays of the sun (it has both UVA and UVB protection!). As a plus, its non-greasy milk-to-water formula will leave your face looking bright and extremely moisturized.",
                    pros: ["UVA Protection: PA++++: Helps protect skin from UVA rays, including long UVA rays, which reach deep within the skin and accelerate the process of skin ageing.", "UVB protection: SPF 50 helps protect skin from UVB rays that trigger redness and damage the skin’s surface.", "Anti-dullness: With red algae extract and vitamin C to brighten skin for a more luminous complexion."],
                    whatToLove: "From the effects of the sun to the environment we live in - we’re constantly facing daily aggressors that can damage our skin. Introducing NEW Skin Defence Multi-Protection Essence SPF 50 PA++++, our strongest multi-protection to help protect your skin day after day. A feather light, milk-to-water essence with broad spectrum UV filters, brightening red algae and antioxidant Vitamin C, to help protect skin against multiple skin aggressors, while providing utmost comfort.",
                    ingredients: "Aqua/Water/Eau, Alcohol Denat., Ethylhexyl Methoxycinnamate, Neopentyl Glycol Diheptanoate, Butyl Methoxydibenzoylmethane, Butylene Glycol, Dimethicone, Glycerin, Polymethyl Methacrylate, Cetearyl Alcohol, Phenoxyethanol, Octocrylene, Chlorphenesin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Cetearyl Glucoside, Sclerocarya Birrea Seed Oil, Parfum/Fragrance, 3-O-Ethyl Ascorbic Acid, Sodium Hydroxide, Palmaria Palmata Extract, Carbomer, Linalool, Tocopherol, Limonene, Citronellol.",
                    howToUse: "Apply onto face and neck, and gently massage onto skin every morning after your daily moisturiser, before applying make-up. Avoiding the eye area, this product is best applied as part of your morning regime, or before exposure to UV.",
                },
                {
                    name: "Lip & Cheek Stain",
                    price: "P 795",
                    image: product5,
                    link: "lip-and-cheek-stain",
                    desc: "The formula isn’t too runny so it makes it easy to blend, and all the colors are buildable to give you that natural-looking flush!",
                    pros: ["For lips and cheeks", "Natural effect", "Dermatologically tested"],
                    whatToLove: "Embrace a naturally flushed finish. Our stunning nature inspired shades give a fresh healthy look and 12 hours of hydration for all skin tones. From dusty rose to red pomegranate, each one blends effortlessly for a gorgeous glow. Enriched with a blend of community trade honey and 100% organic community trade aloe vera, this lightweight formula gives lips and cheeks a non-drying, comfortable and long-lasting kiss of colour.",
                    ingredients: "Aqua, Glycerin, Phenoxyethanol, Panthenol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Methylparaben, Aminomethyl Propanol, CI 17200.",
                    howToUse: "Dab onto lips or cheeks straight from the applicator. Blend using clean fingertips. Re-apply for added intensity.",
                },
                {
                    name: "British Rose Body Yogurt",
                    price: "P 750",
                    image: product6,
                    link: "british-rose-body-yogurt",
                    desc: "The Body Shop’s Body Yogurt has a gel-cream formula that’s lightweight and easily absorbs into the skin. It’s a great alternative for those who aren’t keen on the stickiness of your typical body lotion. It's got a subtle rose scent, and it leaves skin feeling smooth and hydrated for up to 48 hours.",
                    pros: ["NEW lightweight, fast-absorbing gel-cream formula", "100% vegan", "48hr moisture", "Enriched with rose extract from England and Community Trade organic almond milk from Spain", "87% agree the formula absorbs instantly*", "86% like that the formula works on damp skin*"],
                    whatToLove: "Life’s too short for waiting - jump straight into your jeans with our British Rose Body Yogurt. The new, lightweight formula absorbs instantly and provides up to 48 hours of moisture. Apply to damp skin straight after showering for skin that feels smoother and never sticky, smelling like a bouquet of roses. The gel-cream is 100% vegan, enriched with rose extract from England and Community Trade organic almond milk from Spain.",
                    ingredients: "Aqua, Glycerin, Alcohol Denat., Dimethicone, Butylene Glycol, Parfum, Phenoxyethanol, Carbomer, PEG-100 Stearate, Glyceryl Stearate, Butyrospermum Parkii Butter, Dimethiconol, Caprylyl Glycol, Sodium Hydroxide, Benzyl Salicylate, Sodium Hyaluronate, Limonene, Benzyl Alcohol, Citronellol, Geraniol, Linalool, Alpha-Isomethyl Ionone, Rose Extract, Prunus Amygdalus Dulcis Seed Extract, Xanthan Gum, Citric Acid, Sodium Benzoate, Potassium Sorbate, Dehydroacetic Acid, CI 14700, CI 19140.",
                    howToUse: "Massage into skin whenever you need a hit of hydration. You can even apply it straight onto damp skin after showering.",
                },
                {
                    name: "Ginger Shampoo",
                    price: "P 450",
                    image: product7,
                    link: "giner-shampoo",
                    desc: "The Ginger Haircare Range by The Body Shop is formulated with ginger root extract to strengthen hair follicles as well as willow bark extract and honey, which both help in exfoliating the scalp and keeping it hydrated.",
                    pros: ["NEW lightweight, fast-absorbing gel-cream formula 100% vegan 48hr moisture Enriched with rose extract from England and Community Trade organic almond milk from Spain 87% agree the formula absorbs instantly* 86% like that the formula works on damp skin* 3 in 4 agree they can put their jeans on straight after application* 95% agree skin feels moisturised* 81% agree skin appears radiant* *User trial on 104 women & men."],
                    whatToLove: "Life’s too short for waiting - jump straight into your jeans with our British Rose Body Yogurt. The new, lightweight formula absorbs instantly and provides up to 48 hours of moisture. Apply to damp skin straight after showering for skin that feels smoother and never sticky, smelling like a bouquet of roses. The gel-cream is 100% vegan, enriched with rose extract from England and Community Trade organic almond milk from Spain.",
                    ingredients: "Aqua, Glycerin, Alcohol Denat., Dimethicone, Butylene Glycol, Parfum, Phenoxyethanol, Carbomer, PEG-100 Stearate, Glyceryl Stearate, Butyrospermum Parkii Butter, Dimethiconol, Caprylyl Glycol, Sodium Hydroxide, Benzyl Salicylate, Sodium Hyaluronate, Limonene, Benzyl Alcohol, Citronellol, Geraniol, Linalool, Alpha-Isomethyl Ionone, Rose Extract, Prunus Amygdalus Dulcis Seed Extract, Xanthan Gum, Citric Acid, Sodium Benzoate, Potassium Sorbate, Dehydroacetic Acid, CI 14700, CI 19140.",
                    howToUse: "Massage into skin whenever you need a hit of hydration. You can even apply it straight onto damp skin after showering.",
                },
                {
                    name: "White Musk Fragrance Mist",
                    price: "P 995",
                    image: product8,
                    link: "white-musk-fragrance-mist",
                    desc: "Our sensual White Musk® fragrance in an all-over body mist. The lighter version of our iconic scent unites notes of musk with rose, jasmine, amber and wood.",
                    pros: ["All-over spritz", "Contains cruelty-free synthetic musk"],
                    whatToLove: "This mist is a lighter version of the Eau De Parfum variant, making it more suitable for everyday use. It has notes of musk, rose, amber, and wood, giving you a clean and refreshing scent. Some even say it gets better as the day goes by!",
                    ingredients: "Alcohol (Solvent/Diluent), Aqua/Water (Solvent/Diluent), Alcohol Denat. (Solvent/Diluent), Parfum/Fragrance (Fragrance), Butylphenyl Methylpropional (Fragrance Ingredient), Hydroxyisohexyl 3-Cyclohexene Carboxaldehyde (Fragrance Ingredient), t-Butyl Alcohol (Denaturant), Hexyl Cinnamal (Fragrance Ingredient), Linalool (Fragrance Ingredient), Alpha-Isomethyl Ionone (Fragrance Ingredient), Hydroxycitronellal (Fragrance Ingredient), Coumarin (Fragrance Ingredient), Benzyl Benzoate (Fragrance Ingredient), Isoeugenol (Fragrance Ingredient), Denatonium Benzoate (Denaturant).",
                    howToUse: "Spritz over the body after bathing or showering. Top up throughout the day.",
                },
                {
                    name: "Skin Defence Mist",
                    price: "P 1,695",
                    image: product9,
                    link: "skin-defence-mist",
                    desc: "Unlike other kinds of skin protection, this Skin Defence Multi-Protection Face Mist is feels like nothing on the skin, so you can spray it on top of makeup—allowing you to easily reapply sunscreen throughout the day. It helps protect skin against UVA and UVB rays as well as pollution, while helping it appear brighter and more radiant. This product is enriched with marula oil, red algae extract, and vitamin C, to help nourish skin.",
                    pros: ["Multi-protection face mist with SPF30 PA++", "Anti-pollution and anti-dullness", "Easy to use", "Dermatologically tested", "Suitable for all skin types", "Non-comedogenic", "Enriched with Community Trade marula oil from Namibia", "100% vegan"],
                    whatToLove: "Feel free with this super-lightweight, multi-protection face mist with SPF30 PA++ and help protect skin from harmful UVA and UVB rays and pollution particles too. The cloud-like mist forms an invisible protective film without leaving the skin feeling sticky and greasy. Enriched with red algae extract and vitamin C, the mist helps brighten your skin’s appearance for a radiant look. So easy to use on the go, help to protect your skin without smudging your make-up for any adventure.",
                    ingredients: "Alcohol Denat., Homosalate, Octocrylene, Ethylhexyl Methoxycinnamate, Butyl Methoxydibenzoylmethane, Diisopropyl Adipate, Ethylhexyl Salicylate, Acrylates/Octylacrylamide Copolymer, Parfum/ Fragrance, Tetrahexyldecyl Ascorbate, Tocopheryl Acetate, Sclerocarya Birrea Seed Oil, Aqua/Water/ Eau,Helianthus Annuus Seed Oil/Helianthus Annuus (Sunflower) Seed Oil, Linalool, Palmaria Palmata Extract, BHT, Limonene, Citronellol, Geraniol.",
                    howToUse: "Use the Skin Defence Multi-Protection Face Mist SPF30 PA++ in the morning on clean, dry skin before applying make up. Shake well before use. Pull hair back, close your eyes and tuck in lips. Apply liberally - spray 7-8 pumps onto your face from 20 cm (8 inches) away. Keep your eyes closed for about 5 seconds after application. Rub in and allow 15-20 minutes before applying make-up. Top up at least every 2 hours by spraying over make-up, to help your skin stay protected throughout the day.",
                },
                {
                    name: "Fresh Nude BB",
                    price: "P 995",
                    image: product10,
                    link: "fresh-nude-bb",
                    desc: "The Body Shop’s Fresh Nude BB Cream is a lightweight, multi-tasking beauty balm. It promises to give you lasting coverage, while keeping your face hydrated and safe from the sun. It’s also 100% vegan and works great for those with sensitive skin.",
                    pros: ["24-hour hydration", "Transfer and sweat resistant", "No-flashback UVA/UVB protection", "Enriched with Community Trade organic aloe vera from Mexico"],
                    whatToLove: "Want that naturally confident, fresh-faced look? Our multi-tasking beauty balm will give you a light, even coverage with a boost of hydration for a lasting, luminous finish. This effortless make-up essential is comfortable and non-greasy with a lightweight formula that matches to most skin tones perfectly. It’s super quick and easy to use so you can get soft, healthy-looking skin in seconds.",
                    ingredients: "Aqua / Water / Eau, Butylene Glycol, C12-15 Alkyl Benzoate, Glycerin, Ethylhexyl Methoxycinnamate, Titanium Dioxide, Octocrylene, PEG-8, Argilla / Magnesium Aluminum Silicate, Butyl Methoxydibenzoylmethane, Cetyl Alcohol, Stearic Acid, Palmitic Acid, Talc, Sodium Cetearyl Sulfate, Phenoxyethanol, Sclerocarya Birrea Seed Oil, Alumina, Xanthan Gum, Chlorphenesin, Tocopheryl Acetate, Sodium Citrate, Cellulose Gum, Parfum / Fragrance, Sodium Hydroxide, Trisodium Ethylenediamine Disuccinate, Myristic Acid, Arachidic Acid, Lauric Acid, Aloe Barbadensis Leaf Juice Powder, BHT. [+/- CI 77891 / Titanium Dioxide, CI 77492 / Iron Oxides, CI 77491 / Iron Oxides, CI 77499 / Iron Oxides].",
                    howToUse: "Apply on top of or instead of your daily moisturiser using your fingers or our Fresh Nude Foundation Brush. Looking for extra coverage? Use it as a moisturising base under our Fresh Nude Foundation. For a matte finish, you can also mix it with our Instamatte.",
                },
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
                <Image src={abstract6Forground} className="product-image-forground" />
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
                                                        desc: data.desc,
                                                        pros: data.pros,
                                                        whatToLove: data.whatToLove,
                                                        ingredients: data.ingredients,
                                                        howToUse: data.howToUse
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