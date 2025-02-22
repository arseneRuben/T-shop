import React, { Component } from "react";
import Title from "./TitleComponent";
import CartHeader from "./CartHeaderComponent";
import CartItem from "./CartItemComponent";
function Cart(props) {
        if(props.productsInCart != null){
                return (
                        <>
                        <Title name={"Votre"} title={"panier"}/>
                        <div className="container">
                                <div className="spaceCart">
                                        {
                                                props.productsInCart.length === 0 ? 
                                                <h1 className="text-center font-capitalize font-weight-bold"> Votre panier est vide pour le moment</h1> 
                                                :
                                                <>
                                                        <CartHeader/>
                                                        {props.productsInCart.map ( p => <CartItem product={p}/>)}
                                                </>
                                        }
                                </div>
                        </div>
                        </>
                );
        } else {
                return (
                       <div className="container text-center"> cart is null</div>
                ); 
        }
        
    
}

export default Cart;