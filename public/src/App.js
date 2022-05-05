import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/Register'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/register" element = {<Register></Register>}></Route>
        <Route path= "/login" element = {<Login></Login>}></Route>
        <Route path= "/" element = {<Chat></Chat>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
