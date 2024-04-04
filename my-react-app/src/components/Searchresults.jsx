import SearchIcon from '../assets/search.svg';
import Bookcard from './Bookcard';
import { useEffect } from 'react';

export default function Searchresults({ books, searchTerm, setSearchTerm, searchBooks }){
    
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Enter') {
            searchBooks(searchTerm);
          }
        }})

    return(
        <div className="app">
      <h1>BookLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for books"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchBooks(searchTerm)}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {books.length > 0 ? (
        <div className="container">
          {books.map((book) => (
            <Bookcard key={book.key} book={book} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No books found</h2>
        </div>
      )}
    </div>
    )
}