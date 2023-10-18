import React, { useState } from 'react'
import "./css/Image.css"
import vite from "../assets/vite.svg"

const Image = () => {
    const [isrotate, setrotate] = useState(false);

    const handleclick = (e) => { setrotate(!isrotate) }

    return (
        <div className={`custom-spin-${isrotate ? 'rotate' : ''}`}>
            <img className="h-[95vh]" src={vite} alt="vite-logo" onClick={handleclick} />

        </div>
    )
}

export default Image