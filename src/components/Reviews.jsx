import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import reviews from '../data/ReviewsData'

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = reviews[index]

  const checkNumber = (index) => {
    if (index > reviews.length - 1) {
      return 0
    } else if (index < 0) {
      return reviews.length - 1
    } else {
      return index
    }
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const randonPerson = () => {
    let randonIndex = Math.floor(Math.random() * reviews.length)
    if(randonIndex === index){
      randonIndex = index -1
    }
    setIndex(checkNumber(randonIndex))
   }
  return (
    <>
      <main>
        <h1>Reviews Project</h1>
        <img className='img' src={image} alt={name} />
        <p>{name}</p>
        <p>{job}</p>
        <p>{text}</p>
        <div>
          <button onClick={() => prevPerson()}>
            <FaChevronLeft />
          </button>
          <button onClick={() => nextPerson()}>
            <FaChevronRight />
          </button>
        </div>
        <button onClick={randonPerson}>random person</button>
      </main>
    </>
  )
}

export default Reviews
