type ButtonProps = {
  children: string;
  onClick: () => void;
};

export function Button(props: ButtonProps) {
  return (
    <button
      className="bg-orange-400 hover:bg-orange-800 text-white py-2 px-4 rounded-md uppercase font-bold text-sm"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
