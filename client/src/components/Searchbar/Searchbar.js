import React, { useState } from 'react'
import './Searchbar.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(search);

    setSearch('');
  }

  return (
    <form
      className="weather-app__search"
      onSubmit={handleSubmit}>
      <input
        type="text"
        className="weather-app__search-input text--center"
        value={search}
        placeholder="Search location..."
        onChange={e => setSearch(e.target.value)}/>
      <button type="submit" className="weather-app__search-button">
        <i className="fas fa-search-location"></i>
      </button>
      {/* <input type="submit" value="Search" /> */}
    </form>
  )
}

export default Searchbar
