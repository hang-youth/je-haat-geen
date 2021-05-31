import './App.css';

import wordlist from './wordlist.txt'
import { useEffect, useState } from 'react';

function App() {
  const [words, setWords] = useState([])
  const [word, setWord] = useState('maandag')
  
  useEffect(() => {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!words.length) {
      fetchWords();
    }
  }, []);

  const fetchWords = async () => {
    fetch(wordlist)
      .then(r => r.text())
      .then(text => {
        const newWords = text.split('\n')
        setWords(newWords)
      });

  }
  document.body.onkeyup = (e) => randomWord()

  const randomWord = () => {
    setWord(words[Math.floor(Math.random() * words.length)])
  }

  if(!words){
    return ''
  }
  // console.log(words);

  return (
    <div className="App" onClick={() => randomWord()}>
      <h1>JE HAAT GEEN<br/><span>{word}</span>,<br/> JE HAAT KAPITALISME</h1>
      <a href="https://hangyouth.bandcamp.com/" title="Hang Youth bandcamp" target="_blank" rel="noreferrer">Luister naar Hang Youth</a>
    </div>
  );
}

export default App;
