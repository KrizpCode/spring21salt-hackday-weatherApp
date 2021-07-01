import React, { useState } from 'react';
import './CardNav.css';
import DetailsCardInfo from '../DetailsCardInfo/DetailsCardInfo';
import WeeklyCardInfo from '../WeeklyCardInfo/WeeklyCardInfo';
import HourlyCardInfo from '../HourlyCardInfo/HourlyCardInfo';

const CardNav = ({ dailyInfo, results }) => {
  const [active, setActive] = useState([
    {
      id: 1,
      name: 'Details',
      active: true
    },
    {
      id: 2,
      name: 'Hourly',
      active: false
    },
    {
      id: 3,
      name: 'Weekly',
      active: false
    }
  ]);

  const handleToggle = e => {
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
      {active[0].active && <DetailsCardInfo results={results} />}
      {dailyInfo.daily && active[1].active && <HourlyCardInfo dailyInfo={dailyInfo} />}
      {dailyInfo.daily && active[2].active && <WeeklyCardInfo dailyInfo={dailyInfo} />}
    </>
  )
}

export default CardNav
