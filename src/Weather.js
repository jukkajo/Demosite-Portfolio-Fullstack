import React, { useEffect, useState } from 'react';
import './Weather.css';

function Weather() {
  const [userLocation, setUserLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [iconClassName, setIconClassName] = useState('wi-day-sunny');
  const [currentWeatherAnimation, setCurrentWeatherAnimation] = useState('1');
  const [weatherExplanation] = useState(['wi-thunderstorm', 'wi-showers', 'wi-rain', 'wi-snow', 'wi-fog', 'wi-day-sunny', 'wi-cloudy', 'wi-cloud']);


  useEffect(() => {
    setIconClassName(WeatherAnimation());
    if (!userLocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`${latitude},${longitude}`);
        },
        error => console.log(error)
      );
    }
  }, [userLocation]);
  
function WeatherAnimation() {
  //let iconClassName = '';

  if (weatherData && weatherData.weather) {
    const weatherConditionId = weatherData.weather[0].id;

    if (weatherConditionId >= 200 && weatherConditionId < 300) {
      iconClassName = weatherExplanation[0];
    } else if (weatherConditionId >= 300 && weatherConditionId < 400) {
      iconClassName = weatherExplanation[1];
    } else if (weatherConditionId >= 500 && weatherConditionId < 600) {
      iconClassName = weatherExplanation[2];
    } else if (weatherConditionId >= 600 && weatherConditionId < 700) {
      iconClassName = weatherExplanation[3];
    } else if (weatherConditionId >= 700 && weatherConditionId < 800) {
      iconClassName = weatherExplanation[4];
    } else if (weatherConditionId === 800) {
      iconClassName = weatherExplanation[5];
    } else if (weatherConditionId === 801 || weatherConditionId === 802) {
      iconClassName = weatherExplanation[6];
    } else if (weatherConditionId === 803 || weatherConditionId === 804) {
      iconClassName = weatherExplanation[7];
    }
  }

  return iconClassName;
}


  useEffect(() => {
    if (userLocation) {
      const apiKey = 'c222cbc4e035a20f1fd224b07b6cd4e7';
      const [latitude, longitude] = userLocation.split(',');
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then(res => res.json())
        .then(data => {
          setWeatherData(data);
          setLoading(false);
        })
        .catch(error => console.log(error));
    }
  }, [userLocation]);
  //let iconClassName = WeatherAnimation();
  
  
  function manipulateWeather() {
  
    if(currentWeatherAnimation < 7 ) {
      const newIndex = currentWeatherAnimation + 1;
      setCurrentWeatherAnimation(newIndex);
      setIconClassName(weatherExplanation[currentWeatherAnimation]);
    }
    else {
      setCurrentWeatherAnimation(1);
      setIconClassName(weatherExplanation[currentWeatherAnimation]);
    }
  }

return (
  <div className="weather-container">
    {loading ? (
      <div className="loading-container">
        <div className="loading">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    ) : (
      <div className="animationAndInfo">
        <div>
        <p>Not a fan of the current weather?<br></br> Click Zeus!</p>
        <img id="zeus" src={process.env.PUBLIC_URL + '/zeus.png'} alt="Zeus" onClick={manipulateWeather} />
        </div>
        <div className="weather-animations">
          {iconClassName === weatherExplanation[0] && <div className="">
          <div className="cloud"></div>
	  <div className="cloud"></div>
          </div>}
          
          {iconClassName === "wi-thunderstorm" && 
            <div className="w-thunderstorm">
            <div className="bolt"></div>
            <div className="bolt"></div>
            <div className="bolt"></div>
            </div>
          }
          
          {iconClassName === "wi-showers" && <div className="">
          <div className="rain"></div>
          <div className="rain"></div>
          <div className="rain"></div>
          <div className="rain"></div>
          <div className="rain"></div>
          <div className="cloud"></div>
          </div>}
          
          {iconClassName === "wi-rain" && <div className="">
          <div className="cloud"></div>
	  <div className="rain"></div>
	  <div className="rain"></div>
	  <div className="rain"></div>
	  <div className="rain"></div>
          </div>}
          
          {iconClassName === "wi-snow" && <div className="">
          <div className="snow">
	  <div className="f"></div>
	  </div>
          </div>}
          
          {iconClassName === "wi-fog" && <div className="">
          <div className="fog"></div>
          <div className="fog"></div>
          </div>}
          
          {iconClassName === "wi-cloudy" && <div className="w-cloud">
          <div className="cloud"></div>
          <div className="cloud"></div>
          </div>}
          
          
          {iconClassName === "wi-cloud" && <div className="w-cloudAndSun">
          <div className="cloud"></div>
	  <div className="sun">
	    <div className="rays"></div>
	    <div className="rays"></div>
	    <div className="rays"></div>
	    <div className="rays"></div>
	  </div>
          </div>}
          
          {iconClassName === "wi-day-sunny" && (
            <div className="w-sun">
              <div className="sun">
                <div className="rays"></div>
                <div className="rays"></div>
                <div className="rays"></div>
                <div className="rays"></div>
              </div>
            </div>
          )}
          
          {iconClassName === "wi-cloudy" && <div className="">
          
          </div>}
          
        </div>
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
        </div>
      </div>
    )}
  </div>
);


}

export default Weather;

