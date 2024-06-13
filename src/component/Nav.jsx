import React from 'react';
import { Link } from "react-router-dom";


function Nav() {
  return (
    <div className='container-nav'>
      <div className="nav">
        <div className="logo">
          <img src="" alt="" />
        </div>
        
        <ul>
          <li>HOME</li>
          <li>SignUp</li>
           {/* <li><Link to="/SecondPage">SignUp</Link></li>  */}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
