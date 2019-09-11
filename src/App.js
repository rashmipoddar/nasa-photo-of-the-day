import React from "react";
import "./App.css";

import ApiData from "./Components/data";
import Logo from "./Components/logo";
import DateSetter from "./Components/datePicker";

function App() {
  return (
    <div className="App">
      <Logo />
      <DateSetter />
      <ApiData />
    </div>
  );
}

export default App;
