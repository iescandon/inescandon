import Link from "next/link";
import { work } from "../../lib/data";

export default function SideMenu({
  selectedProjectIndex,
  setSelectedProjectIndex,
  image,
}) {
  return (
    <div className="">
      <ul className="flex flex-row justify-center w-full mb-5 lg:mb-0">
        {work.map((item, i) => {
          // if(i !== selectedProjectIndex) {
          return (
            <Link href={`/work/${item.slug}`} key={item.title}>
              <li className="mx-1 md:mx-2 menu-item" key={item.title}>
                <img
                  key={item.slug}
                  className={`menu-image flex flex-row cursor-pointer rounded-md shadow-lg ${
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
                    if (e.key === "Enter" || "") {
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
