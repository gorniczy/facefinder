import React from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import Rank from "./components/rank/Rank";
import LinkForm from "./components/linkform/LinkForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <LinkForm />
      {
        // <Image />
      }
    </div>
  );
}

export default App;
