import Link from "next/link";
import Image from "next/image";

export default function SideNav({ selectedSection, setSelectedSection }) {
  const sections = [
    { name: "Work", slug: "work" },
    { name: "Resume", slug: "resume" },
    { name: "About Me", slug: "about-me" },
    { name: "Contact", slug: "contact" },
  ];
  return (
    <>
      <aside className="p-5 relative lg:fixed w-full lg:w-3/12 lg:min-h-screen overflow-auto inset-0 flex lg:flex-col items-center justify-around">
        <img src="/images/blue-logo.png" alt="blue logo for website" className="lg:hidden inline" height="50px;" width="50px;"></img>
        <img
          className="lg:mt-5 rounded-full xs:w-2/3 md:w-1/6 lg:w-3/4 border-2 border-coolBlue hidden lg:block"
          src="/images/inez-pic-clean.png"
          alt="hispanic girl with curly hair and small yorkie dog"
        ></img>
        <h1 className="mt-3 text-5xl font-dawningOfaNewDay hidden lg:block">Inez Escandón</h1>
        <h4 className="uppercase font-semibold hidden lg:block">Full Stack Web Developer</h4>
        <ul className="lg:mt-3 flex xs:flex-row lg:flex-col" id="nav-items">
          {/* <ul className="mt-5"> */}
          {sections.map((item, i) => {
            return (
              <Link key={item.slug} href={i === 0 ? "/" : item.slug}>
                <li
                  id="section-nav"
                  className={`p-2 cursor-pointer my-2 text-center ${
                    item.slug === selectedSection ? "text-coolBlue" : ""
                  }`}
                  onClick={() => {
                    setSelectedSection(item.slug);
                  }}
                >
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <ul className="lg:mt-3 w-full flex flex-row justify-center hidden lg:flex">
          <li className="p-3 mx-1">
            <a href="https://www.linkedin.com/in/iescandon/" target="_blank">
              <i className="fa fa-linkedin hover:bg-goldenrod"></i>
            </a>
          </li>
          <li className="p-3 mx-1">
            <a href="https://github.com/iescandon" target="_blank">
              <i className="fa fa-github hover:bg-goldenrod"></i>
            </a>
          </li>
          <li className="p-3 mx-1">
            <a href="https://www.instagram.com/inescandon/" target="_blank">
              <i className="fa fa-instagram hover:bg-goldenrod"></i>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

// bg-coolBlue p-3 rounded-md
