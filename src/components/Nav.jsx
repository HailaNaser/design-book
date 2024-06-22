
import React from 'react';
import { Link } from "react-router-dom";
import SecondPage from '../Pages/SecondPage';

function Nav() {
  return (
    <div className='container-nav'>
      <div className="nav">
        {/* <div className="logo">
          <img src="https://image.similarpng.com/very-thumbnail/2020/10/Books-illustration-on-transparent-background-PNG.png" alt="" />
        </div> */}
        
        <ul>
          <li> <img className='logo' src="https://image.similarpng.com/very-thumbnail/2020/10/Books-illustration-on-transparent-background-PNG.png" alt="" /></li>
          <div className="sign">
          <Link to="/FristPage">
           <li>Sign</li> 
           </Link>
            <Link to="/SecondPage">
           <li>SignUp</li> 
           </Link>
          </div>
      
        </ul>
      </div>
    </div>
  );
}

export default Nav;
