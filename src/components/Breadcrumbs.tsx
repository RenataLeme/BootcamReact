import { Link } from "react-router-dom";
import { MdTrendingFlat } from "react-icons/md";

export type BreadcrambsProps = {
  links: { title: string; link: string }[];
};

export function Breadcrumbs({ links }: BreadcrambsProps) {
  return (
    <nav className=" flex flex-row justify-start w-[400px]">
      {links.map(({ title, link }, index) => (
        <span>
          <Link
            key={index}
            to={link}
            className="text-sm text-zinc-900 flex flex-row mt-10 mb-0"
          >
            <MdTrendingFlat size="24px" />
            {title}
          </Link>
        </span>
      ))}
    </nav>
  );
}
