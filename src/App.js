import React from "react";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <Weather
        city={"NewYork"}
        CurrentTemp={19}
        CurrentSky={"Cloudy"}
        WindSpeed={10}
        MaxTemp={15}
        MinTemp={8}
        CurrentDate={"Tuesday 10:00"}
      />
    </div>
  );
}
