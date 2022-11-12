import React, { useState, useEffect } from 'react'

function TitleUseEffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect')
        document.title = `You Clicked ${count} times`
    }, [count])

    const clickHandler = () => setCount(count + 1)

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} typ="text"></input>
            <button onClick={clickHandler}>
                Count {count}
            </button>
        </div>
    )
}

export default TitleUseEffect