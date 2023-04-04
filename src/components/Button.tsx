type ButtonProps = {
  children: string;
  onClick: () => void;
};

export function Button(props: ButtonProps) {
  return (
    <button
      className="mt-20 flex bg-gray-700 w-28 hover:bg-gray-500 py-2 text-white px-4 rounded-md uppercase font-bold text-sm shadow-lg"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
