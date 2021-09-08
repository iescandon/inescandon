import Link from "next/link";
import Image from "next/image";
import { work } from "../../lib/data";

export default function SideMenu({selectedProjectIndex, setSelectedProjectIndex, image}) {
  return (
      <div className="mt-5 overflow-auto">
          <ul className="w-full flex flex-row justify-center">
          {work.map((item, i) => {
            return (
              <Link href={`/work/${item.slug}`} key={item.title}>
                <li className="mx-1 md:m-2 menu-item">
                  <img
                    key={item.slug}
                    id="menu-image"
                    className={`flex flex-row cursor-pointer rounded-md shadow-lg ${
                      i === selectedProjectIndex
                        ? "border-2 border-coolBlue"
                        : "border border-platinum"
                    }`}
                    src={item.image.src}
                    alt={image.alt}
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
      </div>
  );
}
