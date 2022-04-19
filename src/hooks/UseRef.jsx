import React,{useRef} from 'react'

function UseRef() {

//   now i want to access input vlaue based on button click
 
// initial refhook
 const inputRef = useRef(null);

 const submit = () => {
     inputRef.current.focus(); // change focus based on click
 }


  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={submit}>submit</button>
    </div>
  )
}

export default UseRef