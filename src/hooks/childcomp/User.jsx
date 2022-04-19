import React, {useContext} from 'react'
import {AppInfo} from '../UseContext'



function User() {

  const {username } = useContext(AppInfo);
  return (
    <div>
        <h1>{username}</h1>
    </div>
  )
}

export default User