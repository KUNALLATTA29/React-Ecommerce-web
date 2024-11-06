import React,{useState} from 'react'
import './checkoutform.css'

export default function CheckoutForm({onClose}) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log({
          name,
          address,
          phoneNumber,
          paymentMethod,
        });
    
        setIsSubmitted(true);
      };


  return (
    <div className="checkout-modal">
      <div className="checkout-form-container">
        <button onClick={onClose} className="close-button">X</button>
        <h2>Checkout</h2>
        
        {isSubmitted ? (
          <div className="thank-you-message">
            <p>Thank you for your order!</p>
            <button onClick={onClose} className="close-button">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="credit">Credit Card/Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cod">Cash on Delivery</option>
                <option value="cod">UPI</option>
                <option value="cod">EMI</option>
              </select>
            </div>

            <button type="submit" className="submit-button">Submit Order</button>
          </form>
        )}
      </div>
    </div>
  )
}
