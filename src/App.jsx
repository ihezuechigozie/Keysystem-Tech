import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './NotFound'
import '@fontsource/poppins';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';



function App() {

  return (
    <>
      <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='*' element={<NotFound />}/>
     </Routes>
    </>
  )
}

export default App
