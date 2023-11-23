import React, { useState } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Help from "./Request/Help";
import Results from "./Components/Results/Results";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(Help.fetchTrending);
  console.log(selectedOption);

  return (
    <div className="app">
      <Header setSelectedOption={setSelectedOption} />
      <Nav setSelectedOption={setSelectedOption} />
      <Results seletedOption={selectedOption} />
    </div>
  );
};

export default App;
