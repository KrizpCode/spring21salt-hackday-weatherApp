import React, { useState } from 'react'

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(search);

    setSearch('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={e => setSearch(e.target.value)}/>
      <button type="submit">Search</button>
      {/* <input type="submit" value="Search" /> */}
    </form>
  )
}

export default Searchbar
