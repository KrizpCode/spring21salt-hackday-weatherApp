import React from 'react';
import './DailyCardInfo.css';

const dayDateFormatter = (unixTime) => {
  const unixTimeInMs = unixTime * 1000;
  const dateObject = new Date(unixTimeInMs);
  const dateOptions = { weekday: 'long' };
  return dateObject.toLocaleDateString("en-US", dateOptions);
};

const dateFormatter = (unixTime) => {
  const unixTimeInMs = unixTime * 1000;
  const dateObject = new Date(unixTimeInMs);
  const dateOptions = { month: 'long', day: 'numeric'};
  return dateObject.toLocaleDateString("en-US", dateOptions);
};

const DailyCardInfo = ({ dailyInfo}) => {

  return (
    <div
      className="list-item__weekly-info">
      {dailyInfo.daily && dailyInfo.daily.map((day, index) => (
        index < 5 &&
        <div
          key={index}
          className="weekly-info__card">
          <h4>{dayDateFormatter(day.dt)}</h4>
          <h6>{dateFormatter(day.dt)}</h6>
          <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description} />
          <h4 className="list-item__minmax-temp"><span className="color--light-yellow">{Math.round(day.temp.max)}°</span> / <span className="color--light-purple">{Math.round(day.temp.min)}°</span></h4>
          <h5>{day.weather[0].main}</h5>
      </div>))}
    </div>
  )
}

export default DailyCardInfo;
