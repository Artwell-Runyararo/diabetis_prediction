import { useState } from 'react'
import { Routes, Route, Navigate, } from 'react-router-dom'
import Main from './components/layout/Main'
import Diabeties from './pages/diabites'
import Login from './pages/login'
import SignIn from './pages/login/signIn'
import UserProfile from './pages/userprofile'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login" exact element={<SignIn />} />
        <Route element={<Main />}>
          <Route exact path='/dashboard' element={<Diabeties />}></Route>
          <Route exact path='/userprofile' element={<UserProfile />}></Route>
          <Route path="*" element={<Navigate from="*" to="/" />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
