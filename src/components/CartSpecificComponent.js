import React, { Component } from "react";
import {  Button } from "reactstrap";

export default class CartSpecific extends Component {
    

    componentDidUpdate(prevProps){
        if(this.props.nbProduit !== prevProps.nbProduit){
            var visible=false;

            if(this.props.nbProduit >= 1 )
                
                visible = true;
            else
                visible = false;
                
            var elements = document.getElementsByClassName("cartCount")
            elements[0].style.display = visible ? "inline-block" : "none";
            elements[1].style.display = visible ? "inline-block" : "none";
        }
        

    }
    render(){
        if(!this.props.mobile){
            return (
                <Button outline className="btn-perso-1">
                    Panier
                    <i className="fas fa-shopping-cart fa-lg" >
                    </i>
                    <p className="cartCount"> {this.props.nbProduit}</p>
                </Button>
            )
        } else {
            return (
                <>   
                     <i className="fas fa-shopping-cart fa-lg" style={{fontSize:"25px"}}>
                        <p className="cartCount">
                            {this.props.nbProduit}
                        </p>
                    </i>
                </>

            )
        }
              
        
    }
}
