import React, { useState } from 'react'
import "./style.scss"



export const Paragraph = ({ classNames, style}) => {


    // const useSetColor = (e) => {
    //     if(pColor === usePrevious(pColor)) {
    //         setColor('black')
    //     }else {
    //         setColor(e)
    //     }
    //   }

    return <p className={classNames} style={style}>Mothafuckin React!</p>
}

export default Paragraph