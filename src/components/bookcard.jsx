import React from 'react';
import './bookcard.css'; // Assuming you will create a CSS file for styling

const BookCard = ({ book }) => {
  return (
    <div className="bookcard">
      <img src={book.image} alt={book.title} className="bookcard-image" />
      <h2 className="bookcard-title">{book.title}</h2>
      <p className="bookcard-author">Author: {book.author}</p>
      <p className="bookcard-description">{book.description}</p>
    </div>
  );
};

export default BookCard;