import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppBar } from "./components/AppBar";
import { Home } from "./routes/Home";
import { CreateNotpad } from "./routes/CreateNotepad";
import { ViewNotepad } from "./routes/ViewNotepad";

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-notepad" element={<CreateNotpad />} />
          <Route path="/publicacoes/:id" element={<ViewNotepad />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
