import React, { useState } from 'react';
import DivOption from "./DivOption"
import Callout from './Callout'
import useClickOutside from '../helper/clickoutside';

interface DivDownProps {
  data: {
    id: number,
    title: string
  }[]
}

const DivDown = ({ data }: DivDownProps) => {

  const [selected, setSelected] = useState(0)
  const {ref, visibility, setVisibility} = useClickOutside(false)

  const handleChange = (id: number) => {
    setSelected(id)
    setVisibility(!visibility)
  }

  return (
    <div ref={ref} className="divdown-container">
      <div className="divdown" onClick={() => setVisibility(!visibility)}>
        Div {data[selected].title} <i className={`fas fa-chevron-${visibility ? "up" : "down"}`}/>
      </div>
      {
        visibility ?
        <Callout>
          { data.map(option => <DivOption key={option.id} handleChange={handleChange} {...option}/>) }
        </Callout>
        : null
      }
    </div>
  )
}

export default DivDown