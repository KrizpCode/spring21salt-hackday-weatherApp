import React from 'react';
import './HourlyCardInfo.css';

const timeFormatter = (unixTime) => {
  const unixTimeInMs = unixTime * 1000;
  const dateObject = new Date(unixTimeInMs);
  const dateOptions = { hour: 'numeric' };
  const time = dateObject.toLocaleDateString("en-US", dateOptions);
  return time.split(',')[1];
};

const HourlyCardInfo = ({ dailyInfo }) => {
  return (
    <div
    className="list-item__hourly-info">
    {dailyInfo.hourly && dailyInfo.hourly.map((hour, index) => (
      index < 8 &&
      <div
        key={index}
        className="hourly-info__card">
        <h4>{timeFormatter(hour.dt)}</h4>
        <img
            src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
            alt={hour.weather[0].description} />
        <h4>{Math.floor(hour.temp)}°</h4>
        <h5>{hour.weather[0].main}</h5>
    </div>))}
  </div>
  )
}

export default HourlyCardInfo
