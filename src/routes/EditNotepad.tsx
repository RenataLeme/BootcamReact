import { useParams } from "react-router-dom";

export function EditNotepad() {
  const params = useParams();
  return <div> Editar Notepad: {params.id}</div>;
}
