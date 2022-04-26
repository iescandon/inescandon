import Link from "next/link";
import { work } from "../../lib/data";

export default function SideMenu({
  selectedProjectIndex,
  setSelectedProjectIndex,
  image,
}) {
  return (
    <div className="">
      <ul className="grid grid-cols-2 lg:flex lg:flex-row mb-5 lg:mb-0">
        {work.map((item, i) => {
          // if(i !== selectedProjectIndex) {
          return (
            <Link href={`/work/${item.slug}`} key={item.title}>
              <li className={`px-1 md:px-2 menu-item w-full pb-6 lg:pb-0 ${i % 2 ? "pl-3" : "pr-3"}`} key={item.title}>
                <img
                  key={item.slug}
                  className={`menu-image flex flex-row cursor-pointer rounded-md shadow-lg lg:h-full object-cover ${
                    i === selectedProjectIndex
                      ? "border-2 border-goldenrod"
                      : "border border-platinum"
                  }`}
                  src={item.image.src}
                  alt={image.alt}
                  onClick={() => {
                    setSelectedProjectIndex(i);
                  }}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      window.location.href = `/work/${item.slug}`;
                    }
                  }}
                ></img>
              </li>
            </Link>
          );
          // }
        })}
      </ul>
    </div>
  );
}
