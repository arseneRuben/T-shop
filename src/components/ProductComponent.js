import React, { Component } from "react";
import { Link } from "react-router-dom";
export const Price = ({promo, price}) => {
    if(promo === 0){
        return <span className="new-price">{price}$</span>
    } else if(promo>0) {
        return (
            <>
                <span className="new-price">{((100-promo)/100)*price}$</span>
                <span className="old-price"> {price}$  </span>
            </>
        )
    }
}
 
class Product extends Component {
        constructor(props){
            super(props)
        }
        render(){
            const {id, title, img, price, inCart, promo} = this.props.caracteristique;

            return (
                <div className="col-lg-3 col-md-4  col-12" >
                    <div className="product-grid mb-4">
                        <div className="product-img">
                            <Link to={`/home/${id}`}>
                                <img className="pic-1 img-responsive" src={img} />
                                    {
                                        promo >0 ?
                                        <>
                                            <span className="product-new-label">promo</span>
                                            <span className="product-discount-label">-{promo}%</span>

                                        </>
                                        :
                                        null
                                    }
                            </Link>
                        </div>
                        <div className="product-content">
                            <h4 className="title text-center">{title}</h4>
                            <div className="price text-center">
                                <Price promo={promo} price={price}/>
                            </div>
                            <ul className="action-product list-unstyled">
                                <li className="text-center"> <Link to={`/home/${id}`}> <i className="fa fa-search"></i></Link></li>
                                <li className="ml-4 text-center"> <Link to="/cart"> <i className="fa fa-shopping-cart" onClick={() => {inCart ? console.log("incart"): this.props.addToCart(this.props.caracteristique)}}></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
}

export default Product;