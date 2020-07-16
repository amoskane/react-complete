import React from 'react'
//pass a default value object
const authContext = React.createContext({
  authenticated: false,
  loginMethod: () => {}
})

export default authContext
