import './App.css'
import Header from './Component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from 'react-router-dom'
import Foot from './Component/Foot'


function App() {
  
  return (
    <>
    <Header/>
    <Outlet/>
    <Foot/>
    </>  
  )
}

export default App
