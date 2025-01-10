import {  RouterProvider } from 'react-router'
import './App.css'
import About from './components/About'
import Header from './components/header/Header'
import { router } from './Router'


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
