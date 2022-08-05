import React from 'react';
import moment from 'moment';

import './Order.styles.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct.component';

const Order = ({ order }) => {
  return (
    <div className="order">
      <CheckoutProduct 
        id={order.id}
        title={order.title}
        image={order.image}
        price={order.price}
        rating={order.rating}
        hidebutton
      />
    </div>
  )
}

export default Order;