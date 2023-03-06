import React, { useContext } from 'react'
import { PushContext } from "../../pages/Home";

export default function Categories() {
  const {categoryId, onClickCategory} = useContext(PushContext)
  const navList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  return (
    <nav className="nav__panel">
      <ul className="types__list">
        {navList &&
          navList.map((item, i) => (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={categoryId === i ? 'active' : 'non-active'}>
              {item}
            </li>
          ))}
      </ul>
    </nav>
  )
}
