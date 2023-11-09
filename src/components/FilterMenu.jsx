import React, { useState } from 'react'
import menus from '../data/FilterMenuData'

const allCategories = ['all', ...new Set(menus.map((menu) => menu.category))]
// New set only gets unique value
// All categories is now a new array containing 'all' and ...all the unique categories in the data
// console.log(allCategories);

const FilterMenu = () => {
  const [menuItems, setMenuItems] = useState(menus)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menus)
      return
    }
    const newItems = menus.filter((menu) => menu.category === category)
    setMenuItems(newItems)
  }
  return (
    <>
      <main>
        <h1>Today's menu</h1>
        <section>
          {categories.map((category, index) => {
            return (
              <h5 key={index} onClick={() => filterItems(category)}>
                {category}
              </h5>
            )
          })}
        </section>
        <section>
          {/* Manually */}
          {/* <h5 onClick={() => filterItems('all')}>All</h5>
          <h5 onClick={() => filterItems('breakfast')}>Breakfast</h5>
          <h5 onClick={() => filterItems('lunch')}>Lunch</h5>
          <h5 onClick={() => filterItems('shakes')}>shakes</h5>
          <h5 onClick={() => filterItems('dinner')}>dinner</h5> */}
        </section>
        {menuItems.map((menuItem) => {
          return (
            <section key={menuItem.id}>
              <img className='image' src={menuItem.img} alt={menuItem.title} />
              <main className='menu-details'>
                <h1>{menuItem.title}</h1>
                <p>{menuItem.desc}</p>
                <h5>{menuItem.price}</h5>
              </main>
            </section>
          )
        })}
      </main>
    </>
  )
}

export default FilterMenu
