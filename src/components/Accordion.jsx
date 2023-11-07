import React from 'react'
import questions from '../data/AccordionData'
const Accordion = () => {
  return (
    <>
      <main>
        <h1>Accordion Project</h1>
        {questions.map((questions)=>{
            return(
                <div key={questions.id}>

                </div>
            )
        })}
      </main>
    </>
  )
}

export default Accordion
