import SearchIcon from '../assets/search.svg';
import Bookcard from './Bookcard';

export default function Searchresults({ books, searchTerm, setSearchTerm, searchBooks }){
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
//Kilder:
//https://www.youtube.com/watch?v=7xL9c39DhjI&ab_channel=GeekProbin
//https://www.youtube.com/watch?v=b9eMGE7QtTk&list=WL&index=2&ab_channel=JavaScriptMastery
//https://github.com/toremake/UIN2024_coursebase
//Webtricks LMS