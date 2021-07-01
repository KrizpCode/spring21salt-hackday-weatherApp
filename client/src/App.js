import './App.css';
import Card from './components/Card/Card';
import Searchbar from './components/Searchbar/Searchbar';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState({})

  const fetchResults = (searchWord) => {
    fetch(`/api/${searchWord}`)
      .then(res => res.json())
      .then(results => setResults(results));
  }

  return (
    <section className="App">
      <ul>
        <h1>Weather Application</h1>
        <h2>by Johan Eriksson</h2>
        <Searchbar onSubmit={fetchResults}/>
        {results && <Card results={results}/>}
      </ul>
    </section>
  );
}

export default App;
