import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

import Home from "./HomeComponent";
import {addToCart, removeToCart, addQuantity, removeQuantity} from "../redux/ActionCreator";
import {Route, Routes, useParams} from "react-router-dom"
import Contact from "./ContactComponent";
import Cart from "./CartComponent";
import {connect} from "react-redux"
import ProductDetails from "./ProductDetailsComponent";
import Category from "./CategoryComponent";
import Search from "./SearchComponent";

const mapStateToProps = state => {
    return (
        {
            products : state.Products,
            productsInCart : state.Cart,
            category : state.storeCategory
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
    constructor(props){
        super(props)

        this.state = {
            search : ''
        }
        this.research = this.research.bind(this);
    }

    research(value){
        this.setState({search:value})
    }

    render(){
        const ProductWithId = () => {
            const { pId } = useParams()
            return (
                <ProductDetails product={this.props.products.lesProduits.filter(p => p.id === parseInt(pId))[0]}  addToCart={this.props.addToCart}/>
            )
        }

        const CategoryWithId = () => {
            const { cId } = useParams()

            return (
                <Category products={this.props.products.lesProduits.filter(p => p.category_id === parseInt(cId))}  addToCart={this.props.addToCart} name={this.props.category.filter(c => c.id === parseInt(cId))[0].name} />
            )
        }

        return (
            <>
                <Header  nbProduit={this.props.productsInCart.nbProduit} search={this.research}/>
               
                 <Routes>
                    <Route exact path="/home/search"    element={<Search  searchValue={this.state.search} addToCart={this.props.addToCart} products={this.props.products.lesProduits}/>}/> 
                    <Route       path="/home/:pId"  element={<ProductWithId/>}/> 
                    <Route exact path="/home"       element={<Home  products={this.props.products.lesProduits} addToCart={this.props.addToCart}/>}/> 
                    <Route exact path="/contact"    element={<Contact/>}/> 
                    <Route       path="/cart"       element={<Cart  productsInCart={this.props.productsInCart.lesProduitsInCart} removeToCart={this.props.removeToCart}  addQuantity={this.props.addQuantity} removeQuantity={this.props.removeQuantity}/>}/> 
                    <Route       path="/category/:cId"  element={<CategoryWithId/>}/> 


                 </Routes>
                
                 <Footer/>
                 <a href="#" className="goToTopBtn"> <i className="fa-solid fa-arrow-up"></i></a>

            </>
           
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);