import React from 'react';
import { useStateValue } from '../../Context/StateProvider';

import './CheckoutProduct.styles.css';

const CheckoutProduct = ({ id, title, image, price, rating, hidebutton }) => {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({ type: 'REMOVE_FROM_BASKET', id: id});
  }

  return (
    <div className="checkoutProduct">
      <img 
        src={image} 
        alt={title} 
        className="checkoutProduct__image" 
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => {
            return <p>⭐️</p>
          })}
        </div>
        {!hidebutton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  )
}

export default CheckoutProduct;