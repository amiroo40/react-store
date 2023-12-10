import { useDispatch, useSelector } from "react-redux";

const FilterProducts = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products)
    const filterProducts = [...products]

    return (
        <>
            <div className="container mt-3">
                {filterProducts.map(product => (
                    <div key={product.id} className="col-md-3 col-sm-6 col-sx-12">
                        <div className="product-cart">
                            <div className="product-cart-body">
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
                                    <button className="btn btn-dark btn-sm">Add to cart</button>
                                </div>
                                <div className="right">
                                    <button className="btn btn-success btn-sm">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FilterProducts;