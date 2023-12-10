import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/product.css"
import Rating from "react-rating";
import ProductRating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading } from "../redux/products/action"

const Product = () => {

    const [product, setProduct] = useState({})
    const dispatch = useDispatch()
    const { productId } = useParams()
    const { error } = useSelector(state => state.products)
    const { loading } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(setLoading(true))
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw Error(res.status)
                }
            }).then(data => {
                setProduct(data)
                dispatch(setLoading(false))
                dispatch(setError(null))
            }).catch(err => {
                dispatch(setError(err.message))
                dispatch(setLoading(false))
            })
    }, [setProduct, productId, dispatch])

    // const { rating: { rate} = {} } = product
    const rate = product.rating?.rate
    const count = product.rating?.count
    console.log(count)
    console.log(product)

    return (
        <>
            {error && <h3>{error}</h3>}
            {loading && <div className="mt-5 text-center"><div className="spinner-border"></div></div>}
            <div className="product-container">
                <div className="rating">
                    <Rating
                        start={0}
                        stop={5}
                        step={1}
                        initialRating={rate}
                        emptySymbol="product-star bi bi-star fs-3"
                        fullSymbol="product-star bi bi-star-fill fs-3"
                        fractions={1}
                        readonly
                    />
                </div>
                <h2 className="product-title">{product.title}</h2>
                <div className="row">
                    <div className="product-info">
                        <div className="col-md-4">
                            <div className="image-container">
                                <img className="product-image" src={product.image} alt="" />
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="product-des">
                                {product.description}
                                <div className="product-price">
                                    <h3>price : {product.price} $</h3>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-3">
                                    <Link className="btn btn-primary btn-sm" to="/products">Products</Link>
                                </div>
                                <div className="col-md-3">
                                    <button className="btn btn-dark btn-sm">Add to cart</button>
                                </div>
                                <div className="col-md-6">
                                    <ProductRating />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;