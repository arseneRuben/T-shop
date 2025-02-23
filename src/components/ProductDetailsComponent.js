import React from "react";
import Title from "./TitleComponent";
import { Link } from "react-router-dom";
import {Button, Card, CardBody, CardImg, CardHeader, CardText, Row, Col, CardTitle } from "reactstrap";

function ProductDetails(props) {
        if(props.product != null){
            const {id, title, img, price, info,inCart, promo} = props.product;

            return (
                <div className="container">
                    <Row>
                        <Col sm="12" md="6">
                            <Card className="my-4">
                                <CardImg src={img}  top width="75%" alt={title}/>
                                <CardBody>
                                    <CardTitle> Description</CardTitle>
                                    <CardText>{info}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md={{size:4, offset:2}}>
                            <Card className="my-4">
                                <CardHeader>
                                    <h2 className="text-center text-yellow">{title}</h2>

                                </CardHeader>
                                <CardBody>
                                    <CardText>
                                        <strong className="text-yellow text-center">price : {price}$</strong> 
                                    </CardText>
                                    <div className="d-flex justify-content-center">
                                        <Button outline className="btn-perso1" onClick={() => {inCart ? console.log("incart"): props.addToCart(props.product)}}>Acheter</Button>
                                        <Link to="/home">
                                            <Button outline className="ml-5 btn-perso1">Retourner</Button>
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            );
         } else {
            return (
                <div className="container">
                   <h3>Null from details</h3>
                </div>
            );
         }
    
}

export default ProductDetails;