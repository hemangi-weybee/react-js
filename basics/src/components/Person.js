import React from 'react'

function Person({ person }) {
  return (
    <div>
        <h5>{person.name} skilled in {person.skill}</h5>
    </div>
  )
}

export default Person