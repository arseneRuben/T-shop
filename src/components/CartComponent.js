import React from "react";
import Title from "./TitleComponent";
import CartHeader from "./CartHeaderComponent";
import CartItem from "./CartItemComponent";
import CartTotal from "./CartTotalComponent";

function Cart(props) {
        if(props.productsInCart != null){
                var total=0;
                props.productsInCart.forEach(p => { p.promo===0 ? total+= p.price*p.count : total+=p.count*p.price*(100-p.promo)/100  })
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
                                                        {props.productsInCart.map ( (p, id) => <CartItem key={id*10 } product={p}   removeToCart = {props.removeToCart} addQuantity={props.addQuantity} removeQuantity={props.removeQuantity}/>)}
                                                </>
                                        }
                                </div>
                        </div>
                        { props.productsInCart.length === 0 ? null : <CartTotal total={total}/>}
                        </>
                );
        } else {
                return (
                       <div className="container text-center"> cart is null</div>
                ); 
        }
        
    
}

export default Cart;