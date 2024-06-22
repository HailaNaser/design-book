import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';


 function Home() {

  return (
    <>
      <Nav></Nav>
    <div className='home'>
        <div className="text">
            <h1>WELLCOME TO MY LIBRARY</h1>
            <p>You will find here the best books for creating thousands of books in all fields</p>
        </div>
        <div className="theimage">
          <Link to='/Books'>
            <img src="https://img.freepik.com/premium-vector/young-man-woman-reading-paper-books_313242-959.jpg" alt="" />
            </Link>
        </div>
    </div>
    </>
  )
}

export default Home

