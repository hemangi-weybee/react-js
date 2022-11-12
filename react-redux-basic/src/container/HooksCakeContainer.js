import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../component/Button'
import Title from '../component/Title'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    
    const noOfCake = useSelector(state => state.cake.noOfCake)
    const dispatch = useDispatch()

    return (
        <div>
            <Title title={`Hook : Number of Cakes ${noOfCake}`} />
            <Button title='Buy cake' handler={() => dispatch(buyCake())} />
        </div>
    )
}

export default HooksCakeContainer