import React from 'react'
import Categories from '../components/categories/Categories'
import Sort from '../components/Sort/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'

import { useEffect, useState } from 'react'
import Skeleton from '../components/PizzaBlock/Skeleton'

export default function Home() {
  const url = 'https://6360ef4baf66cc87dc1e2fca.mockapi.io/items'
  const [item, setItem] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <div className="line" />
      <div className="container">
        <div className="content-top">
          <Categories />
          <Sort />
        </div>
        <div className="main-content">
          <div className="choosen__category">Все пиццы</div>
          <div className="cards">
            {isLoading
              ? [...new Array(6)].map((_, i) => <Skeleton />)
              : item && item.map((pizza, i) => <PizzaBlock key={i} {...pizza} />)}
          </div>
        </div>
      </div>
    </>
  )
}
