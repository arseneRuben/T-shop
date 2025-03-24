import React from 'react';
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