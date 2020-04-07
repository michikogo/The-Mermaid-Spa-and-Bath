import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, CardDeck, Col, Row } from 'react-bootstrap';
import { product1, product2, product3, product4, product5, product6, product7, product8, product9, product10 } from '../../../image';
import { BrowserRouter, Route } from "react-router-dom";

import Header from '../../../common/header';
import Footer from '../../../common/footer';
import Home from "../../Home";
import Products from "../Products";

// Normal React Alternative 
// class ProductSpecific extends Component{
//     constructor(props){
//         super(props)
//         console.log(this.props.location)
//     }
//     render(){
//         return(
//             < Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
//             <Header />
//             <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px" }}>
//                 <p>Hello</p>
//                 {/* <p>{this.props.location.query}</p> */}
//             </Container>
//             <Footer />
//         </Container >
//         );
//     }
// }

// React Hook
const ProductSpecific = props => {

    console.log(props.location.state)
    return (
        < Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Header />
            <Container fluid style={{ paddingLeft: "150px", paddingRight: "150px" }}>
                <p>
                    The name of the product is {props.location.state.name}
                    The price is {props.location.state.price}
                    The image is {props.location.state.image}
                    The description is {props.location.state.desc}
                </p>
            </Container>
            <Footer />
        </Container >
    );

}

export default ProductSpecific;