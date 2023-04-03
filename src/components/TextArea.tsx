import { eventNames } from "process";

export type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export function TextArea({ value, placeholder, onChange }: TextAreaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className=" outline-none shadow-lg rounded border focus:border-red-600
    text-base p-2 m-4 rows={5} resize-none"
    />
  );
}
