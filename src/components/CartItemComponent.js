import React, { Component } from "react";
import { Button } from "reactstrap";

function CartItem(props) {
        const {id, title, img, price, count, promo} = props.product;
        promo === 0 ? price = price : price = ((100-promo)*price)/100;
        return (
            <div className="container-fluid text-center">
                <div className="row my-2 mx-1 cartItem">
                    <div className="col-2 mx-auto">
                        <img className="img-fluig" src={img} width="100" />
                    </div>
                    <div className="col-2 mx-auto">
                        <p className="text-uppercase">{titel}</p>
                    </div>
                    <div className="col-2 mx-auto">
                        <p className="font-weight-bold">{price}</p>
                    </div>
                    <div className="col-2 my-lg-auto">
                        <Button className="btn btn-primary outiline buttonCart"><span className="fa fa-plus"></span></Button>
                        <Button  className="btn btn-primary outiline buttonCart buttonCart-middle" ><span>{count}</span></Button>
                        <Button className="btn btn-primary outiline buttonCart"><span className="fa fa-minus"></span></Button>
                    </div>
                    <div className="col-2 mx-auto my-3">
                         <Button className="btn btn-primary outiline buttonCart"><span className="fa fa-times m-auto"></span></Button>
                    </div>
                    <div className="col-2 mx-auto">
                         <p className="font-weight-bold">{count*price}</p>
                    </div>
                </div>
            </div>
        );
    
}

export default CartItem;