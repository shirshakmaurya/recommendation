import React from "react";
import "./styles.css";
import { useState } from "react";

const gameDB = {
  story: [
    { name: "GTA 5", rating: "10/10" },
    { name: "GTA Vice city", rating: "7/10" },
    { name: "Far Cry", rating: "6/10" }
  ],

  action: [
    { name: "Call of Duty", rating: "8/10" },
    { name: "Counter Strike", rating: "8/10" },
    { name: "God of War", rating: "8/10" }
  ],
  sports: [
    { name: "FIFA", rating: "8/10" },
    { name: "Cricked 07", rating: "8/10" },
    { name: "WWE 2K22", rating: "8/10" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("story");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Best Games </h1>
      <p style={{ fontSize: "smaller" }}>See the Best Games of PC</p>

      <div>
        {Object.keys(gameDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {gameDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
