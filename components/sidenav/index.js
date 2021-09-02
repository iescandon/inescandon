import Link from "next/link";
import Image from "next/image";
import SocialIcons from '../social-icons';

export default function SideNav({ selectedSection }) {
  const sections = [
    { name: "Work", slug: "work/get-coords" },
    { name: "Resume", slug: "resume" },
    { name: "About", slug: "about" },
    { name: "Contact", slug: "contact" },
  ];
  return (
      <aside id="sidenav" className="border-b lg:border-r border-silver p-5 relative lg:fixed w-full lg:w-3/12 lg:min-h-screen overflow-auto inset-0 flex lg:flex-col items-center justify-center text-center shadow-md lg:shadow-lg">
        <Link href="/">
        {/* <p className="transition duration-300 ease-in-out cursor-pointer inez pl-2 font-dawningOfaNewDay font-extrabold text-coolBlue hover:text-goldenrod text-7xl lg:hidden">ie</p> */}
        <img id="logo" src="/images/blue-logo.png" alt="blue logo for website" className="cursor-pointer lg:hidden inline" height="50px;" width="50px;"></img>
        </Link>
        <Link href="/">
        <img
          className="transition duration-300 ease-in-out cursor-pointer rounded-full w-2/3 md:w-1/6 lg:w-3/5 border-2 border-coolBlue hover:border-goldenrod hidden lg:block"
          src="/images/inez-pic-clean.png"
          alt="hispanic girl with curly hair and small yorkie dog"
        ></img>
        </Link>
        <h1 className="mt-3 text-5xl font-dawningOfaNewDay hidden lg:block my-name">Inez Escandón</h1>
        <h4 className="uppercase font-semibold hidden lg:block role">Full Stack Web Developer</h4>
        <ul className="lg:mt-3 flex flex-row lg:flex-col ml-auto lg:ml-0" id="nav-items">
          {sections.map((item, i) => {
            return (
              <Link key={item.slug} href={item.slug}>
                <li
                  id="section-nav"
                  tabIndex={0}
                  className={`p-2 cursor-pointer my-2 text-center transition duration-300 ease-in-out ${
                    item.slug === selectedSection ? "text-coolBlue" : ""
                  }`}
                  onKeyDown={(e)=>{
                    if (e.key === "Enter" || "") {
                      window.location.href = `/${item.slug}`;
                    }
                  }}
                >
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <ul className="lg:mt-3 w-full lg:flex-row justify-center hidden lg:flex">
          <SocialIcons />
        </ul>
      </aside>
  );
}