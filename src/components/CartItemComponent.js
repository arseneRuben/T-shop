import React, { Component } from "react";
import { Button } from "reactstrap";

function CartItem(props) {
        var {id, title, img, price, count, promo} = props.product;
        promo === 0 ? price = price : price = ((100-promo)*price)/100;
        return (
            <div className="container-fluid text-center" key={id}>
                <div className="row  mx-1 cartItem">
                    <div className="col-10 col-lg-2 mx-auto">
                        <img className="img-fluig" src={img} width="100" />
                    </div>
                    <div className="col-10 col-lg-2  mx-auto my-auto">
                        <p className="text-uppercase">{title}</p>
                    </div>
                    <div className="col-10 col-lg-2  mx-auto my-auto">
                        <p className="font-weight-bold">{price}</p>
                    </div>
                    <div className="col-10 col-lg-2  my-lg-auto my-3">
                        <Button className="btn btn-primary outiline buttonCart"><span className="fa fa-plus" onClick={()=>props.addQuantity(id)}></span></Button>
                        <Button  className="btn btn-primary outiline buttonCart buttonCart-middle" ><span>{count}</span></Button>
                        <Button className="btn btn-primary outiline buttonCart"><span className="fa fa-minus"  onClick={()=>props.removeQuantity(id)}></span></Button>
                    </div>
                    <div className="col-10 col-lg-2  mx-auto my-3">
                         <Button className="btn btn-primary outiline buttonCart buttonCart-delete"><span className="fa fa-times m-auto" onClick={()=>props.removeToCart(id)}></span></Button>
                    </div>
                    <div className="col-10 col-lg-2  mx-auto my-auto">
                         <p className="font-weight-bold">{count*price}</p>
                    </div>
                </div>
            </div>
        );
    
}

export default CartItem;