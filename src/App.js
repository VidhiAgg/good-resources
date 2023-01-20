import "./styles.css";
import React, { useState } from "react";
const bookdictionary = {
  javascript: [
    {
      name: "Eloquent javascript",
      description:
        "Eloquent JavaScript goes beyond the cut-and-paste scripts of the recipe books and teaches you to write code that's elegant and effective. ",
      rating: "4.5/5"
    },
    {
      name: "You Don't Know JS",
      description:
        "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This book is a series of books which explores JavaScript types in greater depth.",
      rating: "3.5/5"
    }
  ],

  fiction: [
    {
      name: "Games of Thrones",
      description:
        "It is a very popular darama telivison series created for HBO.Must Watch!!",
      rating: "5/5"
    },
    {
      name: "Manifest",
      description:
        "It is an American series availabel on Netflix created on NBC. It is about the passengers and crew of a commercial airline who suddenly reappear after five and a half year. ",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "The Pursuit of Happyness",
      description:
        "It  is an encouraging and inspiring autobiography of a person, who overcame all types of misfortune and adversity to become a powerful person in a world of finance",
      rating: "5/5"
    },
    {
      name: "Steve Jobs",
      description:
        "The story unfolds backstage at three iconic product launches, ending in 1998 with the unveiling of the iMac.",
      rating: "4/5"
    }
  ],
  thrilled: [
    {
      name: "Sherlock Holmes",
      description:
        "It is a series availabel on amazon prime. It is about a detective name Sherloack and how he solve his cases. Very Interesting series",
      rating: "5/5"
    },
    {
      name: "Enola Holmes",
      description:
        "It is a series availabel on Netflix. It is about a detective name Enola Holmes, sister of Sherlock Holmes, how she bought up and how she solve his cases. Very Interesting series",

      rating: "4.5/5"
    }
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
                  <div
                    className="resorceList-div"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {book.description}
                  </div>
                  <div
                    className="resorceList-div"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {" "}
                    {book.rating}
                  </div>
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
