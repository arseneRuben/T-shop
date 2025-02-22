import { ADD_TO_CART } from './ActionTypes'
export const Cart = (state = {lesProduitsInCart : [] ,nbProduit : 0},action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {...state, lesProduitsInCart: state.lesProduitsInCart.concat(action.payload.product), nbProduit: state.nbProduit+1}
        default:
            return state
    }
}