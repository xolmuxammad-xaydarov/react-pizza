import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import trolley from '../../assets/images/trolley.svg';
import Search from '../Search';

export default function Header({value, setSearch}) {

  return (
    <div className="header">
      <div className="container">
        <div className="flex__header">
          <Link to="/">
            <div className="logo-block">
              <img src={logo} alt="" />
              <div className="logo__name">
                <span>react pizza</span>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </Link>
          <Search searchValue={value} setSearch={setSearch}/>
          <div className="trolley__block">
            <Link to="/cart" className="trolley__btn">
              <span className="all_price">520 ₽ </span>
              <span className="trolley__img">
                <img src={trolley} alt="" />
                <span className='much'>3</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
