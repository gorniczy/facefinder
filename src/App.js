import React from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      {
        // <LinkForm />
        // <Image />
      }
    </div>
  );
}

export default App;
