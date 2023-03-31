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
    <div className="flex flex-col shadow-2xl rounded-md w-[250px] bg-[#68767d] mt-[60px] mb-18 mx-12 ">
      {notepads.map((notepadAtual) => {
        return (
          <Link to={`/publicacoes/${notepadAtual.id}`}>
            <div>
              <div key={notepadAtual.id}>
                <h2 className="max-h-screen font-bold text-lg pt-2 px-6 margin-botton[6px] hover:text-zinc-300 hover:cursor-pointer">
                  {notepadAtual.title}
                </h2>
                <p className="text-sm text-slate-300 px-12 pb-4">
                  {notepadAtual.subtitle}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
