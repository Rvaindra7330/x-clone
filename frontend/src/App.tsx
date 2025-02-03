import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Post } from './pages/Post'
import { Posts } from './pages/Posts'
import { Home } from './pages/Home'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/post' element={<Post/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
