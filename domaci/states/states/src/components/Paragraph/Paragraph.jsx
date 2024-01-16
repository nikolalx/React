import React, { useState } from 'react'
import "./style.scss"

const Paragraph = ({ children }) => {
    const [changeColor, setChangeColor] = useState(true)

    return <main>{children}</main>
}

export default Paragraph