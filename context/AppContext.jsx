import React, { useState, createContext } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {

  const [userData, setUserData] = useState({
    origin: null,
    destination: null,
    travelTime: 0,
    travelTimeInformation: null
  })

  const saveUserData = (values) => {
    setUserData(values)
  }

  return (
    <AppContext.Provider value={{ userData, saveUserData }}>
      {props.children}
    </AppContext.Provider>
  )
}