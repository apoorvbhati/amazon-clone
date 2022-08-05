import React from 'react';
import Product from '../Product/Product.component';

import './Home.styles.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
          <img 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="" 
            className="home__image"
          />

        <div className="home__row">
          <Product 
            id='1434233'
            title='The lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
            price={11.96}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
          />
          <Product 
            id='5325639'
            title='Kenwood kMix stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl'
            price={239.0}
            rating={4}
            image='https://m.media-amazon.com/images/I/61rt7lK+UTL._SX679_.jpg'
          />
        </div>

        <div className="home__row">
          <Product 
            id='5273263'
            title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Moniter'
            price={199.99}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
          />
          <Product 
            id='9755678'
            title='Amazon Echo (3rd Generation) | Smart speaker with ALexa, Charcoal Fabric'
            price={98.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/618l86R3U9L._SX679_.jpg'
          />
          <Product 
            id='74647384'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
            price={591.99}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
          /> 
        </div>

        <div className="home__row">
          <Product 
            id='52735352'
            title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Moniter - Super Ultra wide Dual WQHD 5120 * 1440'
            price={1094.98}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
          />
        </div>
      </div>
    </div>
  )
}

export default Home;