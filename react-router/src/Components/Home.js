import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
        <div className='home'>
            Home Page
            
            <button onClick={() => navigate('order-summary', { replace: true })}>Place Order</button>
            <br /><br />

        </div>
    )
}

export default Home