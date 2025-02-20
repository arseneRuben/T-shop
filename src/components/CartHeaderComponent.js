import React, { Component } from "react";

function CartHeader() {
        return (
            <div className="container-fluid text-center d-none d-lg-block py-2">
                <div className="row">
                    <div className="col-2 mx-auto">
                        <p className="text-uppercase"> Produit</p>
                    </div>
                    <div className="col-2 mx-auto">
                        <p className="text-uppercase">Nom du produit</p>
                    </div>
                    <div className="col-2 mx-auto">
                        <p className="text-uppercase"> prix unitaire</p>
                    </div>
                    <div className="col-2 mx-auto">
                        <p className="text-uppercase"> quantite</p>
                    </div>
                    <div className="col-2 mx-auto">
                        <p className="text-uppercase"> supprimer</p>
                    </div>
                    <div className="col-2 mx-auto">
                        <p className="text-uppercase"> p.total</p>
                    </div>
                </div>
            </div>
        );
    
}

export default CartHeader;