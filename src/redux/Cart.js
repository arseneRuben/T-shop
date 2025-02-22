import {storeProducts} from '../shared/data'

export const Cart = (state = {lesProduitsInCart : storeProducts ,nbProduit : 0},action) => {
    switch(action.type){
        default:
            return state
    }
}