import {storeProducts} from '../shared/data'
import { ADD_TO_CART, REMOVE_TO_CART } from './ActionTypes'

export const Products = (state = {lesProduits : storeProducts},action) => {
    
    switch(action.type){
        case ADD_TO_CART:
        return {
            ...state, lesProduits : state.lesProduits.map(p => p === action.payload.product ? {...p, inCart:true}: true)
        }
        case  REMOVE_TO_CART: 
        return {
            
        }
        default:
            return state
    }
}