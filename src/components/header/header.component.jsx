import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 
import { createStructuredSelector } from 'reselect';


import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

import {ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss';

const Header = ({currentUser,hidden}) => {
  return (
    <div className='header'>
      <Link className='logo-container' to="/Gebhalytask">
        <Logo className='logo'/>
      </Link>
      <div className="options">
        <Link className="option" to='/Gebhalytask'>
          SHOP
        </Link>
        <CartIcon/>
      </div>
      {
        hidden ? null : <CartDropdown/>
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
})

export default  connect(mapStateToProps)(Header);