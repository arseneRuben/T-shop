import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import {addToCart, removeToCart, addQuantity, removeQuantity} from "../redux/ActionCreator";
import {Route, Routes, useParams} from "react-router-dom"
import Contact from "./ContactComponent";
import Cart from "./CartComponent";
import {connect} from "react-redux"
import ProductDetails from "./ProductDetailsComponent";

const mapStateToProps = state => {
    return (
        {
            products : state.Products,
            productsInCart : state.Cart
        }
    )
}

const mapDispatchToProps = dispath => ({
    addToCart : (product) => dispath(addToCart(product)),
    removeToCart : (id) => dispath(removeToCart(id)),
    addQuantity : (id) => dispath(addQuantity(id)),
    removeQuantity : (id) => dispath(removeQuantity(id))
});

class Main extends Component {
    render(){
        const ProductWithId = () => {
            const { pId } = useParams()
            return (
                <ProductDetails product={this.props.products.lesProduits.filter(p => p.id === parseInt(pId))[0]}  addToCart={this.props.addToCart}/>
            )
        }
        return (
            <>
                <Header  nbProduit={this.props.productsInCart.nbProduit}/>
               
                 <Routes>
                    <Route       path="/home/:pId"  element={<ProductWithId/>}/> 
                    <Route exact path="/home"       element={<Home  products={this.props.products.lesProduits} addToCart={this.props.addToCart}/>}/> 
                    <Route exact path="/contact"    element={<Contact/>}/> 
                    <Route       path="/cart"       element={<Cart  productsInCart={this.props.productsInCart.lesProduitsInCart} removeToCart={this.props.removeToCart}  addQuantity={this.props.addQuantity} removeQuantity={this.props.removeQuantity}/>}/> 
                    
                 </Routes>
            </>
           
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);