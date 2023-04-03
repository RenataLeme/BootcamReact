import { useState } from "react";
import { TextField } from "../components/TextField";
import { TextArea } from "../components/TextArea";

export function CreateNotpad() {
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  return (
    <div>
      <h1 className="flex justify-center font-bold text-2xl mt-5 from-neutral-800 md:mb-10">
        Novo Notpad
      </h1>
      <form
        className="flex flex-col gap-1 max-w-md md:mx-auto md:max-w-lg"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          alert("NotPad enviado");
        }}
      >
        <TextField
          placeholder="Digite o título"
          value={titulo}
          onChange={(titulo) => setTitulo(titulo)}
        />
        <TextField
          placeholder="Digite o subtítulo"
          value={subtitulo}
          onChange={(subtitulo) => setSubtitulo(subtitulo)}
        />
        <TextArea
          placeholder="Digite o conteúdo"
          value={conteudo}
          onChange={(conteudo) => setConteudo(conteudo)}
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
