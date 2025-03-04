import React from "react";
import Title from "./TitleComponent";
import ProductList from "./ProductListComponent";

function Home(props) {

        return (
            <div className="container">
                <Title name={"Our"} title={"products"}/>
                <ProductList products={props.products} addToCart={props.addToCart}/>
            </div>
        );
    
}

export default Home;