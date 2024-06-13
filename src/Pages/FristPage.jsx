import React, { useState } from 'react'
import { Link } from 'react-router-dom';

 function FristPage() {
    const [name , setName] = useState("");
    const [pass , setPassword] = useState("");

    const handleClick = ()=> {
      if(localStorage !== null ){
        const data = localStorage.getItem("")
        let converData = JSON.parse(saved);
        // return converData
        // <Link to='/Books'>
  
      }
    }
  return (
    <div className='content'>
        <div className="container">
            <div className="left">
            <input type='text' placeholder='enter your name'></input>
            <input type='password' placeholder='enter your Age'></input>
            <button className='submit'>SUBMIT</button>
            </div>
            <div className="right">
                <img src="https://img.freepik.com/premium-vector/seo-content-illustration-concept-white-background_701961-3725.jpg?w=360" alt="" />
            </div>
        </div>
      

    </div>
  )
}

export default FristPage