import React, { useState } from 'react';
import './CardNav.css';
import ExtraCardInfo from '../ExtraCardInfo/ExtraCardInfo';

const dateFormatter = (unixTime) => {
  const unixTimeInMs = unixTime * 1000;
  const dateObject = new Date(unixTimeInMs);
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: "numeric"};
  return dateObject.toLocaleDateString("en-US", dateOptions);
};

const CardNav = ({ dailyFetch, dailyInfo, results }) => {
  const [active, setActive] = useState([
    {
      id: 1,
      name: 'Details',
      active: true
    },
    {
      id: 2,
      name: 'Weekly',
      active: false
    }
  ]);

  const handleToggle = e => {
    if (e.target.textContent !== 'Details') {
      console.log(dailyInfo);
      dailyFetch();
    };

    setActive(active.map(button => button.name === e.target.textContent
      ? {...button, active: true}
      : {...button, active: false}));
  };

  return (
    <>
      <nav className="list-item__card-nav">
        {active.map(button => (
          <li key={button.id}>
            <button
              onClick={e => handleToggle(e)}
              className={`card-nav__item ${button.active && 'item--active'}`}>{button.name}</button>
          </li>
        ))}
      </nav>
      {active[0].active && <ExtraCardInfo results={results} />}
    </>
  )
}

export default CardNav
