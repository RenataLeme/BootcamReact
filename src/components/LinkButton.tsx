import { Link } from "react-router-dom";

type LinkButtonProps = {
  children: string;
  to: string;
};

export function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      to={props.to}
      className="flex bg-gray-500 hover:bg-gray-300 text-white mx-[-20px]  py-2 px-4 rounded-md uppercase font-bold text-sm shadow-lg"
    >
      {props.children}
    </Link>
  );
}
