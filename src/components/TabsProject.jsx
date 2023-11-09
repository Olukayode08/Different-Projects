import React, { useEffect, useState } from 'react'
 
const url = 'https://course-api.com/react-tabs-project'

const TabsProject = () => {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    setJobs(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return <main>Loading</main>
  }
const {company, dates, duties, title} = jobs[value]
  return (
    <>
      <main>
        <h1>Experience</h1>
        <section>
          <main>
            {jobs.map((job, index)=>{
              return(
                <h5 key={job.id} className={index === value && 'active'} onClick={()=>setValue(index)}>{job.company}</h5>
              )
            })}
          </main>
          <main>
            <h1>{title}</h1>
            <p>{company}</p>
            <p>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <ul key={index}>
                  <li>{duty}</li>
                </ul>
              )
            })}
          </main>
        </section>
      </main>
    </>
  )
}

export default TabsProject
