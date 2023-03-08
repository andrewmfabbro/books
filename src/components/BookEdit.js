import { useState } from "react";

//receives book obj to edit
function BookEdit({ book, onEdit}) {
  //state and setter the old book title is the default when editing
  const [title, setTitle] = useState(book.title);

  //title set event handler
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  //form state
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("New title", title);
    onEdit(book.id, title);
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
