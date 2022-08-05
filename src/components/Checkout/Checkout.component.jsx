import React from 'react';
// import FlipMove from 'react-flip-move';

import Subtotal from '../Subtotal/Subtotal.component';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct.component';

import './Checkout.styles.css';
import { useStateValue } from '../../Context/StateProvider';

const Checkout = () => {
  const [state, basket] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
          alt="" 
          className="checkout__ad"
        />
        <div>
          <h3>Hello, {!state.basketuser ? 'Guest' : state?.user?.email}</h3>
          <h2 className="checkout__title">
            Your Shopping Basket
          </h2>
          
          {/* <FlipMove> */}
            {state.basket.map((item) => (
              <CheckoutProduct 
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}
          {/* </FlipMove> */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout;