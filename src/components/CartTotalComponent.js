import React from "react";
import {  Button} from "reactstrap";
import { Link, NavLink } from "react-router-dom";

function CartTotal(props){
    return (
        <div className="row totalRow mt-lg-5">
            <div className="col-12 col-md-4">
                <p className="font-capitalize font-weight-bold text-total text-center">
                    total : <strong>{props.total}</strong>
                </p>
                <p className="font-capitalize font-weight-bold text-total text-center">
                  <strong className="text-center">*</strong>{' '}  Les frais d'expedition sont non inclus pour le moment
                </p>
                
            </div>
            <div className="col-12 col-md-8 my-0">
                <div className="row">
                    <div className="col-6 d-flex justify-content-center">
                        <Link to="/home">
                            <Button className="totalButton mx-auto"> Poursuivre mes achats</Button>
                        </Link>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                            <Button className="totalButton mx-auto">Valider ma commande</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartTotal