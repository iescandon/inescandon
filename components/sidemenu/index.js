import Link from "next/link";
import Image from "next/image";
import { work } from "../../lib/data";

export default function SideMenu({selectedProjectIndex, setSelectedProjectIndex, image}) {
  return (
      <aside className="border-b lg:border-r border-silver p-5 relative lg:fixed w-full lg:w-3/12 lg:min-h-screen overflow-auto inset-0 shadow-lg">
        <Link href="/">
          <a tabIndex={-1} className="mt-3 text-4xl"><i tabIndex={0} className="md:transition md:duration-200 md:ease-in-out fas fa-arrow-circle-left text-coolBlue md:hover:text-goldenrod" onKeyDown={(e)=>{
                    if (e.key === "Enter" || "") {
                      window.location.href = "/";
                    }
                  }}></i></a>
        </Link>
        <ul className="mt-4 hidden lg:block">
          {work.map((item, i) => {
            return (
              <Link href={`/work/${item.slug}`} key={item.title}>
                <li className="flex justify-center">
                  <img
                    key={item.slug}
                    id="menu-image"
                    className={`mb-8 cursor-pointer rounded-md shadow-lg ${
                      i === selectedProjectIndex
                        ? "border-2 border-coolBlue"
                        : "border border-platinum"
                    }`}
                    src={item.image.src[0]}
                    alt={image.alt}
                    width="90%"
                    onClick={() => {
                      setSelectedProjectIndex(i);
                    }}
                    tabIndex={0}
                    onKeyDown={(e)=>{
                    if (e.key === "Enter" || "") {
                      window.location.href = `/work/${item.slug}`;
                    }
                  }}
                  ></img>
                </li>
              </Link>
            );
          })}
        </ul>
      </aside>
  );
}
