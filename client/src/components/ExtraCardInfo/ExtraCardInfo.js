import React from 'react';
import './ExtraCardInfo.css';

const ExtraCardInfo = ({ results }) => {
  return (
    <div className="list-item__extra-info">
      <div className="extra-info__card">
        <h3><i className="fas fa-hand-sparkles"></i> {Math.floor(results.main.feels_like)} °</h3>
        <h4>Feels Like</h4>
      </div>
      <div className="extra-info__card">
        <h3><i className="fas fa-tint"></i> {Math.floor(results.main.humidity)} %</h3>
        <h4>Humidity</h4>
      </div>
      <div className="extra-info__card">
        <h3><i className="fas fa-wind"></i> {results.wind.speed} m/s</h3>
        <h4>Wind-Speed</h4>
      </div>
    </div>
  )
}

export default ExtraCardInfo
