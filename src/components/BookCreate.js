import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  //create state and setter
  const [title, setTitle] = useState("");
  const {createBook} = useContext(BooksContext);

  //set title state with setTitle of what was typed
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  //reroute the form and stop default submit
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title); //create title
    setTitle(""); //reset title to empty after creation
  };

  return (
    //form for book creation using events to change the state
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className = "input"value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
