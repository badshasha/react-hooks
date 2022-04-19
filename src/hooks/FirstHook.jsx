import React,{useState} from 'react'

function FirstHook() {

    const [value , setValue] = useState(); // use state without value 
    const [vlaue2 , setValue2 ] = useState(false); // use state with default value 


  const valueChanger = () =>{
      setValue2(!value2); // convert value based on the button press 
  }

  return (
    <div>
        {/* access vlaues  */}
        <h1>{value2}</h1>  

    {/* now i create on change method for change volue2 vlaue  */}
        <button onChange={valueChanger} >press</button>
    </div>
  )
}

export default FirstHook