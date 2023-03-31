import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../api";
import { Button } from "../components/Button";
import toast from "react-simple-toasts";

export function ViewNotepad() {
  const params = useParams();
  const navigate = useNavigate();
  const [notepad, setNotepad] = useState({
    id: params.id,
    title: "",
    subtitle: "",
    content: "",
    created_at: "",
  });

  useEffect(() => {
    api.get(`/notepads/${params.id}`).then((res) => {
      const notepad = res.data;
      setNotepad(notepad);
    });
  }, []);

  return (
    <div>
      <span>{notepad.id}</span>
      <span>{notepad.created_at}</span>
      <h1>{notepad.title}</h1>
      <p>{notepad.subtitle}</p>
      <span>{notepad.content}</span>

      <Button
        onClick={async () => {
          const res = await api.delete(`/notepads/${params.id}`);
          const deleteNotepadResponse = res.data;

          if (deleteNotepadResponse.success) {
            toast("Item deletado com sucesso");
            navigate("/");
          } else {
            toast("Erro ao deletar o ítem");
          }
        }}
      >
        Deletar
      </Button>
    </div>
  );
}
