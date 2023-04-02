import { Link } from "react-router-dom";

export type BreadCrambsProps = {
  links: string[];
};

export function Breadcrumbs({ links }: BreadCrambsProps) {
  return (
    <nav>
      {links.map((link, index) => (
        <Link key={index} to={link}>
          {link}
        </Link>
      ))}
    </nav>
  );
}
