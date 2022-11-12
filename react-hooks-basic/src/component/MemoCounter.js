import React, { useMemo, useState } from 'react'

function MemoCounter() {

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const incrementCounter1 = () => setCounter1(counter1 + 1)
    const incrementCounter2 = () => setCounter2(counter2 + 1)

    const isEven = useMemo(() => {
        for (let index = 0; index < 2000000000; index++) { }
        return counter1 % 2 === 0
    }, [counter1])

    return (
        <div>
            <h4>Counter1 : {isEven ? 'Even' : 'Odd'} , Counter2 : {counter2}</h4>

            <button onClick={incrementCounter1}>Counter1 {counter1} </button>
            <button onClick={incrementCounter2}>Counter 2 </button>

        </div>
    )
}

export default MemoCounter