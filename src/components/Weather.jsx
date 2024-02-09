export const Weather = ({ main, wind, name, isFahrenheit }) => {
  const tempUnit = isFahrenheit ? "F" : "C";
  const speedUnit = isFahrenheit ? "miles" : "km";
  return (
    <>
      <div className="top">
        <p className="location">{name}</p>
        <h1 className="temp">
          {Math.round(main.temp)}° {tempUnit}
        </h1>
        <div className="app-name">Weather App</div>
      </div>

      <div className="bottom">
        <div className="feels">
          <p className="bold">
            {Math.round(main.feels_like)}° {tempUnit}
          </p>
          <p>Feels like</p>
        </div>

        <div className="humidity">
          <p className="bold">{main.humidity}%</p>
          <p>Humidity</p>
        </div>

        <div className="wind">
          <p className="bold">
            {wind.speed} {speedUnit}/hr
          </p>
          <p>Wind speed</p>
        </div>
      </div>
    </>
  );
};
