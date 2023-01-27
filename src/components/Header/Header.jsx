import React from 'react'
import './Header.scss';
import logo from '../../assets/images/logo.svg';
import trolley from '../../assets/images/trolley.svg';

export default function Header() {
  return (
    <div className='header'>
      <div className="container">
        <div className="flex__header">
          <a href="#">
              <div className="logo-block">
                <img src={logo} alt="" />
                <div className="logo__name">
                  <span>react pizza</span>
                  <p>самая вкусная пицца во вселенной</p>
                </div>
              </div>
            </a>
            <div className="input__search">
              <input type="text" placeholder='search pizza' />
            </div>
          <div className='trolley__block'>
            <button className='trolley__btn'>
              <span className='all_price'>520 ₽ </span>
              <span className='trolley__img'>
                <img src={trolley} alt="" />
                <span>3</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
