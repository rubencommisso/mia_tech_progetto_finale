import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Routes>
        <Route  path='/cart' element={<Cart/>}  />

      </Routes>
    </div>
  )
}

export default App
