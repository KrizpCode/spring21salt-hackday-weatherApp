import React from 'react';
import './ErrorCard.css';

const ErrorCard = ({ results }) => {
  return (
    <div className="error-card__image-container">
      <div className="error-card__container text--center">
        <h2 className="error-card__error-icon"><i className="fas fa-exclamation-triangle"></i></h2>
        <h3 className="error-card__status-code">Error {results.cod}</h3>
        <h4 className="error-card__status-message">{results.message}</h4>
        <h4 className="error-card__status-message-guide">Please make a new search</h4>
      </div>
    </div>
  )
}

export default ErrorCard
