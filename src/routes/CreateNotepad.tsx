import { useState } from "react";
import { TextField } from "../components/TextField";

export function CreateNotpad() {
  const [nome, setNome] = useState("");
  return (
    <div>
      <h1>Sou a pagina CreateNotpad</h1>
      <TextField
        placeholder="Digite o seu nome"
        value={nome}
        onChange={(nome) => setNome(nome)}
      />
    </div>
  );
}
