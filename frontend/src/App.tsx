
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Post } from './pages/Post'
import { Home } from './pages/Home'
import { Errorhandle } from './pages/Errorhandle'
import { Create } from './pages/Create'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/post/:id' element={<Post/>}></Route>
      <Route path='/error' element={<Errorhandle/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
