import { ADD_TO_CART, CLEAR_CART, DECREMENT, INCREMENT, REMOVE_FROM_CART } from "./actionType";

const initialState = {
    cart: []
}

function cartReducer(state = initialState, action) {
    let updatedCart = []
    switch (action.type) {
        case ADD_TO_CART:
            const hasProduct = state.cart.find(p => p.id === action.payload.id) ? true : false;
            updatedCart = hasProduct ? state.cart.map(p => p.id === action.payload.id ? { ...p, qty: p.qty + 1 } : p) : [...state.cart, { ...action.payload, qty: 1 }]
            return { ...state, cart: updatedCart }
        case REMOVE_FROM_CART:
            updatedCart = state.cart.filter(p => p.id !== action.payload)
            return { ...state, cart: updatedCart }
        case CLEAR_CART:
            updatedCart = []
            return { ...state, cart: updatedCart }
        case DECREMENT:
            updatedCart = state.cart.map(p => p.id === action.payload? { ...p, qty: p.qty - 1 } : p)
            return { state, cart: updatedCart }
        case INCREMENT:
            updatedCart = state.cart.map(p => p.id === action.payload? { ...p, qty: p.qty + 1 }:p)
            return { state, cart: updatedCart }
        default:
            return state;
    }
}

export default cartReducer;