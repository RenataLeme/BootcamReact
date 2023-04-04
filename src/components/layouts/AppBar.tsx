import { Link } from "react-router-dom";
import { LinkButton } from "../LinkButton";
import { FaCat } from "react-icons/fa";

export function AppBar() {
  return (
    <header className="fixed w-screen flex justify-between px-6 bg-[#424242] text-zinc-800-gray-900 items-center h-20 shadow-2xl">
      <Link to="/" className="flex flex-row ">
        <FaCat size={45} color={"#bdb6b2"} />
        <h1 className="text-2xl font-bold text-zinc-500 px-4 items-center">
          AppNote
          <h2 className="text-sm text-zinc-900 itms-center">Página Inicial</h2>
        </h1>
      </Link>

      {/* <div
        className="font-extrabold text-[#BDBDBD] text-3xl 
      "
      >
        NotePad
      </div> */}
      <div className="mr-6">
        <LinkButton to="/criar-notepad">Criar NotePad</LinkButton>
      </div>
    </header>
  );
}
