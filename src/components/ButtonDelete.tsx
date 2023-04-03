type ButtonProps = {
  children: string;
  onClick: () => void;
};

export default function ButtonDelete(props: ButtonProps) {
  return (
    <button
      className="mt-0 flex w-28 bg-gray-700 hover:bg-red-900 py-2  text-white px-6 rounded-md uppercase font-bold text-sm shadow-lg"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
