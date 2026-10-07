import React, { useContext } from 'react'
import { BioData } from '../Context Api/Provider'

function Child() {
    const {myName, age} = useContext(BioData)
  return (
    <h1>Hello {myName} and my age is {age}</h1>
  )
}

export default Child
