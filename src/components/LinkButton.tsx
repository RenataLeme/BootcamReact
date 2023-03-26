import { Link } from "react-router-dom";

type LinkButtonProps = {
  children: string;
  to: string;
};

export function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      to={props.to}
      className="bg-orange-400 hover:bg-orange-800 text-white py-2 px-4 rounded-md uppercase font-bold text-sm shadow-lg"
    >
      {props.children}
    </Link>
  );
}
