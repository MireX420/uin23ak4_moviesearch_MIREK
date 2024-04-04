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
        <p>{book.author_name}</p>
        <p>Average rating: {book.ratings_average}</p>
        <a href={`https://www.amazon.com/s?k=${book.id_amazon}`}>Buy on Amazon</a>
      </div>
    </div>
    
  )
}
//Kilder:
//https://www.youtube.com/watch?v=7xL9c39DhjI&ab_channel=GeekProbin
//https://www.youtube.com/watch?v=b9eMGE7QtTk&list=WL&index=2&ab_channel=JavaScriptMastery
//https://github.com/toremake/UIN2024_coursebase
//Webtricks LMS


