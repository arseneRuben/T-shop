import {storeProducts} from '../shared/data'

export const Products = (state = {lesProduits : storeProducts},action) => {
    switch(action.type){
        default:
            return state
    }
}