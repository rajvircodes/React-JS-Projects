import { useState } from 'react'
import '../components/Weather.css'

import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
import axios from 'axios'

const API_KEY = '6b2f58594380cd5428f8b702c29c1698'

const Weather = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name')
      return
    }

    try {
      setLoading(true)
      setError('')

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
          },
        }
      )

      setWeatherData(response.data)
    } catch (error) {
      if (error.response?.status === 404) {
        setError('City not found. Please try again.')
      } else {
        setError('Something went wrong. Please try again.')
      }
      setWeatherData(null)
      console.error('Error fetching weather:', error)
    } finally {
      setLoading(false)
    }
  }

  // Allow pressing Enter to search
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') fetchWeather()
  }

  return (
    <div className='weather'>

      <div className='search-bar'>
        <input
          type="text"
          placeholder='Search city...'
          value={city}
          onChange={handleCityChange}
          onKeyDown={handleKeyDown}  
        />
        <button onClick={fetchWeather} disabled={loading}>
          <img src={search_icon} alt="search" /> 
        </button>
      </div>

      {/* Error message */}
      {error && <p className='error-msg'>{error}</p>}

      {/* Loading state */}
      {loading && <p className='loading-msg'>Loading...</p>}

      {/* Weather display */}
      {weatherData && !loading && (
        <>
          <img src={clear_icon} alt="weather icon" className='weather-icon' />

          <p className='temp'>{Math.round(weatherData.main.temp)}°C</p>

          <p className='location'>{weatherData.name}, {weatherData.sys.country}</p>

          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="humidity" />
              <div>
                <p>{weatherData.main.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>

            <div className="col">
              <img src={wind_icon} alt="wind" />
              <div>
                <p>{weatherData.wind.speed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default Weather