import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '../component/Button'
import Title from '../component/Title'
import { buyCake } from '../redux'


function CakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <Title title={`Dispatch arg : Number of Cakes ${props.noOfCake}`} />
            <input type='number' value={number} onChange={e => setNumber(Number(e.target.value))}/>
            <Button title={`Buy ${number} cake`} handler={() => props.buyCake(number)} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfCake: state.cake.noOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)