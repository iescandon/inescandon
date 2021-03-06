import Head from "next/head";
import Layout from "../components/layout";

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Inez Escandón | About</title>
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
          <div id="about">
            <p className="mb-5 text-4xl font-semibold">
              Get to know{" "}
              <span className="text-5xl font-medium font-dawningOfaNewDay">
                me
              </span>
            </p>
            <div>
              Hey there! I just recently pivoted into Web Development after 10.5
              years of being a Bilingual Elementary Teacher. I love working with
              children but have always had this burning passion with technology.
              I discovered coding while I was getting my Master's degree in
              Instructional Technology and knew that this is what I was meant to
              do.
            </div>
            {/* <div className="mt-3">I learned how to code at the UT Full Stack Web Development Bootcamp and continue to learn as a Web Developer at Poetic. I really love that coding provides you not only with a creative outlet, but a mental challenge that really pushes analytical higher order thinking. As someone who enjoys learning, I also love that you are required to be a life-long learner to be successful in this profession.</div> */}
            <div className="mt-3">
              Aside from coding, I love to spend my spare time with my dog
              Jonah, going to the gym, riding my mountain bike, training
              brazilian jiu jitsu (BJJ), dancing various latin and indian
              dances, or spending time with friends and family. Feel free to{" "}
              <a
                href="/contact"
                className="text-coolBlue md:hover:text-goldenrod"
              >
                contact me
              </a>{" "}
              if you have any additional questions!
            </div>
            <div className="mt-7">
              <div className="grid grid-cols-4">
                <img
                  src="/images/teaching.webp"
                  alt=""
                  className="col-span-2 p-0.5"
                />
                <img
                  src="/images/coding.webp"
                  alt=""
                  className="col-span-2 p-0.5"
                />
              </div>
              <div className="grid grid-cols-4">
                <img
                  src="/images/mtb.webp"
                  alt=""
                  className="col-span-1 p-0.5"
                />
                <img
                  src="/images/bjj.webp"
                  alt=""
                  className="col-span-1 p-0.5"
                />
                <img
                  src="/images/bhangra.webp"
                  alt=""
                  className="col-span-1 p-0.5"
                />
                <img
                  src="/images/mtb1.webp"
                  alt=""
                  className="col-span-1 p-0.5"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
