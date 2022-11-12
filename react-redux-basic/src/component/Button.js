import React from 'react'

function Button(props) {
  return (
    <button onClick={props.handler}>{props.title}</button>
  )
}

export default Button