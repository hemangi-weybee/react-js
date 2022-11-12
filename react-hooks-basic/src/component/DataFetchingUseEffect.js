import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingUseEffect() {

    const [data, setData] = useState({})
    const [id, setID] = useState(1)
    const [idFromBtn, setIDFromBtn] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [idFromBtn])

    const handleClick = () => setIDFromBtn(id)


    return (
        <div>
            <input type="text" value={id} onChange={e => setID(e.target.value)}></input>
            <button onClick={handleClick}>Get Post</button>
            <ul>
                <div key={data.id}>{data.title}</div>
            </ul>
        </div>
    )
}

export default DataFetchingUseEffect