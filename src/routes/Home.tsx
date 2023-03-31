//import { METHODS } from "http";
import { useState, useEffect } from "react";
import { NotepadList, Notepad } from "../components/NotepadList";
import { api } from "../api";

async function pegaNotepads() {
  const res = await api.get("/notepads");
  const notepads = res.data;
  return notepads;
}

const initialNotepads: Notepad[] = [];

export function Home() {
  const [notepads, setNotepads] = useState(initialNotepads);
  const [isLoading, setIsLoading] = useState(false);
  const textoCarregando = isLoading ? "Carregando ..." : " ";

  useEffect(() => {
    setIsLoading(true);
    pegaNotepads().then((notepads) => {
      setNotepads(notepads);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {}, [isLoading]);

  return (
    <div>
      <div>{textoCarregando}</div>
      <NotepadList notepads={notepads} />
    </div>
  );
}
