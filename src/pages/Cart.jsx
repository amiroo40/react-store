import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, decrement, increment, removeCart } from "../redux/cart/action"

const ShoppingCart = () => {

    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    function handleClearCart() {
        dispatch(clearCart())
    }

    function handleDeleteCart(productId) {
        dispatch(removeCart(productId))
    }

    function handleIncrement(productId) {
        dispatch(increment(productId))
    }

    function handleDecrement(productId) {
        dispatch(decrement(productId))
    }

    return (
        <>
            <h2 className="text-primary border-bottom p-3 w-25 border-3 border-opacity-75 border-primary m-3">Shopping Cart</h2>
            <Link className="btn btn-primary m-3" to="/products">Products</Link>
            {cart.length === 0 ? (
                <div className="col-md-12 text-center">
                    <div>
                        <i className="bi bi-basket-fill" style={{ fontSize: '100px' }}></i>
                    </div>
                    <h3 className="text-bold">Cart is empty</h3>
                    <Link className="btn btn-outline-dark mt-3" to="/products">Products</Link>
                </div >
            ) : (
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-12 pl-3 pt-3">
                            <table className="table table-hover border bg-white">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th style={{ width: '10%' }} >Quantity</th>
                                        <th>Subtotal</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart && cart.map((product, index) => (
                                        <tr key={index}>
                                            <td className="align-middle">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <img
                                                            src={product.image}
                                                            alt="..."
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <h5> {product.title} </h5>
                                                        {/* <p> {product.description} </p> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle">{product.price}</td>
                                            <td className="align-middle">
                                                <button onClick={() => handleIncrement(product.id)} className="btn btn-sm btn-dark me-2">
                                                    +
                                                </button>
                                                <span>{product.qty}</span>
                                                <button disabled={product.qty > 1 ? false : true} onClick={() => handleDecrement(product.id)} className="btn btn-sm btn-dark ms-2">
                                                    -
                                                </button>
                                            </td>
                                            <td className="align-middle">{Number((product.price * product.qty).toFixed(2))}</td>
                                            <td className="align-middle" style={{ width: '15%' }}>
                                                <button onClick={() => handleDeleteCart(product.id)} className="btn btn-danger btn-sm">delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>
                                            <button onClick={() => { handleClearCart() }} className="btn btn-dark">Clear Cart</button>
                                        </td>
                                        <td colSpan="2" className="hidden-xs"></td>
                                        <td className="hidden-xs text-center" style={{ width: '15%' }}>
                                            <strong>Total : {cart.reduce((total, product) => {
                                                total = total + product.price * product.qty
                                                return Number(total.toFixed(2))
                                            }, 0)}</strong>
                                        </td>
                                        <td>
                                            <a href="/" className="btn btn-success btn-block">Checkout</a>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

}

export default ShoppingCart;