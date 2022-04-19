import React , {useState , createContext} from 'react'
import Login from './childcomp/Login'
import User from './childcomp/User'



export const AppInfo = createContext(null);


// lead file 
function UseContext() {

    const [username , setUsername ] = useState("shavendra");

  return (
    <AppInfo.Provider value={{username,setUsername}}>
        <Login />
        <User />
    </AppInfo.Provider>
  )
}

export default UseContext