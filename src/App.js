import './App.css';
import './quotes.json';
import React, {useState} from 'react';

{/*https://gist.github.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177#file-quotes-json*/}

function App() {
  var quoteDB = require('./quotes.json');

  const [quote, setQuote] = useState(quoteDB[numberGenerator()].quote);
  const [author, setAuthor] = useState(quoteDB[numberGenerator()].author);

  function numberGenerator(){
    var min = 0;
    var max = quoteDB.length;
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
    return randomIndex;
  }

  const newQuote = () => {
    let randomQuote = quoteDB[numberGenerator()].quote;
    let authorQuote = quoteDB[numberGenerator()].author;

    setQuote(randomQuote);
    setAuthor(authorQuote);
  }

  function tweetQuote(){
    console.log("Tweet Quote");
    console.log(quote)
    console.log(author);
    console.log(`https://twitter.com/intent/tweet?text=${quote}--${author}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class="card-header">
                  Random Quotes
                </div>
        <div id="quote-box">
          <div id="text">"{quote}"</div>
          <div id="author">{author}</div>
          <button class="btn btn-success" id="new-quote" onClick={() => newQuote()}>New Quote</button>
          <a size="10" class="btn btn-primary" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote} -${author}`} target="_blank" onClick={() => tweetQuote()}>
            Tweet Quote!
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;