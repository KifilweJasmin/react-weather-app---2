import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by KifilweJasmin and is open-sourced{" "}
          <a
            href="https://github.com/KifilweJasmin/react-weather-app"
            target="blank"
          >
            on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
