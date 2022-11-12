import React, { useState, useEffect, useRef } from 'react'

function TimerUseRef() {

    const [timer, setTimer] = useState(0)
    const timerRef = useRef(null)

    useEffect(() => {
      timerRef.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1)
      }, 1000)
    
      return () => {
        clearInterval(timerRef.current)
      }
    }, [])



    
    return (
        <div>
            Timer : {timer}
            <button onClick={() => clearInterval(timerRef.current)}> ClearTimer</button>
        </div>
    )
}

export default TimerUseRef