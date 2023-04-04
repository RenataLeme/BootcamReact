import { useState } from "react";
import { TextField } from "../components/TextField";
import { TextArea } from "../components/TextArea";
import { api } from "../api";
import toast from "react-simple-toasts";
import { useNavigate } from "react-router-dom";

const initialCreateNotepad = {
  title: "",
  subtitle: "",
  content: "",
};

export function CreateNotpad() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialCreateNotepad);

  return (
    <div>
      <h1 className="flex justify-center font-bold text-2xl mt-5 from-neutral-800 md:mb-10">
        Novo Notpad
      </h1>
      <form
        className="flex flex-col gap-1 max-w-md md:mx-auto md:max-w-lg"
        noValidate
        onSubmit={async (event) => {
          event.preventDefault();
          const response = await api.post("/notepads", form);
          if (response.data.success) {
            toast("Notepad criado com sucesso");
            navigate("/");
          } else {
            toast("Erro na criação de notepad");
          }
        }}
      >
        <TextField
          placeholder="Digite o título"
          value={form.title}
          onChange={(title) => setForm({ ...form, title })}
        />
        <TextField
          placeholder="Digite o subtítulo"
          value={form.subtitle}
          onChange={(subtitle) => setForm({ ...form, subtitle })}
        />
        <TextArea
          placeholder="Digite o conteúdo"
          value={form.content}
          onChange={(content) => setForm({ ...form, content })}
        />
        <button
          type="submit"
          className="mt-4 flex w-28 bg-gray-700 hover:bg-gray-500 py-2  text-white mx-24 px-8 rounded-md uppercase font-bold text-sm shadow-lg"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
