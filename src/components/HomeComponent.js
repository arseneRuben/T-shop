import React from "react";
import Title from "./TitleComponent";
import ProductList from "./ProductListComponent";
import Principal from "./PrincipalHomeComponent";

function Home(props) {

        return (
            <div className="container">
                <Principal />
                <Title name={"Our"} title={"products"}/>
                <ProductList products={props.products} addToCart={props.addToCart}/>
            </div>
        );
    
}

export default Home;