import React, { useState } from 'react'
import Booksinfo from '../data'
import BookDetaila from './BookDetaila';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// import { useState } from 'react';  



function Books(){
const navegate = useNavigate()
const [search , setSearch] = useState()
let shooseBook = Booksinfo.filter((e)=> {
  console.log(e.title)
  return e.title.includes(search)
})

return (
  <>
      <input type="text" placeholder='search Book' value={search} onChange={(e)=> setSearch(e.target.value)}/>
      <div className="book-container">
      {Booksinfo.map((element, index) => (
        <div className="content-book" key={index}>
            <div className="book">
            <img src={element.img} alt="" />
      <Link to={`/Books/${element.id}`}>
      <button >READ MORE</button>
      </Link>
      <p>{element.author}</p>
            <p>{element.Price}</p>
        </div>
        </div>
      ))}
          </div>
  </>
)









}










// function Books() {
// const navigate = useNavigate();

// const handleClick = (id) => {
//   navigate(`/BookDetaila/${id}`); 
// };
// return (
//     <>
//      <div className="book-container">
//       {Booksinfo.map((element, index) => (
//         <div className="content-book" key={index}>
//             <div className="book">
//             <img src={element.img} alt="" />
//             <Link to={`/Book/${element.id}`}>
//             <button  onClick={() => handleClick(element.id)}>READ MORE</button>
//             </Link>
//             <p>{element.author}</p>
//             <p>{element.Price}</p>
//         </div>
//         </div>
//       ))}
//           </div>
//     </>
//   );
// }

export default Books