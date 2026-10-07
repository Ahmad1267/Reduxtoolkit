import React from 'react'
import Child from './component/Child' 
import Provider from './Context Api/Provider'



function App() {
  return (
    <Provider>
      <Child/>
    </Provider>
  )
}

export default App
