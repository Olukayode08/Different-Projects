import React, { useEffect, useState } from 'react'

const ToursProject = () => {
  const url = 'https://course-api.com/react-tours-project'
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const [readMore, setReadMore] = useState(false)

  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=> tour.id !== id)
    setTours(newTours)
   }
  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {}
    setLoading(false)
    // console.log(error);
  }

  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <main>
        <h1>{tours.length} Tours</h1>
        {tours.map((tour) => {
          return (
            <main key={tour.id}>
              <h1>{tour.name}</h1>
              <img src={tour.image} alt={tour.name} />
              <p>
                {readMore ? tour.info : tour.info.substring(0, 200)}...
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? 'show less' : 'read more'}
                </button>
              </p>
              <h5 onClick={()=>removeTour(tour.id)}>Not interested</h5 >
            </main>
          )
        })}
        <button onClick={fetchTours}>{tours.length=== 0 && 'Refresh'}</button>
      </main>
    </>
  )
}

export default ToursProject
