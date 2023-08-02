export const Weather = ({ main, wind, name }) => {
  return (
    <>
      <div className="top">
        <p className="location">{name}</p>
        <h1 className="temp">{main.temp}° F</h1>
        <div className="app-name">Weather App</div>
      </div>

      <div className="bottom">
        <div className="feels">
          <p className="bold">{main.feels_like}°</p>
          <p>Feels like</p>
        </div>

        <div className="humidity">
          <p className="bold">{main.humidity}%</p>
          <p>Humidity</p>
        </div>

        <div className="wind">
          <p className="bold">{wind.speed}miles/hr</p>
          <p>Wind speed</p>
        </div>
      </div>
    </>
  );
};
