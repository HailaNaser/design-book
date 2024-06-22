import React from 'react';
import Booksinfo from '../data';
import { Link } from 'react-router-dom';
import { Routes, Route, useParams } from 'react-router-dom';


 function BookDetaila() {
  let {id} = useParams();
  console.log(Booksinfo);
  console.log('Current id:', id);
  let element = Booksinfo.find((el) => el.id === id )
  if (!element) {
    return <div>Book not found</div>;  
  }
else {
  
}
  return (
    <div>
    <img src={element.img} alt="" />
    <p>{element.author}</p>
    <p>{element.summary}</p>
    <p>{element.Price}</p>
    </div>
  )
}



export default BookDetaila