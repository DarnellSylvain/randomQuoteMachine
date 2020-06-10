import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [quote, setQuote] = useState({});
  const [allQuotes, setAllQuotes] = useState({});

  useEffect((prevState) => {
    setColor(ranColor);
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const num = randomNum();
        setAllQuotes(data);
        setQuote(data[num]);
      });
  }, []);

  const handleClick = () => {
    setColor(ranColor);
    const num = randomNum();
    setQuote(allQuotes[num]);
  };

  const randomNum = () => {
    return Math.floor(Math.random() * 1643);
  };

  const randomColor = require("randomcolor");
  const ranColor = randomColor();
  return (
    <div style={{ background: color, transition: "0.7s" }} className="App">
      <div id="quote-box">
        <h1 id="text" style={{ color: color, transition: "0.7s" }}>
          <sup>
            <i class="fas fa-quote-left"></i>
          </sup>
          {quote.text}
        </h1>
        <p id="author" style={{ color: color, transition: "0.7s" }}>
          - {quote.author}
        </p>
        <div className="buttons">
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            style={{ color: color, transition: "0.7s" }}
          >
            <i class="fab fa-twitter-square"></i>
          </a>

          <button
            onClick={handleClick}
            style={{ background: color, transition: "0.7s" }}
            id="new-quote"
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
