import React from 'react'
import { connect } from 'react-redux'
import Button from '../component/Button'
import Title from '../component/Title'
import { buyCake, buyIcecream } from '../redux'

function ItemContainer(props) {
  return (
    <div>
      <Title title={`Own Props : Number of item : ${props.item}`} />
      <Button title={`Buy`} handler={props.buyItem} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {

  const itemState = ownProps.cake ? state.cake.noOfCake : state.icecream.noOfIcecream
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatch = ownProps.cake ? () => dispatch(buyCake()) : () =>  dispatch(buyIcecream())
  return {
    buyItem: itemDispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)