import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Header from './components/Header'


function App() {

  return (
    <>
   <Header/>
      
     <Routes>
    <Route path='/' element={<Login/>} ></Route>
    <Route path='/register' element={<Signup/>} ></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>

    </Routes>
     
    </>
  )
}

export default App
