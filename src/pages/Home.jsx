import React, { createContext } from 'react'
import Categories from '../components/categories/Categories'
import Sort from '../components/Sort/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'

import { useEffect, useState } from 'react'
import Skeleton from '../components/PizzaBlock/Skeleton'

export const PushContext = createContext()

export default function Home() {
  const [item, setItem] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState({
    name: 'попопулярнлсти',
    sortProperty: 'rating',
  })

  useEffect(() => {
    setIsLoading(true)

    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    fetch(
      `https://6360ef4baf66cc87dc1e2fca.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setItem(data)
        setIsLoading(false)
      })
  }, [categoryId, sortType])

  const onClickCategory = (id) => setCategoryId(id)
  const onClickType = (type) => setSortType(type)
  return (
    <>
      <div className="container">
        <div className="content-top">
          <PushContext.Provider value={{ categoryId, onClickCategory, sortType, onClickType }}>
            <Categories />
            <Sort />
          </PushContext.Provider>
        </div>
        <div className="main-content">
          <div className="choosen__category">Все пиццы</div>
          <div className="cards">
            {isLoading
              ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
              : item && item.map((pizza, i) => <PizzaBlock key={i} {...pizza} />)}
          </div>
        </div>
      </div>
    </>
  )
}
