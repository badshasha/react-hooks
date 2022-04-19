import React , {useContext} from 'react'
import {AppInfo} from '../UseContext';

function Login() {

 const {setUsername} = useContext(AppInfo)

  return (
    <div>
        <input type="text" onChange={(e)=>{
            setUsername(e.target.value);
        }} />
    </div>
  )
}

export default Login