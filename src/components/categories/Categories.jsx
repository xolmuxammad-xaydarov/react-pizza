import React from 'react'
import './Categories.scss'
import chikenPizza from '../../assets/images/chickenPizza.png';

export default function Categories() {
  return (
    <div className="container">
      <div className="content-top">
        <div className="nav__block">
          <nav className='nav__panel'>
            <ul className='types__list'>
              <li className='active'>Все</li>
              <li>Мясные</li>
              <li>Вегетарианская</li>
              <li>Гриль</li>
              <li>Острые</li>
              <li>Закрытые</li>
            </ul>
          </nav>
        </div>
        <div class="sort">
          <div class="sort__label">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
              />
            </svg>
            <b>Сортировка по:</b>
            <span>популярности</span>
          </div>
          <div class="sort__popup">
            <ul>
              <li class="active">популярности</li>
              <li>цене</li>
              <li>алфавиту</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="main-content">
        <h2 className='choosen__category'>Все пиццы</h2>
        <div className="cards">
          <div className="card">
            <img src={chikenPizza} alt="" />
            <h4 className='card__title'>Чизбургер-пицца</h4>
            <div className='card__selector'>
              <ul className='pizza__type'>
                <li className='active'>Тонкое</li>
                <li>Традиционное</li>
              </ul>
              <ul className='pizza-size'>
                <li className='active'>25см</li>
                <li>30см</li>
                <li>40см</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={chikenPizza} alt="" />
            <h4 className='card__title'>Чизбургер-пицца</h4>
            <div className='card__selector'>
              <ul className='pizza__type'>
                <li className='active'>Тонкое</li>
                <li>Традиционное</li>
              </ul>
              <ul className='pizza-size'>
                <li className='active'>25см</li>
                <li>30см</li>
                <li>40см</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={chikenPizza} alt="" />
            <h4 className='card__title'>Чизбургер-пицца</h4>
            <div className='card__selector'>
              <ul className='pizza__type'>
                <li className='active'>Тонкое</li>
                <li>Традиционное</li>
              </ul>
              <ul className='pizza-size'>
                <li className='active'>25см</li>
                <li>30см</li>
                <li>40см</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={chikenPizza} alt="" />
            <h4 className='card__title'>Чизбургер-пицца</h4>
            <div className='card__selector'>
              <ul className='pizza__type'>
                <li className='active'>Тонкое</li>
                <li>Традиционное</li>
              </ul>
              <ul className='pizza-size'>
                <li className='active'>25см</li>
                <li>30см</li>
                <li>40см</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={chikenPizza} alt="" />
            <h4 className='card__title'>Чизбургер-пицца</h4>
            <div className='card__selector'>
              <ul className='pizza__type'>
                <li className='active'>Тонкое</li>
                <li>Традиционное</li>
              </ul>
              <ul className='pizza-size'>
                <li className='active'>25см</li>
                <li>30см</li>
                <li>40см</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={chikenPizza} alt="" />
            <h4 className='card__title'>Чизбургер-пицца</h4>
            <div className='card__selector'>
              <ul className='pizza__type'>
                <li className='active'>Тонкое</li>
                <li>Традиционное</li>
              </ul>
              <ul className='pizza-size'>
                <li className='active'>25см</li>
                <li>30см</li>
                <li>40см</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={chikenPizza} alt="" />
            <h4 className='card__title'>Чизбургер-пицца</h4>
            <div className='card__selector'>
              <ul className='pizza__type'>
                <li className='active'>Тонкое</li>
                <li>Традиционное</li>
              </ul>
              <ul className='pizza-size'>
                <li className='active'>25см</li>
                <li>30см</li>
                <li>40см</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={chikenPizza} alt="" />
            <h4 className='card__title'>Чизбургер-пицца</h4>
            <div className='card__selector'>
              <ul className='pizza__type'>
                <li className='active'>Тонкое</li>
                <li>Традиционное</li>
              </ul>
              <ul className='pizza-size'>
                <li className='active'>25см</li>
                <li>30см</li>
                <li>40см</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={chikenPizza} alt="" />
            <h4 className='card__title'>Чизбургер-пицца</h4>
            <div className='card__selector'>
              <ul className='pizza__type'>
                <li className='active'>Тонкое</li>
                <li>Традиционное</li>
              </ul>
              <ul className='pizza-size'>
                <li className='active'>25см</li>
                <li>30см</li>
                <li>40см</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
