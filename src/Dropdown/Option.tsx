import React from "react"

interface OptionProps {
    title: string,
    id: number
}

const Option = ({ title, id } : OptionProps) => <option value={id}>Select {title}</option>

export default Option