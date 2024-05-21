import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import './pay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCreditCard, faCalendarAlt, faLock } from '@fortawesome/free-solid-svg-icons';


const PaymentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormData({
      name: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
    })

    if (localStorage.getItem('paymentSuccess') === 'true') {
      alert('You are already a Subscribed Member');
      return;
    }
 
    if (formData.cardNumber.length != 12) {
       alert("Invalid card number");
       return;
    }

    if (formData.cvv.length != 3) {
    alert("Invalid Card CVV");
    return;
    }

    alert("Payment SuccessFull !")
    localStorage.setItem('paymentSuccess', true);
    navigate("/");
    window.location.reload();
  };


  return (
    // <div className='exp'>
 
    <div>
     <div className='exp1'> The subscription model of the self-care website is designed to provide a comprehensive, personalized,
     and engaging experience for users seeking to enhance their well-being. By offering various tiers, the website
      caters to different needs and budgets, ensuring that everyone can find value and support in their self-care journey with just a minimum amount of ₹100 per month.
      </div>
      <div className='exp'>
    <div className="payment-container">
      <h2>Payment Information</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="XYZ"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <div className="input-group">
            <FontAwesomeIcon icon={faCreditCard} />
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="expiry">Expiration Date</label>
          <div className="input-group">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <input
              type="date"
              id="expiry"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default PaymentForm;