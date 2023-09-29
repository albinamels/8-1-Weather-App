import React from "react";
import "./App.css";
import { Weather } from "./components/Weather";
import { Search } from "./components/Search";
import { Checkbox } from "./components/Checkbox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favLocation: "London",
      data: {},
      loading: true,
      inputVal: "",
      darkMode: false,
      isFahrenheit: false,
    };
  }

  // initial data fetching, this method calls fetchData() with favLocation argument
  componentDidMount() {
    this.fetchData(this.state.favLocation);

    // get last search from localStorage and fetch it onload
    // this.fetchData(localStorage.getItem("lastSearch"));
  }

  fetchData = async (city) => {
    const unitMeasure = this.state.isFahrenheit ? "imperial" : "metric";
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d030ac84773f6c1da5dcb6a7fe964373&units=${unitMeasure}`
    );
    const data = await res.json();
    // update state -> data is stored, loading is done
    this.setState({ data: data, loading: false });
  };

  handleInput = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  // fetch data with inputVal by request
  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchData(this.state.inputVal);
    // send to localStorage
    // localStorage.setItem("lastSearch", this.state.inputVal);

    // if there is no any storage
    this.setState({ favLocation: this.state.inputVal, inputVal: "" });
  };

  // toggle state => toggle unitMeasure in fetchData, fetch again with the same city from local storage
  handleCheck = () => {
    this.setState(
      { isFahrenheit: !this.state.isFahrenheit },
      () => this.fetchData(localStorage.getItem("lastSearch"))

      // if there is no any storage
      // this.fetchData(this.state.favLocation)
    );
  };

  // toggle state darkMode
  switchMode = () => {
    console.log("clicked");
    // this.state.darkMode
    //   ? this.setState({ darkMode: false })
    //   : this.setState({ darkMode: true });

    this.setState({ darkMode: !this.state.darkMode });
  };

  render() {
    const { data, loading, inputVal, darkMode, isFahrenheit } = this.state;
    console.log(darkMode);
    let clsName = darkMode ? "darkMode" : null;
    return (
      // switchMode btn assigns darkMode class to div by toggling state via btn
      // <div className={`App ${clsName}`}>

      <div className={`App ${clsName}`}>
        <div className="container">
          {/* Cycle: constructor -> render -> fetchData
          on refresh state 'data' is empty -> render empty component -> fetching
          it is necessary to provide condition via 'loading' state in constructor
          {Object.keys(data) === 0 ? <p>Loading...</p> : <Weather {...data} />}  */}

          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="navbar">
                <Checkbox
                  handleCheck={this.handleCheck}
                  isFahrenheit={isFahrenheit}
                />
                <button onClick={this.switchMode}>
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </div>

              <Weather {...data} isFahrenheit={isFahrenheit} />

              <Search
                inputVal={inputVal}
                handleSubmit={this.handleSubmit}
                handleInput={this.handleInput}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;

// components => search => search.jsx
// in search.jsx => create a form with input and a button
// allow users to search for desired city
// implement one of two things: dark mode option => create a checkbox or button that turns the dark mode on.
// save last searched location to local storage.
