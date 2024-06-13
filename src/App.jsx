import { useState } from 'react';
import FristPage from './Pages/FristPage';
import Home from './Pages/Home';
import Router from './Router/Router';
import Nav from './component/Nav';
import Books from './Pages/Books';
// import { BrowserRouter as Router} from 'react-router-dom'
import SecondPage from './Pages/SecondPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Nav></Nav>
    {/* <Home></Home> */}
    <Router></Router>
    <FristPage></FristPage>
     <SecondPage>
      </SecondPage> 
      <Books></Books>

    </>
  )
}

export default App
