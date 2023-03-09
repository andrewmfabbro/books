import { useState, useContext } from "react";
import BooksContext from "../context/books";

//receives book obj to edit
function BookEdit({ book, onSubmit}) {
  //state and setter the old book title is the default when editing
  const [title, setTitle] = useState(book.title);
  const {editBookById} = useContext(BooksContext);

  //title set event handler
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  //form state handler
  const handleSubmit = (event) => {
    event.preventDefault();
    
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    //form for editing the book title
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}
export default BookEdit;
