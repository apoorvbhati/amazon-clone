import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Header from './components/Header/Header.component';
import Home from './components/Home/Home.component';
import Checkout from './components/Checkout/Checkout.component';
import Login from './components/Login/Login.component';
import Payment from './components/Payment/Payment.component';
import Orders from './components/Orders/Orders.component';
import { useStateValue } from './Context/StateProvider';

import { auth } from './firebase';

import './App.css';

const promise = loadStripe(
  "pk_test_51L0gKBSAIn39VlQdfN4d1xPKT2zAPnOqTrNAKm6SIMxAXTth6LFrL3sSFUlGE5yaoDdS2swTdeOryTl8YebOIni300UMCNvtqV"
);

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      // console.log(user);

      if(user) {
        dispatch({ 
          type: 'SET_USER',
          user: user
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
    //BEM
    <div className='app'>
      <Routes>
        <Route path='/' element={<Header />} >
          <Route index element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={<Elements stripe={promise}><Payment /></Elements>} />
          <Route path='/orders' element={<Orders />} />
        </Route>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
