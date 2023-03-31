import { AppBar } from "./AppBar";

type Props = {
  children: React.ReactNode;
};

export function Layout(props: Props) {
  return (
    <>
      <div className="pb-[80px]">
        <AppBar />
      </div>
      {props.children}
    </>
  );
}
