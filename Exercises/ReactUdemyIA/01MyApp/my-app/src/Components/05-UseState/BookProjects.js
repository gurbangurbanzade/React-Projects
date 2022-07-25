import React, { useState } from "react";

function BookProjects() {
  const [books, setBooks] = useState([
    { yazar: "Yazar1", ad: "ad1", tarix: "tarix1" },
    { yazar: "Yazar2", ad: "ad2", tarix: "tarix2" },
    { yazar: "Yazar3", ad: "ad3", tarix: "tarix3" },
  ]);
  const [book, setBook] = useState({ yazar: "", ad: "", tarix: "" });

  const pushBook = () => {
    setBooks([...books, book]);
    setBook({ yazar: "", ad: "", tarix: "" });
  };

  return (
    <div>
      BookProjects
      <div>
        <input
          value={book.yazar}
          type="text"
          placeholder="yazar"
          onChange={(e) => {
            setBook({ ...book, yazar: e.target.value });
          }}
        />
        <input
          value={book.ad}
          type="text"
          placeholder="ad"
          onChange={(e) => {
            setBook({ ...book, ad: e.target.value });
          }}
        />
        <input
          value={book.tarix}
          type="text"
          placeholder="tarix"
          onChange={(e) => {
            setBook({ ...book, tarix: e.target.value });
          }}
        />
        <button onClick={pushBook}>Elave Et</button>
      </div>
      <div style={{ display: "flex" }}>
        {books.map((book, index) => {
          return (
            <div key={index}>
              <h1>{book.yazar}</h1>
              <h2>{book.ad}</h2>
              <h3>{book.tarix}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookProjects;
