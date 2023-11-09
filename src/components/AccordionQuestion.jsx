import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const AccordionQuestion = ({ title, info }) => {
  const [active, setActive] = useState(false)

  return (
    <>
      <main>
        <h1>{title}</h1>
        <div onClick={() => setActive(!active)}>
          {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
        {active && <p>{info}</p>}
      </main>
    </>
  )
}

export default AccordionQuestion
