import axios from "axios";
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  //state
  const [books, setBooks] = useState([]);

  //fetches a list of books from the db and in components
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };
  //DO NOT CALL WITHOUT useEffect() IN APP.JS INFINITE LOOP
  //makes fetchbooks render once on load
  useEffect(() => {
    fetchBooks();
  }, []);


  //edits a book from the db and in components
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  //delete by filtering the book id out 
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  //creates a book and updates the local state data and db
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
