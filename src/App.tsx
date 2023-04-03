import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppBar } from "./components/layouts/AppBar";
import { Home } from "./routes/Home";
import { CreateNotpad } from "./routes/CreateNotepad";
import { ViewNotepad } from "./routes/ViewNotepad";
import { Layout } from "./components/layouts";
import { EditNotepad } from "./routes/EditNotepad";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-notepad" element={<CreateNotpad />} />
          <Route path="/publicacoes/:id" element={<ViewNotepad />} />
          <Route path="/publicacoes/editar/:id" element={<EditNotepad />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
