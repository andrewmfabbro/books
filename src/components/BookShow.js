import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit}) {
  //edit button state and getter
  const [showEdit, setShowEdit] = useState(false);

  // event handlers
  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  //shows edit and communicates the new title
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    //pass book obj as a prop so we can get the title as in content and update the edit state
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  //use javascript string interpolation to assign a random id like the book so the api changes images
  return (
    <div className="book-show">
        <img alt='books' src={`https://picsum.photos/seed/${book.id}/200/300`}/> 
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
