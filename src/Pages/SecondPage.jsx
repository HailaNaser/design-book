

import React, { useEffect } from 'react';
import { useState } from 'react';
import { json, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function SecondPage() {
    const [ namee , setNamee] = useState("");
    const [email , setEmail] = useState("");
    const [pass , setPass] = useState("");
    const navigate = useNavigate();

    const  handleAddToLocalStorage = () => {
        if (namee != "" && email != "" && pass !== ""){
            localStorage.setItem("theName" , namee)
            localStorage.setItem("theEmail" , email);
            localStorage.setItem("thePass" , pass);
            setNamee("")
            setEmail("")
            setPass("")
            navigate('/Books')
        }
         
    }
    return (
        <>
        <div className="contenPageTwo">
         <div className="left">
       <input type='text' placeholder='Enter Your Name' value={namee} onChange={(e)=>{setNamee(e.target.value)}} ></input>
       <input type='Email' placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
       <input type='Password' placeholder='Enter Your password' value={pass} onChange={(e)=> setPass(e.target.value)}></input>
       <button onClick={handleAddToLocalStorage}>ENTER</button>
       </div>
       </div>
       </>
    )
}


export default  SecondPage