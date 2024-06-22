import { useState } from 'react';
// import Home from './Pages/Home';
import Router from './Router/Router';
// import Nav from './Components/Nav'; 
// import Books from './Pages/Books';

import './App.css'
import BookDetaila from './Pages/BookDetaila';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  
    <Router></Router>
    {/* <BookDetaila></BookDetaila> */}
    </>
  )
}

export default App
