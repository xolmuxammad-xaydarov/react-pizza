import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/slices/filterSlice'

import Categories from '../components/categories/Categories'
import Sort from '../components/Sort/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Pagination from '../components/pagination'

export default function Home({ searchValue }) {
  const categoryId = useSelector((state) => state.filter.categoryId)
  const dispatch = useDispatch()

  const [item, setItem] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  console.log(currentPage);
  const [sortType, setSortType] = useState({
    name: 'попопулярнлсти',
    sortProperty: 'rating',
  })

  useEffect(() => {
    setIsLoading(true)

    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `@search=${searchValue}` : ''
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    fetch(
      `https://6360ef4baf66cc87dc1e2fca.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setItem(data)
        setIsLoading(false)
      })
  }, [categoryId, sortType,searchValue, currentPage])

  const onChangeCategory = (id) => {
    dispatch(setCategory(id))
  }
  const onClickType = (type) => setSortType(type)

  const pizzas = item
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }

      return false
    })
    .map((pizza, i) => <PizzaBlock key={i} {...pizza} />)

  const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />)
  return (
    <>
      <div className="container">
        <div className="content-top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort value={sortType} onClickType={onClickType} />
        </div>
        <div className="main-content">
          <div className="choosen__category">Все пиццы</div>
          <div className="cards">{isLoading ? skeleton : pizzas}</div>
        </div>
        <Pagination onChangePage={(num) => setCurrentPage(num)}/>
      </div>
    </>
  )
}
