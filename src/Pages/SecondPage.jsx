import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function SecondPage() {
    const [name , setNmae] = useState([]);
    const [email , setEmail] = useState([]);
    const [pass , setPass] = useState([]);
    
    const useEffect = () => {
        localStorage.setItem('keyName', JSON.stringify(name))
        localStorage.setItem('keyEmail', JSON.stringify(email))
        localStorage.setItem('pass' , JSON.stringify(pass))
        
    }

    return (
    <>
    <div className="contenPageTwo">
      <div className="left">
      <input  type='email' />
      <input  type='password' />
      <button>SUBMIT</button>
      </div>
      <div className="right"></div>
    </div>
 
    </>
  )
}


export default  SecondPage