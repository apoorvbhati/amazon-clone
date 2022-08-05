import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';

import { useStateValue } from '../../Context/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct.component';
import { basketTotal } from '../../Context/reducer';
import axios from '../../axios';

import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

import './Payment.styles.css';

const Payment = () => {
  const [state, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  // The dependency is the basket cause whenever the basket is changed we say that the secret also changes
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${basketTotal(state.basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
      // console.log(response);
    }

    getClientSecret();
  }, [state.basket])
  
  console.log('The secret is >>>', clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(async (result) => {
      // paymentIntent = payment confirmation

      // db
      // .collection('users')
      // .doc(state.user?.uid)
      // .collection('orders')
      // .doc(paymentIntent.id)
      // .set({
      //     basket: state.basket,
      //     amount: paymentIntent.amount,
      //     created: paymentIntent.created
      // })

      console.log(result.error.payment_intent.amount);
      console.log(state.basket);
      // await setDoc(doc(db, 'users', '1'), {
      //   basket: state.basket,
      //   amount: result?.error?.paymentIntent?.amount,
      //   created: result?.error?.paymentIntent?.created
      // });

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      // dispatch({
      //   type: 'EMPTY_BASKET'
      // })

      navigate('/orders', { replace: true });
    })
    // console.log(payload.error.payment_intent);
  }

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to='/checkout'>{state?.basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{state?.user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angelas, CA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {state.basket.map(item => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>

              <div className="payment__priceContainer">
                <CurrencyFormat 
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={basketTotal(state.basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>

              {error && <div>error</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;