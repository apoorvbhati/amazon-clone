import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

import './Header.styles.css';
import { useStateValue } from '../../Context/StateProvider';

const Header = () => {
  const [state, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(state.user) {
      auth.signOut();
    }
  }

  return (
    <React.Fragment>
      <div className="header">
        <Link to='/'>
          <img 
            src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" 
            alt="Logo" 
            className="header__logo" 
          />
        </Link>

        <div className="header__search">
          <input 
            type="text" 
            className="header__searchInput" 
          />
          <SearchIcon 
            className="header__searchIcon"
          />
        </div>

        <div className="header__nav">
          <Link to={!state.user && '/login'}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {state?.user?.email}
              </span>
              <span className="header__optionLineTwo">
                {state.user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </Link>
          <Link to='/orders'>
            <div className="header__option">
              <span className="header__optionLineOne">
                Returns
              </span>
              <span className="header__optionLineTwo">
                & Orders
              </span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">
              Your
            </span>
            <span className="header__optionLineTwo">
              Prime
            </span>
          </div>

          <Link to='/checkout'>
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {state.basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  )
}

export default Header;