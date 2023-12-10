import { SET_PRODUCTS, SET_TOP_PRODUCTS, SET_LOADING, SET_ERROR, SEARCH_PRODUCTS } from "./actionType";

const initialState = {
    products: [],
    loading: false,
    error: null
}

function productsReducer(state = initialState, action) {
    let updatedProduct = []
    switch (action.type) {

        case SET_TOP_PRODUCTS:
            return { ...state, products: action.payload }

        case SET_PRODUCTS:
            return { ...state, products: action.payload }

        case SET_LOADING:
            return { ...state, loading: action.payload }

        case SET_ERROR:
            return { ...state, error: action.payload }

        case SEARCH_PRODUCTS:
            const hasValue = action.payload !== "" ? true : false;
            const newProducts = [...state.products]
            updatedProduct = hasValue ? newProducts.filter(p => p.title.includes(action.payload)) : state.products;
            return { ...state, products: updatedProduct }

        default:
            return state
    }
}

export default productsReducer;