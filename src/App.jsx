import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Carousell from './components/Carousell'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <Routes>
     <Route  path='/carousell' element={<Carousell />} />  

      </Routes>
      
    </div>
  )
}

export default App

