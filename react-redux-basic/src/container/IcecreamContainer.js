import React from 'react'
import { connect } from 'react-redux'
import Button from '../component/Button'
import Title from '../component/Title'
import { buyIcecream } from '../redux'

function IcecreamContainer(props) {
    return (
        <div>
            <Title title={`Simple : Number of Icecream ${props.noOfIcecream}`} />
            <Button title='Buy Icecream' handler={props.buyIcecream} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfIcecream: state.icecream.noOfIcecream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer)