import React from 'react';

const Card = ({ results }) => {
  return (
    <>
      <h2>Locations</h2>
        <li>
          <h3>{results.name}</h3>
        </li>
    </>
  )
}

export default Card;
