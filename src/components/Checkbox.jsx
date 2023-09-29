export const Checkbox = ({ handleCheck, isFahrenheit }) => {
  const tempUnit = isFahrenheit ? "Fahrenheit" : "Celsius";
  return (
    <div className="temp-units">
      <label>{tempUnit}</label>
      <input type="checkbox" onChange={handleCheck} checked={isFahrenheit} />
    </div>
  );
};
