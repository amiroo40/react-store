import cartReducer from "./cart/reducer";
import productsReducer from "./products/reducer";
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
}, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;