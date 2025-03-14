import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap'
import Title from './TitleComponent';
import ProductList from './ProductListComponent';

export default function Category(props) {

    return (
        <div className="container">
         
            <Title name={"Categorie"} title={props.name}/>
            <ProductList products={props.products} addToCart={props.addToCart}/>
        </div>
    );

}