import React from "react";

export default function BookCard({ book }) {
  return (
    <div className="book">
      <div>
        <img
          src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'http://via.placeholder.com/400'}
          alt={book.title}
        />
      </div>
      <div>
        <h3>{book.title}</h3>
        <span>{book.first_publish_year}</span>
        <h3>{book.author_name}</h3>
        <h3>Average rating: {book.ratings_average}</h3>
        <a href={`https://www.amazon.com/s?k=${book.id_amazon}`}>Buy on Amazon</a>
      </div>
    </div>
    
  )
}


