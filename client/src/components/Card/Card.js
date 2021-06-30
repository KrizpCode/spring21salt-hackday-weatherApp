import React, { useState, useEffect } from 'react';

const Card = () => {
  const [results, setResults] = useState({
    results: []
  })

  useEffect(() => {
    fetch('/api/cities')
      .then(res => res.json())
      .then(results => setResults({results}));
  }, []);

  return (
    <>
      <h2>Locations</h2>
      {results.results.map(city => (
        <li key={city.id}>
          <h3>{city.city}</h3>
        </li>))}
    </>
  )
}

export default Card;
