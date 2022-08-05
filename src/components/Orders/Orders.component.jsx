import React, { useState } from 'react';
import { useStateValue } from '../../Context/StateProvider';

import Order from '../Order/Order.component';

import './Orders.styles.css';

const Orders = () => {
  const [state, dispatch] = useStateValue();
  const [orders, setOrders] = useState(state.basket);
  console.log(orders);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map(order => (
          <Order order={order} />
        ))}
      </div>
    </div>
  )
}

export default Orders;