const notepads = [
  { id: 1, title: "Título1", subtitle: "Subtítulo1" },
  { id: 2, title: "Título2", subtitle: "Subtítulo2" },
  { id: 3, title: "Título3", subtitle: "Subtítulo3" },
  { id: 4, title: "Título4", subtitle: "Subtítulo4" },
];

export function NotepadList() {
  return (
    <ul>
      {notepads.map((notepadAtual) => {
        return (
          <li key={notepadAtual.id}>
            <h2 className="font-bold text-lg pt-12 px-12 py-2 hover:text-zinc-300 hover:cursor-pointer">
              {notepadAtual.title}
            </h2>
            <p className="text-sm text-fuchsia-400 py-0 px-12">
              {notepadAtual.subtitle}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
