import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART ,DECREMENT,INCREMENT } from "./actionType";

export function addCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export function removeCart(productId) {
    return {
        type: REMOVE_FROM_CART,
        payload: productId
    }
}
export function clearCart() {
    return {
        type: CLEAR_CART
    }
}


export function increment(productId){
    return{
        type:INCREMENT,
        payload:productId
    }
}

export function decrement(productId){
    return{
        type:DECREMENT,
        payload:productId
    }
}