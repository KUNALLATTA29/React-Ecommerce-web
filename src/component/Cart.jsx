import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from '../Redux/cartSlice';
import './cart.css'; 
import CheckoutForm from './CheckoutForm';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [showCheckout, setShowCheckout] = useState(false);

    const handleBuyNow = () => {
        setShowCheckout(true);
    };

    const handleCloseCheckout = () => {
        setShowCheckout(false);
    };

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty.</p>
                </div>
            ) : (
                <div>
                    <ul className="cart-list">
                        {cart.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.thumbnail} alt={item.title} className="cart-item-image"/>
                                <div className="cart-item-details">
                                    <h2>{item.title}</h2>
                                    <p>Price: <strong>${item.price}</strong></p>
                                    <div className="quantity-controls">
                                        <button className="quantity-button" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className="quantity-button" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                    </div>
                                    <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-actions">
                        <button className="clear-cart-button" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                        <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
                    </div>
                </div>
            )}
            {showCheckout && <CheckoutForm onClose={handleCloseCheckout} />}
        </div>
    );
};

export default Cart;
