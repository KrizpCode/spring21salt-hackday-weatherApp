import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header className="weather-app__header text--center">
      <h1 className="weather-app__header-title">Weather Application</h1>
      <p className="weather-app__header-subtitle">&lt;/ Hackday @ spring21salt - by Johan Eriksson &gt;</p>
    </header>
  )
}

export default Header
