
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function FristPage (){
    const  [emailValid , setEmailValid] = useState("");
    const [passwordValid , setPasswordValid] = useState("");
    const navegate = useNavigate();

    const handleClick = () => {
        if(localStorage.getItem("theEmail") == emailValid && localStorage.getItem('thePass') == passwordValid){
            console.log(localStorage.getItem("theName"))
            navegate('/Books')
        }
    }
    return (
    <div className='content'>
        <div className="container">
            <div className="left">
            <input type='text' placeholder='enter your Email' value={emailValid} onChange={(e)=> {setEmailValid(e.target.value)}}></input>
            <input type='password' placeholder='enter your Password' value={passwordValid} onChange={(e)=> {setPasswordValid(e.target.value)}}></input>
            <button className='submit' onClick={handleClick}>SUBMIT</button>
            </div>
            <div className="right">
                <img src="https://img.freepik.com/premium-vector/seo-content-illustration-concept-white-background_701961-3725.jpg?w=360" alt="" />
            </div>
        </div>
      

    </div>
  )
}

export default FristPage