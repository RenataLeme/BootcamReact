import React from "react";
import "./App.css";
import { AppBar } from "./components/AppBar";
import { Home } from "./Home";
import { CreateNotpad } from "./route/CreateNotepad";

function App() {
  return (
    <div>
      <AppBar />
      <Home />
    </div>
  );
}

export default App;
