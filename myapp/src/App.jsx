import './App.css'
import Views from './components/Views'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { Route,Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Navbar/>
      <Routes>

      <Route path='/' element={<Views/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
      </Routes>
      
    
      
    </>
  )
}

export default App
