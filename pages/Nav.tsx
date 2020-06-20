import Github from "./Github";
import Link from "next/link";
import usePathname from "components/usePathname";

const list = [
  { title: "Home", url: "/" },
  { title: "Document", url: "/document" },
  { title: "Example", url: "/example" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="px-sm h-2xl bg-white fixed w-12/12 top-0 left-0 bb-px b-gray-300 row start-center z-20">
      <img className="w-xl h-xl mr-lg" src="/static/imgs/fbc-logo.svg"></img>
      {list.map((v) => {
        const match =
        v.url === "/" ? pathname === v.url : pathname.indexOf(v.url) > -1;

        return (
          <Link key={v.url} href={v.url}>
            <a
              className={[
                "mx-sm px-md text-teal-600 hover:text-teal-900 hover:bg-teal-200 h-12/12 row center-center",
                match && "bg-teal-100 text-teal-999",
              ].join(" ")}
            >
              {v.title}
            </a>
          </Link>
        );
      })}
      <div className="flex-1"></div>
      <Github />
    </nav>
  );
}