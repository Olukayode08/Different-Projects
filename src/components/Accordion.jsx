import React, { useState } from 'react'
import data from '../data/AccordionData'
import AccordionQuestion from './AccordionQuestion'
const Accordion = () => {
  const [questions] = useState(data)

  return (
    <>
      <main>
        <h1>Accordion Project</h1>
        {questions.map((question) => {
          return (
            <AccordionQuestion key={question.id} {...question}/>

          )
        })}
      </main>
    </>
  )
}

export default Accordion
