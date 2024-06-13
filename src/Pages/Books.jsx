import React from 'react'
import Booksinfo from '../data'
 

function Books() {

return (
    <>
     <div className="book-container">
      {Booksinfo.map((element, index) => (
        <div className="content-book" key={index}>
            <div className="book">
            <img src={element.img} alt="" />
          {console.log(element)}
          {/* <h2>{element.summary}</h2> */}
          <p>{element.author}</p>
          <p>{element.Price}</p>
        </div>
        </div>
      
    
    
      ))}
          </div>
    </>
  );
}

export default Books