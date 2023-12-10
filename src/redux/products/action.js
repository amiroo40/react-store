import { SET_PRODUCTS, SET_TOP_PRODUCTS, SET_LOADING, SET_ERROR ,SEARCH_PRODUCTS  } from "./actionType";


export function setTopProducts(products) {
    return {
        type: SET_TOP_PRODUCTS,
        payload: products
    }
}

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export function setLoading(status) {
    return {
        type: SET_LOADING,
        payload: status
    }
}

export function setError(error) {
    return {
        type: SET_ERROR,
        payload: error
    }
}

export function searchProduct(value) {
    return {
        type: SEARCH_PRODUCTS,
        payload: value
    }
}
