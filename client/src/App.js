import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Searchbar from './components/Searchbar/Searchbar';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState({});

  const fetchResults = (searchWord) => {
    fetch(`/api/cityname/${searchWord}`)
      .then(res => res.json())
      .then(data => setResults(data));
  }

  return (
    <section className="weather-app">
      <Header />
      <Searchbar onSubmit={fetchResults}/>
      <ul className="weather-app__list">
        {results.name && <Card results={results}/>}
      </ul>
    </section>
  );
}

export default App;
