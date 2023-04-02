type ButtonProps = {
  children: string;
  onClick: () => void;
};

export default function ButtonDelete(props: ButtonProps) {
  return (
    <button
      className="mt-14 flex bg-gray-700 hover:bg-red-900 py-2 margin-[50px] text-white mx-24 px-4 rounded-md uppercase font-bold text-sm shadow-lg"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
