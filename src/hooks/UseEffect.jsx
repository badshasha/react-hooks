import React , {useEffect , useState } from 'react'

function UseEffect() {

 const [value , setValue] = useState(false);
  useEffect( function() {
      console.log("use effect call ");
  },[value])


  const caller = () => {
    setValue(!value);
  }

  return (
    <div>
        <button onClick={caller}>press</button>
    </div>
  )
}

export default UseEffect