import React from 'react'

function WarningButton({classNames, text, onClick}) {
  return (
    <button className={classNames} onClick={onClick}>{text}</button>
  )
}

export default WarningButton