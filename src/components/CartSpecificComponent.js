import React, { Component } from "react";
import {  Button } from "reactstrap";

export default class CartSpecific extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible : false,
        }
    }
    render(){
        if(!this.props.mobile){
            return (
                <Button outline className="btn-perso-1">
                    Mon panier
                    <i className="fas fa-shopping-cart fa-lg" style={{fontSize : '25px'}}>
                    </i>
                      <p className="cartCount"> {this.props.nbProduit}</p>
                     
                </Button>
            )
        } else {
            return (
                <>
                <i className="fas fa-shopping-cart fa-lg" style={{fontSize : '25px'}}></i>
                     <p className="cartCount"> {this.props.nbProduit}</p>
                     </>

            )
        }
              
        
    }
}
