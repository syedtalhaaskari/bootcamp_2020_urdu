import React, { useContext } from 'react'
import ShoeContext from '../Context/ShoeContext'

function Toggler() {
  const { dayMode, changeMode } = useContext(ShoeContext)

  const toggleMode = () => {
    changeMode()
  }

  return (
    <div className='toggler' onClick={toggleMode}>
      Switch To {dayMode ? "Dark" : "Light"} Mode
    </div>
  )
}

export default Toggler