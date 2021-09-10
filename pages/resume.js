import Head from "next/head";
import Layout from '../components/layout';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Inez Escandón | Resumé</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>
      <Layout>
        <section className="w-full p-7 md:p-10 lg:w-9/12 lg:ml-auto">
          <div id="resume">
            <p className="mb-5 text-4xl font-semibold">Check out my <span className="text-5xl font-medium font-dawningOfaNewDay">resume</span></p>
            <div>My name is Inez Escandon and I&apos;m a Full Stack Web Developer from Houston, TX. Extremely passionate about creating user-centric designs and collaborating with others to develop simple, clean, and meaningful mobile and web applications. I am a highly motivated self-starter who is fully committed to proving herself in a new career, and would be a great asset to any company. Open to new opportunities!</div>
            <button href="" className="self-end w-2/5 p-3 my-10 text-black md:transition md:duration-200 md:ease-in-out md:hover:text-white md:hover:bg-coolBlue bg-goldenrod md:w-1/5">
              Download Resume
            </button> 
            <hr className="mb-10 border-t-2 border-coolBlue"></hr>
            <p className="text-3xl font-semibold">Skills</p>
            <div className="flex flex-row flex-wrap justify-between">
              <ul className="mt-5">
                <li className="font-semibold uppercase">Languages</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
              </ul>
              <ul className="mt-5">
                <li className="font-semibold uppercase">Front-End Tools</li>
                <li>jQuery</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Angular</li>
                <li>Redux</li>
                <li>Web APIs/Rest APIs</li>
                <li>Apollo</li>
              </ul>
              <ul className="mt-5">
                <li className="font-semibold uppercase">Back-End Tools</li>
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
                <p className="font-semibold uppercase">Web Developer, Poetic Systems</p>
                <p className="italic">Houston, TX (Mar 2021 - Present)</p>
                <ul className="pl-8 list-disc">
                  <li>Support wordpress/drupal/wbflow</li>
                  <li>Houston food bank/</li>
                  <li>Camden</li>
                </ul>
              </section>
              <section className="mb-5">
                <p className="font-semibold uppercase">Full Stack Web Development Bootcamp: Tutor, 2U Inc</p>
                <p className="italic">Houston, TX (Jan 2021 - Present)</p>
                <ul className="pl-8 list-disc">
                  <li>Assist current bootcamp students with their studies and projects.</li>
                </ul>
              </section>
              <section className="mb-5">
                <p className="font-semibold uppercase">Full Stack Web Development Bootcamp: Teacher Assistant, 2U Inc</p>
                <p className="italic">Houston, TX (Jan 2021 - Jul 2021)</p>
                <ul className="pl-8 list-disc">
                  <li>Support wordpress/drupal/wbflow</li>
                </ul>
              </section>
              <section className="mb-5">
                <p className="font-semibold uppercase">Bilingual Elementary Teacher, Various Districts</p>
                <p className="italic">Houston, TX (Aug 2010 - Jan 2021)</p>
                <ul className="pl-8 list-disc">
                  <li>Support wordpress/drupal/wbflow</li>
                </ul>
              </section>
            </div>
            <hr className="my-10 text-platinum"></hr>   
            <div>
              <p className="mb-5 text-3xl font-semibold">Education</p>
              <section className="grid grid-cols-4 mb-5">
                <div className="col-span-4 md:col-span-3">
                  <p className="font-semibold uppercase">UT Austin Coding Bootcamp</p>
                  <p className="italic">Houston, TX (September 2020)</p>
                  <p>Certificate for Full-Stack Web Development</p>
                </div>
                <div className="col-span-4 my-2 md:my-auto md:col-span-1">
                  <img src="/images/bootcamp-certificate.png" alt="ut austin bootcamp certificate" className="border resumeimg border-platinum"/>
                </div>
              </section>
              <section className="grid grid-cols-4 mb-5">
                <div className="col-span-4 md:col-span-3">
                  <p className="font-semibold uppercase">University of Texas at San Antonio</p>
                  <p className="italic">San Antonio, TX (May 2013)</p>
                  <p>Masters in Instructional Technology</p>
                </div>
                <div className="col-span-4 my-2 md:my-auto md:col-span-1">
                  <img src="/images/rowdy.png" alt="ut san antonio roadrunner logo" className="resumeimg"/>
                </div>
              </section>
              <section className="grid grid-cols-4 mb-5">
                <div className="col-span-4 md:col-span-3">
                  <p className="font-semibold uppercase">University of Texas at Austin</p>
                  <p className="italic">Austin, TX (May 2010)</p>
                  <p>Bachelors in Bilingual Education</p>
                </div>
                <div className="col-span-4 my-2 md:my-auto md:col-span-1">
                <img src="/images/longhorn.png" alt="ut austin longhorn logo" className="resumeimg"/>
                </div>
              </section>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
