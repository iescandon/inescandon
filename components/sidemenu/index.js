import Link from "next/link";
import Image from "next/image";
import { work } from "../../lib/data";

export default function SideMenu({selectedProjectIndex, setSelectedProjectIndex, image}) {
  return (
      <aside className="border-b lg:border-r border-silver p-5 relative md:fixed w-full md:w-3/12 min-h-screen overflow-auto inset-0 shadow-lg">
        <Link href="/">
          <a tabindex={-1} className="mt-3 text-4xl"><i tabindex={0} className="fa fa-arrow-circle-left text-coolBlue hover:text-goldenrod"                     onKeyDown={(e)=>{
                    if (e.key === "Enter" || "") {
                      window.location.href = "/";
                    }
                  }}></i></a>
        </Link>
        <ul className="mt-4">
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
                    tabindex={0}
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
