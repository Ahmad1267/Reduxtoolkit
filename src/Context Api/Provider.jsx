import React from 'react'
import { createContext } from 'react'

export const BioData = createContext();


function Provider({children}) {
  const myName = "Ali"
  const age = 27
  return (
     <BioData.Provider value={{myName, age}}>
        {children}
    </BioData.Provider>
  )
}

export default Provider
