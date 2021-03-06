import Head from "next/head";
import Layout from "../components/layout";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Inez Escandón | Resumé</title>
        <meta
          name="description"
          content="Hola! My name is Inez. I'm a Full Stack Web Developer based out of Houston, TX."
        />
        <meta
          name="keywords"
          content="inez,escandon,software,web,developer,web,development,design,houston,texas"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>
      <Layout>
        <section className="w-full p-7 md:p-10 lg:w-9/12 lg:ml-auto">
          <div id="resume">
            <p className="mb-5 text-4xl font-semibold">
              Check out my{" "}
              <span className="text-5xl font-medium font-dawningOfaNewDay">
                resume
              </span>
            </p>
            <div>
              My name is Inez Escandon and I&apos;m a Full Stack Web Developer
              from Houston, TX. Extremely passionate about creating user-centric
              designs and collaborating with others to develop simple, clean,
              and meaningful mobile and web applications. I am a highly
              motivated self-starter who is fully committed to proving herself
              in a new career, and would be a great asset to any company. Open
              to new opportunities!
            </div>
            <a
              href="https://drive.google.com/file/d/1q5DfZGa9opI0e52uByB0jCVLsrzPr23F/view"
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
            >
              <button className="self-end w-2/5 p-3 my-10 text-black md:transition md:duration-200 md:ease-in-out md:hover:text-white md:hover:bg-coolBlue bg-goldenrod md:w-1/5">
                Download Resume
              </button>
            </a>
            <hr className="mb-10 border-t-2 border-coolBlue"></hr>
            <p className="text-3xl font-semibold">Skills</p>
            <div className="flex flex-row flex-wrap justify-between">
              <ul className="mt-5">
                <li className="font-semibold uppercase">Languages</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                {/* <li>Python</li>
                <li>PHP</li> */}
              </ul>
              <ul className="mt-5">
                <li className="font-semibold uppercase">Front-End Tools</li>
                <li>jQuery</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Angular</li>
                {/* <li>Redux</li> */}
                <li>Web APIs</li>
                <li>Apollo</li>
              </ul>
              <ul className="mt-5">
                <li className="font-semibold uppercase">Back-End Tools</li>
                <li>Rest APIs</li>
                <li>GraphQL</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>mySQL</li>
                <li>MongoDB</li>
              </ul>
              <ul className="mt-5">
                <li className="font-semibold uppercase">Technologies</li>
                <li>Git</li>
                <li>Github/Gitlab</li>
                <li>Visual Studio Code</li>
                <li>Figma</li>
                <li>Wordpress</li>
                <li>Webflow</li>
              </ul>
            </div>
            <hr className="my-10 text-platinum"></hr>
            <div>
              <p className="mb-5 text-3xl font-semibold">Experience</p>
              <section className="mb-5">
                <p className="font-semibold">Slalom</p>
                <p className="font-semibold uppercase">Technology Consultant</p>
                <p className="italic">Houston, TX (Oct 2021 - Present)</p>
                <ul className="pl-8 list-disc">
                  <li>
                    Engage in communication with business professionals, stakeholders, end-users, and customers in face-to-face and conference call meetings.
                  </li>
                  <li>
                    Establish a strong client relationship in order to understand and capture their requirements by creating/updating a series of documentation.
                  </li>
                  <li>
                    Conduct requirement gathering meetings to determine scope definition.
                  </li>
                  <li>
                    Design enhancements to replace an enterprise&apos;s existing product.
                  </li>
                  <li>
                    Develop current and future state architecture diagrams to present solutions for various technical objectives.
                  </li>
                  <li>
                    Continuously acquire in-depth knowledge of technology and modern data solutions.
                  </li>
                </ul>
              </section>
              <section className="mb-5">
                <p className="font-semibold">Poetic Systems</p>
                <p className="font-semibold uppercase">Web Developer</p>
                <p className="italic">Houston, TX (Mar 2021 - Oct 2021)</p>
                <ul className="pl-8 list-disc">
                  <li>
                    Completed support tickets for current Wordpress, Webflow,
                    and Drupal projects all across the company.
                  </li>
                  <li>
                    Completed support tickets for current Full Stack Web Applications all across the company.
                  </li>
                  <li>
                    Developed/refactored features to the clients’ websites that improved user performance and experience.
                  </li>
                  <li>
                    Implemented accessibility features to client’s website to ensure ADA compliance.
                  </li>
                  <li>
                    Communicated effectively and worked collaboratively with
                    fellow developers, project managers, and clients to ensure
                    client satisfaction.
                  </li>
                </ul>
              </section>
              <section className="mb-5">
                <p className="font-semibold">2U Inc</p>
                <p className="font-semibold uppercase">
                  Full Stack Web Development Bootcamp Tutor
                </p>
                <p className="italic">Houston, TX (Jan 2021 - Oct 2021)</p>
                <ul className="pl-8 list-disc">
                  <li>
                    Assist current students with their studies and projects.
                  </li>
                </ul>
              </section>
              <section className="mb-5">
                <p className="font-semibold">2U Inc</p>
                <p className="font-semibold uppercase">
                  Full Stack Web Development Bootcamp Teacher Assistant
                </p>
                <p className="italic">Houston, TX (Jan 2021 - Jul 2021)</p>
                <ul className="pl-8 list-disc">
                  <li>
                    Worked alongside instructor to teach and support students.
                  </li>
                </ul>
              </section>
              <section className="mb-5">
                <p className="font-semibold">Various Districts</p>
                <p className="font-semibold uppercase">
                  Bilingual Elementary Teacher
                </p>
                <p className="italic">Houston, TX (Aug 2010 - Jan 2021)</p>
                <ul className="pl-8 list-disc">
                  <li>
                    Taught grades K-2 as a Bilingual, Dual Language, & PE
                    teacher.
                  </li>
                </ul>
              </section>
            </div>
            <hr className="my-10 text-platinum"></hr>
            <div>
              <p className="mb-5 text-3xl font-semibold">Education</p>
              <section className="grid grid-cols-4 mb-5">
                <div className="col-span-4 md:col-span-3">
                  <p className="font-semibold uppercase">
                    UT Austin Coding Bootcamp
                  </p>
                  <p className="italic">Houston, TX (September 2020)</p>
                  <p>Certificate for Full-Stack Web Development</p>
                </div>
                <div className="col-span-4 my-2 md:my-auto md:col-span-1">
                  <img
                    src="/images/bootcamp-certificate.webp"
                    alt="ut austin bootcamp certificate"
                    className="border resumeimg border-platinum"
                  />
                </div>
              </section>
              <section className="grid grid-cols-4 mb-5">
                <div className="col-span-4 md:col-span-3">
                  <p className="font-semibold uppercase">
                    University of Texas at San Antonio
                  </p>
                  <p className="italic">San Antonio, TX (May 2013)</p>
                  <p>Masters in Instructional Technology</p>
                </div>
                <div className="col-span-4 my-2 md:my-auto md:col-span-1">
                  <img
                    src="/images/rowdy.webp"
                    alt="ut san antonio roadrunner logo"
                    className="resumeimg"
                  />
                </div>
              </section>
              <section className="grid grid-cols-4 mb-5">
                <div className="col-span-4 md:col-span-3">
                  <p className="font-semibold uppercase">
                    University of Texas at Austin
                  </p>
                  <p className="italic">Austin, TX (May 2010)</p>
                  <p>Bachelors in Bilingual Education</p>
                </div>
                <div className="col-span-4 my-2 md:my-auto md:col-span-1">
                  <img
                    src="/images/longhorn.webp"
                    alt="ut austin longhorn logo"
                    className="resumeimg"
                  />
                </div>
              </section>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
