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
  let selectedRoute = "";
  if (selectedSection === "/work/[slug]") {
    selectedRoute = "/work/get-coords";
  }
  return (
      <aside id="sidenav" className="relative inset-0 flex items-center justify-center w-full p-5 overflow-auto text-center border-b shadow-md lg:border-r border-silver lg:fixed lg:w-3/12 lg:min-h-screen lg:flex-col lg:shadow-lg">
        <Link href="/">
        {/* <p className="pl-2 font-extrabold transition duration-200 ease-in-out cursor-pointer inez font-dawningOfaNewDay text-coolBlue hover:text-goldenrod text-7xl lg:hidden">ie</p> */}
        <img id="logo" src="/images/blue-logo.png" alt="blue logo for website" className="inline cursor-pointer lg:hidden" height="50px;" width="50px;"></img>
        </Link>
        <Link href="/">
        <img
          className="hidden w-2/3 transition duration-200 ease-in-out border-2 rounded-full cursor-pointer border-coolBlue md:w-1/6 lg:w-3/5 hover:border-goldenrod lg:block"
          src="/images/inez-pic.png"
          alt="hispanic girl with curly hair and small yorkie dog"
        ></img>
        </Link>
        <h1 className="hidden mt-3 text-5xl font-dawningOfaNewDay lg:block my-name">Inez Escandón</h1>
        <h4 className="hidden font-semibold uppercase lg:block role">Full Stack Web Developer</h4>
        <ul className="flex flex-row ml-auto lg:mt-3 lg:flex-col lg:ml-0" id="nav-items">
          {sections.map((item, i) => {
            const currentRoute = `/${item.slug}`
            return (
              <Link key={item.slug} href={item.slug}>
                <li
                  id="section-nav"
                  tabIndex={0}
                  className={`p-2 cursor-pointer my-2 text-center md:hover:text-goldenrod md:transition md:duration-200 md:ease-in-out ${
                    currentRoute === selectedRoute ? "text-coolBlue" : ""
                  }`}
                  onKeyDown={(e)=>{d
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
        <ul className="justify-center hidden w-full lg:mt-3 lg:flex-row lg:flex">
          <SocialIcons isNav={true}/>
        </ul>
      </aside>
  );
}