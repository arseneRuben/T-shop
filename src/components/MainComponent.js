import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import {Route, Routes, useParams} from "react-router-dom"
import Contact from "./ContactComponent";
import Cart from "./CartComponent";
import {connect} from "react-redux"
import ProductDetails from "./ProductDetailsComponent";

const mapStateToProps = state => {
    return (
        {
            products : state.Products
        }
    )
}
class Main extends Component {
    render(){
        const ProductWithId = () => {
            const { pId } = useParams()
            return (
                <ProductDetails product={this.props.products.lesProduits.filter(p => p.id === parseInt(pId))[0]}/>
            )
        }
        return (
            <>
                <Header/>
               
                 <Routes>
                    <Route  path="/home/:pId" element={<ProductWithId/>}/> 
                    <Route exact path="/home" element={<Home  products={this.props.products.lesProduits} />}/> 
                    <Route exact path="/contact" element={<Contact/>}/> 
                    <Route exact path="/cart" element={<Cart/>}/> 
                    
                 </Routes>
            </>
           
        )
    }
}

export default connect(mapStateToProps)(Main);