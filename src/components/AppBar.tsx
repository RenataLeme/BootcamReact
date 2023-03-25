import { Button } from "./Button";
import { FaCat } from "react-icons/fa";

export function AppBar() {
  return (
    <header className="#ffeaa7 shadow-xl flex p-4 justify-between items-center sticky top-0 left-0">
      <FaCat size="80px" color="#b2bec3" />
      <div className="font-extrabold text-rose-700 text-3xl">NotePad</div>
      <div>
        <Button
          onClick={() => {
            alert("Fui clicado");
          }}
        >
          Clique-me
        </Button>
      </div>
    </header>
  );
}
