import React from 'react'

function Title() {
  console.log(`rendering title`)
  return (
    <h3>useCallback Demo</h3>
  )
}

export default React.memo(Title)