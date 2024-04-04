import React, { useEffect, useState } from 'react';
import './App.css';
import Searchresults from './components/Searchresults';

const API_URL = 'https://openlibrary.org/search.json'

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchBooks = async (title) => {
    if (title.length < 3) {
      return
    }
    try {
      const response = await fetch(`${API_URL}?title=${title}`)
      const data = await response.json()
      setBooks(data.docs)
    } catch (error) {
      console.error('Error searching books:', error)
    }
  }
  useEffect(() => {
    searchBooks('james+bond')
  }, [])

  return (
    <Searchresults books={books} searchBooks={searchBooks} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
  )
  
}

export default App

//Kilder:
//https://www.youtube.com/watch?v=7xL9c39DhjI&ab_channel=GeekProbin
//https://www.youtube.com/watch?v=b9eMGE7QtTk&list=WL&index=2&ab_channel=JavaScriptMastery
//https://github.com/toremake/UIN2024_coursebase
//Webtricks LMS