import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import {Route, Routes} from "react-router-dom"
import Contact from "./ContactComponent";
import Cart from "./CartComponent";
import {connect} from "react-redux"

const mapStateToProps = state => {
    return (
        {
            products : state.Products
        }
    )
}
class Main extends Component {
    render(){

        return (
            <>
                <Header/>
               
                 <Routes>
                    
                    <Route exact path="/home" element={<Home  products={this.props.products.lesProduits} />}/> 
                    <Route exact path="/contact" element={<Contact/>}/> 
                    <Route exact path="/cart" element={<Cart/>}/> 

                 </Routes>
            </>
           
        )
    }
}

export default connect(mapStateToProps)(Main);