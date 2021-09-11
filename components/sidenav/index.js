import Link from "next/link";
import SocialIcons from '../social-icons';

export default function SideNav({ selectedSection }) {
  const sections = [
    { name: "Work", slug: "work/get-coords" },
    { name: "Resume", slug: "resume" },
    { name: "About", slug: "about" },
    { name: "Contact", slug: "contact" },
  ];
  let selectedRoute = selectedSection;
  if (selectedSection === "/work/[slug]") {
    selectedRoute = "/work/get-coords";
  }
  return (
      <nav id="sidenav" className="relative inset-0 flex items-center justify-center w-full p-5 overflow-auto text-center border-b shadow-md lg:border-r border-silver lg:fixed lg:w-3/12 lg:min-h-screen lg:flex-col lg:shadow-lg">
        <Link href="/">
        <img id="logo" src="/images/blue-logo.webp" alt="blue logo for website" className="inline cursor-pointer lg:hidden" height="50px;" width="50px;"           tabIndex={0}
            onKeyDown={(e)=>{
              if (e.key === "Enter" || "") {
                 window.location.href = '/';
              }
          }}></img>
        </Link>
        <Link href="/">
        <img
          className="hidden w-2/3 transition duration-200 ease-in-out border-2 rounded-full cursor-pointer border-coolBlue md:w-1/6 lg:w-3/5 hover:border-goldenrod lg:block"
          src="/images/inez-pic.webp"
          alt="hispanic girl with curly hair and small yorkie dog"
          tabIndex={0}
            onKeyDown={(e)=>{
              if (e.key === "Enter" || "") {
                 window.location.href = '/';
              }
          }}
        ></img>
        </Link>
        <p className="hidden mt-3 text-5xl font-dawningOfaNewDay lg:block my-name">Inez Escandón</p>
        <p className="hidden font-semibold uppercase lg:block role">Full Stack Web Developer</p>
        <ul className="flex flex-row ml-auto lg:mt-3 lg:flex-col lg:ml-0" id="nav-items">
          {sections.map((item, i) => {
            const currentRoute = `/${item.slug}`
            return (
              <Link key={item.slug} href={`/${item.slug}`}>
                <li
                  tabIndex={0}
                  className={`p-2 cursor-pointer my-2 text-center md:hover:text-goldenrod md:transition md:duration-200 md:ease-in-out ${
                    currentRoute === selectedRoute ? "text-coolBlue" : ""
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
        <ul className="justify-center hidden w-full lg:mt-3 lg:flex-row lg:flex">
          <SocialIcons />
        </ul>
      </nav>
  );
}