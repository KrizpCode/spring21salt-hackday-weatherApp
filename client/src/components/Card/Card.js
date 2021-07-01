import React, { useState } from 'react';
import CardNav from '../CardNav/CardNav';
import './Card.css';

const dateFormatter = (unixTime) => {
  const unixTimeInMs = unixTime * 1000;
  const dateObject = new Date(unixTimeInMs);
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: "numeric"};
  return dateObject.toLocaleDateString("en-US", dateOptions);
};

const Card = ({ results }) => {
  const [dailyInfo, setDailyInfo] = useState({});

  const fetchDailyInfo = () => {
    fetch(`/api/coords/${results.coord.lon}&${results.coord.lat}`)
      .then(res => res.json())
      .then(data => setDailyInfo(data));
  }
  
  return (
    <>
      <li className={`weather-app__list-item`}>
        <div className="list-item-container">
          <div className="list-item__main-content">
            <div className="list-item__content--left-side">
              <h3 className="list-item__location">{results.name}, {results.sys.country}</h3>
              <h4 className="list-item__date">{dateFormatter(results.dt)}</h4>
              <img
                src={`http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`}
                alt={results.weather[0].description} />
              <h3 className="list-item__weather">{results.weather[0].main}</h3>
            </div>
            <div className="list-item__content--right-side">
              <h2 className="list-item__temp">{Math.round(results.main.temp)}°</h2>
              <h3 className="list-item__minmax-temp"><span className="color--light-yellow">{Math.round(results.main.temp_min)}°</span> / <span className="color--light-purple">{Math.round(results.main.temp_max)}°</span></h3>
            </div>
          </div>
        <CardNav results={results} dailyFetch={fetchDailyInfo} dailyInfo={dailyInfo}/>
        </div>
      </li>
    </>
  )
}

export default Card;
