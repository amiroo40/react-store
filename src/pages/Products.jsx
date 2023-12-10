import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setError, setLoading, searchProduct } from "../redux/products/action";
import { useNavigate } from "react-router-dom";
import { addCart } from "../redux/cart/action";
import Nav from 'react-bootstrap/Nav';
import "../style/products.css"

const Products = () => {

    const [currentCategory, setCurrentCategory] = useState("All");
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)
    const { error } = useSelector(state => state.products)
    const { loading } = useSelector(state => state.products)

    const fetchProducts = useCallback(async () => {
        dispatch(setLoading(true))
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            dispatch(setProducts(res.data))
            dispatch(setError(null))
            dispatch(setLoading(false))

        } catch (err) {
            dispatch(setError(err.message))
            dispatch(setLoading(false))
        }
    }, [dispatch])

    useEffect(() => {

        (async () => {
            await fetchProducts()
        })()

    }, [fetchProducts])

    const navigate = useNavigate()

    function handleTabClick(category) {
        setCurrentCategory(category);
    }

    function handleClick(productId) {
        navigate(`/products/${productId}`)
    }

    function handleAddCart(product) {
        dispatch(addCart(product))
    }


    const handleFilterProduct = useCallback((value)=> {
        dispatch(searchProduct(value));
    },[dispatch])

    return (
        <>
            {error && <h3>{error}</h3>}
            {loading && <div className="mt-5 text-center"><div className="spinner-border"></div></div>}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <Nav variant="tabs" defaultActiveKey="link-1">
                            <Nav.Item>
                                <Nav.Link onClick={() => { handleTabClick("All") }} eventKey="link-1">All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { handleTabClick("men's clothing") }} eventKey="link-2">Men's clothes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { handleTabClick("women's clothing") }} eventKey="link-3">women's clothes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { handleTabClick("jewelery") }} eventKey="link-4">Jewelery</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { handleTabClick("electronics") }} eventKey="link-5">Electronics</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="col-md-6">
                        <form className="search-form text-center mt-3">
                            <div className="search-container">
                                <input onChange={(e) => handleFilterProduct(e.target.value)} className="search-input" type="search" name="" id="" placeholder="search product ..." />
                                <button className="search-button btn btn-outline-success">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="product-section">
                    <div className="row g-1">
                        {products && products.filter(product => currentCategory === "All" || product.category === currentCategory).map(product => (
                            <div key={product.id} className="col-md-3 col-sm-6 col-sx-12">
                                <div className="product-cart">
                                    <div onClick={() => handleClick(product.id)} className="product-cart-body">
                                        <div className="image-container">
                                            <img className="cart-image" src={product.image} alt="" />
                                            <div className="product-rate">
                                                <i className="product-star bi bi-star-fill"></i>
                                                <span className="product-score">{product.rating.rate}</span>
                                            </div>
                                        </div>
                                        <div className="cart-title">
                                            {product.title}
                                        </div>
                                        <div className="product-price">
                                            <span>price : {product.price} $</span>
                                        </div>
                                    </div>
                                    <div className="cart-button">
                                        <div className="left">
                                            <button onClick={() => handleAddCart(product)} className="btn btn-dark btn-sm">Add to cart</button>
                                        </div>
                                        <div className="right">
                                            <button className="btn btn-success btn-sm">Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;