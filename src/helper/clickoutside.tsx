import { useState, useEffect, useRef } from "react"

const useClickOutside = (initVisibility: boolean) => {
    const [visibility, setVisibility] = useState(initVisibility)
    const ref: any = useRef(null)

    const handleClick =  (e: { target: any }) => {
        if(ref.current && !ref.current.contains(e.target))  setVisibility(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClick, true)
        return () => document.removeEventListener('click', handleClick, true)
    })

    return {
        ref,
        visibility,
        setVisibility
    }
}

export default useClickOutside