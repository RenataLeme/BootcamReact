export type TextFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export function TextField({ value, placeholder, onChange }: TextFieldProps) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className=" outline-none shadow-lg w-80 rounded border focus:border-red-600
    text-base p-2 m-4"
      type="text"
    />
  );
}
