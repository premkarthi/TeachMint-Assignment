import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  useEffect(() => {
    const fetchCurrentTime = () => {
      if (selectedCountry) {
        const apiUrl = `http://worldtimeapi.org/api/timezone/${selectedCountry}`;
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => setCurrentTime(new Date(data.utc_datetime).toLocaleTimeString()))
          .catch(error => console.error('Error fetching current time:', error));
      }
    };

    if (!isPaused) {
      fetchCurrentTime();
      intervalRef.current = setInterval(fetchCurrentTime, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused, selectedCountry]);

  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
    console.log(currentTime);
  };

  const handlePauseStart = () => {
    setIsPaused(prevIsPaused => !prevIsPaused);
  };

  return (
    <div className="clock-container">
     <Link to='/' className='back'>Back</Link>
      <div className="clock-controls">
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="" disabled>
            Select a country
          </option>
          {countries.map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <div className="clock-display">{currentTime}</div>
        <button onClick={handlePauseStart}>{isPaused ? 'Start' : 'Pause'}</button>
      </div>
    </div>
  );
};

export default Header;
