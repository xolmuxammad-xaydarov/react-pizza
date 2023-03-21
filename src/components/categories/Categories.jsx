import React from 'react'

export default function Categories({value, onChangeCategory}) {
  const navList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  return (
    <nav className="nav__panel">
      <ul className="types__list">
        {navList &&
          navList.map((item, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? 'active' : 'non-active'}>
              {item}
            </li>
          ))}
      </ul>
    </nav>
  )
}
