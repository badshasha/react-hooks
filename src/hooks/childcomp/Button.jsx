import React , {useState , forwardRef , useImperativeHandle} from 'react'

const Button = forwardRef((params,ref) => {


  const [toggle , setToggle] = useState(false);


  useImperativeHandle(ref, () => ({
    toggleChange(){
        setToggle(!toggle);
    }
  }))
  
    

  return (
    <div>

        <button>child perss</button>

        {/* toggle span */}

        { toggle ?   <h1>hello world</h1> : ""}

    </div>
  )
})

export default Button