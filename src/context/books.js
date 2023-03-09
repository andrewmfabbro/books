import { useState, createContext } from "react";

//context
const BooksContext = createContext();

function Provider({ children }) {
  

  return (
    <BooksContext.Provider value={{}}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
