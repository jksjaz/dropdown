import React from "react"

interface DivOptionProps {
    title: string,
    id: number,
    handleChange: Function
}

const DivOption = ({ title, id, handleChange } : DivOptionProps) => <button className="divoption" onClick={() => handleChange(id)}>Div {title}</button>

export default DivOption