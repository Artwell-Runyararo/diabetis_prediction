import { useState } from 'react'
import { Routes, Route, Navigate, } from 'react-router-dom'
import Main from './components/layout/Main'
import Diabeties from './pages/diabites'
import Login from './pages/login'

function App() {


  return (
    <>
      <Routes>
        {/* <Route path="/" exact element={<Login />} /> */}
        <Route element={<Main />}>
          <Route exact path='/' element={<Diabeties />}></Route>
          <Route path="*" element={<Navigate from="*" to="/" />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
