import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Products from "./pages/Products";
import Product from "./components/Product";
// import Footer from "./components/Footer";
import ShoppingCart from "./pages/Cart";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Navigate replace to="/" />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:productId" element={<Product />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                    </Routes>
                    {/* <Footer /> */}
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;

// "https://fakestoreapi.com/products"
// "https://fakestoreapi.com/cart"
// "https://fakestoreapi.com/users"