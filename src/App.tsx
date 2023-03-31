import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppBar } from "./components/layouts/AppBar";
import { Home } from "./routes/Home";
import { CreateNotpad } from "./routes/CreateNotepad";
import { ViewNotepad } from "./routes/ViewNotepad";
import { Layout } from "./components/layouts";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-notepad" element={<CreateNotpad />} />
          <Route path="/publicacoes/:id" element={<ViewNotepad />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
