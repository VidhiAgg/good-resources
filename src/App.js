import "./styles.css";
import React, { useState } from "react";
const bookdictionary = {
  javascript: [
    {
      name: "Eloquent javascript",
      rating: "4.5/5"
    },
    { name: "You Don't Kno JS", rating: "3.5/5" }
  ],

  fiction: [
    {
      name: "Siva Trilogy",
      rating: "5/5"
    },
    { name: "Harry Potter", rating: "4.5/5" }
  ],
  business: [
    {
      name: "The Pursuit of Happyness",
      rating: "5/5"
    },
    { name: "Steve Jobs", rating: "4/5" }
  ],
  thrilled: [
    {
      name: "Sherlock Holmes",
      rating: "5/5"
    },
    { name: "Enola Holmes", rating: "4.5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("fiction");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <nav>
        <div style={{ fontSize: "2rem", padding: "1rem" }}>📚goodResources</div>
      </nav>
      <main>
        <p>Checkout my favrorite Resources. Select a genre to get started. </p>

        <div>
          {Object.keys(bookdictionary).map((genre) => (
            <button
              style={{
                cursor: "pointer",
                padding: "1rem 1rem",
                margin: "0rem 0.5rem"
              }}
              onClick={() => genreClickHandler(genre)}
              key={genre}
            >
              {genre}
            </button>
          ))}
        </div>
        <hr />
        <div style={{ textAlign: "left" }}>
          <ul className="resouces-list">
            {bookdictionary[selectedGenre].map((book, index) => {
              return (
                <li className="li-inline" key={index}>
                  <div className="resorceList-div">{book.name}</div>
                  <div className="resorceList-div"> {book.rating}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <footer>
        <div>
          A project by
          <a
            class="link-href"
            href="https://vidhiaggarwal.netlify.app/"
            title="Click it! To know more about me"
          >
            {" "}
            Vidhi Aggarwal ❤️
          </a>
        </div>
        ©️
      </footer>
    </div>
  );
}
