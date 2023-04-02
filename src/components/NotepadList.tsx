import { Link } from "react-router-dom";

export type Notepad = {
  id: number;
  title: string;
  subtitle: string;
  created_at: string;
};

export type NotepadListProps = {
  notepads: Notepad[];
};

export function NotepadList({ notepads }: NotepadListProps) {
  return (
    <div className="flex flex-col w-[280px] bg-[#68767d] rounded-md mt-[60px] mb-18 mx-12 shadow-2xl max-w-screen-md md:w-[1000px] md:mx-20 md:m-4 text-start">
      {notepads.map((notepadAtual) => {
        return (
          <Link to={`/publicacoes/${notepadAtual.id}`} key={notepadAtual.id}>
            <div
              key={notepadAtual.id}
              className="mb-4 border-b color[grey] px-10 pt-4"
            >
              <time dateTime={notepadAtual.created_at}>
                {new Date(notepadAtual.created_at).toLocaleDateString()}
              </time>
              <h2 className="max-h-screen font-bold text-lg pt-2  margin-botton[6px] hover:text-zinc-300 hover:cursor-pointer">
                {notepadAtual.title}
              </h2>
              <p className="text-sm text-slate-300 px-4 pb-4">
                {notepadAtual.subtitle}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
