import { Link } from "react-router-dom";
import { LinkButton } from "../LinkButton";
import { FaCat } from "react-icons/fa";

export function AppBar() {
  return (
    <header className="fixed w-screen flex justify-between px-8 bg-[#424242] text-zinc-800-gray-900 items-center h-20 shadow-2xl">
      <Link to="/">
        <FaCat size={40} color={"#eee4df"} />
      </Link>
      <div
        className="font-extrabold text-[#BDBDBD] text-3xl 
      "
      >
        NotePad
      </div>
      <div>
        <LinkButton to="/criar-notepad">Criar NotePad</LinkButton>
      </div>
    </header>
  );
}
