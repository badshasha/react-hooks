import React , {useEffect } from 'react'

function UseEffect() {

  useEffect( function() {
      console.log("use effect call ");
  })

  return (
    <div>UseEffect</div>
  )
}

export default UseEffect