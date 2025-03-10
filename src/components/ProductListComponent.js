import React from "react";
import Product from "./ProductComponent";

export default class ProductList extends React.Component {
    constructor(props){
        super(props)
    }

    theProducts(){
        if(this.props.products!=null){

            return(
                <div className="row">
                    {this.props.products.map((p,index) =>{
                        return <Product key={index} caracteristique = {p} addToCart={this.props.addToCart}/>
                     })}
                </div>
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