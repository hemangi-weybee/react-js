import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const { userID } = useParams()

  return (
    <div>User {userID} Details Page</div>
  )
}

export default UserDetails