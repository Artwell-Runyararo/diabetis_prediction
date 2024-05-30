import { useState } from 'react'
import { Routes, Route, Navigate, } from 'react-router-dom'
import Main from './components/layout/Main'
import Diabeties from './pages/diabites'
import Login from './pages/login'
import SignIn from './pages/login/signIn'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login" exact element={<SignIn />} />
        <Route element={<Main />}>
          <Route exact path='/dashboard' element={<Diabeties />}></Route>
          <Route path="*" element={<Navigate from="*" to="/" />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
