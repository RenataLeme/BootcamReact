import { Link } from "react-router-dom";

type EditLinkButtonProps = {
  children: string;
  to: string;
};

export function EditLinkButton(props: EditLinkButtonProps) {
  return (
    <Link
      to={props.to}
      className="flex flex-row bg-gray-600 hover:bg-gray-300 text-white py-2 px-8 rounded-md uppercase font-bold text-sm shadow-lg"
    >
      {props.children}
    </Link>
  );
}
