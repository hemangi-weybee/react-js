import React from 'react'
import { connect } from 'react-redux'
import Button from '../component/Button'
import Title from '../component/Title'
import { buyCake } from '../redux'


function CakeContainer(props) {
    return (
        <div>
            <Title title={`Simple : Number of Cakes ${props.noOfCake}`} />
            <Button title='Buy cake' handler={props.buyCake} />
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)