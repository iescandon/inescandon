import Link from "next/link";
import Image from "next/image";
import { work } from "../../lib/data";

export default function SideMenu({selectedProjectIndex, setSelectedProjectIndex, image}) {
  return (
      <div className="mt-5 overflow-auto">
        {/* mt-auto  */}
        {/* <Link href="/">
          <a tabIndex={-1} className="mt-3 text-4xl"><i tabIndex={0} className="md:transition md:duration-200 md:ease-in-out fas fa-arrow-circle-left text-coolBlue md:hover:text-goldenrod" onKeyDown={(e)=>{
                    if (e.key === "Enter" || "") {
                      window.location.href = "/";
                    }
                  }}></i></a>
        </Link> */}
      {/* <hr className="col-span-2 border-t-2 border-platinum"></hr> */}
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
        {/* <ul className="flex flex-row hidden mt-4 lg:block">
          {work.map((item, i) => {
            return (
              <Link href={`/work/${item.slug}`} key={item.title}>
                <li className="">
                  <img
                    key={item.slug}
                    id="menu-image"
                    className={`flex flex-row inline w-1/6 mb-8 cursor-pointer rounded-md shadow-lg ${
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
        </ul> */}
      </div>
  );
}
