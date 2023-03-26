import { useParams } from "react-router-dom";

export function ViewNotepad() {
  const params = useParams();

  return (
    <div>
      <h1>Sou a pagina de vizualização do notepad</h1>
      <p>Meu id é: {params.id}</p>
    </div>
  );
}
