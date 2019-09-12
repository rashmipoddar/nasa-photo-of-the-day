import React from "react";
import "./App.css";

import ApiData from "./Components/ApiData";
import Logo from "./Components/logo";
import DateSetter from "./Components/dateSetter";

function App() {
  return (
    <div className="App">
      <Logo />
      <DateSetter />
      {/* <ApiData /> */}
    </div>
  );
}

export default App;
