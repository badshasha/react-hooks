import React , {useReducer} from 'react'

function ReduceHook() {


     // function 
    const functionName = (state,action) => {
        switch (action.type) {
            case "Increase":
                return { value : state.value + 1 }; // return {} with initial state names ex : {  value : state.value + 1 } state value use for access previous value                
           
            default:
                console.log("error");
                // throw new Error();
        }        
    }

    // create use reducer 
    const [state , dispath] = useReducer(functionName , {value:0})


   


  return (
    <div>
        {/* access state value  */}
        <h1>{state.value}</h1>  
        
        {/* change value  */}
        <button onClick={()=> dispath({type:"Increase"}) } >press</button>

    </div>
  )
}

export default ReduceHook