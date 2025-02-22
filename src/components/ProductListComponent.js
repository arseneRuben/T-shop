import React from "react";
import Product from "./ProductComponent";

export default class ProductList extends React.Component {
    constructor(props){
        super(props)
    }

    theProducts(){
        if(this.props.products != null){
            const products = this.props.products.map(p =>{
                return <Product caracteristique = {p} addToCart={this.props.addToCart}/>
            })

            return(
                <div className="row">{products}</div>
            )
        } else {
            return(<p>null</p>)
        }
    }
    render(){
        return(
            <>
                {this.theProducts()}
            </>
        )
    }
}