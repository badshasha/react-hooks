import React,{useRef} from 'react'
import Button from './childcomp/Button'

function UseImperative() {

  const ButtonRef = useRef(null);
 
  return (
    <div>

        <button onClick={()=>{
            ButtonRef.current.toggleChange();
        }}>parent press</button>
        <Button ref={ButtonRef} />

    </div>
  )
}

export default UseImperative