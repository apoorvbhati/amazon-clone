import React from 'react';
import { useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from '../../Context/StateProvider';
import { basketTotal } from '../../Context/reducer';

import './Subtotal.styles.css';

const Subtotal = () => {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket.length} items): 
              <strong>  
                {value}
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basketTotal(state.basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={() => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;