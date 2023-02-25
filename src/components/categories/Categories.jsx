import React, { useState } from 'react'

export default function Categories({onChangeCategory}) {
  const [activeNav, setActiveNav] = useState(0)

  const changeNum = (num) => {
    setActiveNav(num)
    onChangeCategory(num)
  }

  const navList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  return (
    <nav className="nav__panel">
      <ul className="types__list">
        {navList &&
          navList.map((item, i) => (
            <li
              key={i}
              onClick={() => changeNum(i)}
              className={activeNav === i ? 'active' : 'non-active'}>
              {item}
            </li>
          ))}
      </ul>
    </nav>
  )
}
