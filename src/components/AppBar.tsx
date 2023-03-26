import { Link } from "react-router-dom";
import { LinkButton } from "./LinkButton";
import { FaCat } from "react-icons/fa";

export function AppBar() {
  return (
    <header className="#ffeaa7 shadow-xl flex p-4 justify-between items-center sticky top-0 left-0">
      <Link to="/">
        <img src="/Cat.jpg" alt="Logo" className="bg-#ffeaa7 w-16 h-16" />
      </Link>
      <div className="font-extrabold text-rose-700 text-3xl">NotePad</div>
      <div>
        <LinkButton to="/criar-notepad">Criar NotePad</LinkButton>
      </div>
    </header>
  );
}
