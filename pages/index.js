import Head from "next/head";
import { work } from "../lib/data.js";
import Link from "next/link";
import Layout from "../components/layout";
import SocialIcons from "../components/social-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inez Escandón | Web Developer</title>
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
          <div
            id="work"
            className="flex flex-col w-full md:grid md:grid-cols-2"
          >
            <p className="mb-5 text-4xl font-semibold md:col-span-2">
              Hola! My name is{" "}
              <span className="pr-1 text-5xl font-medium font-dawningOfaNewDay">
                Inez
              </span>
              . I'm a Full Stack Web Developer based out of Houston, TX.{" "}
              <img
                src="/images/texas.webp"
                alt="texas icon"
                height="30px"
                width="30px"
                className="inline pb-1"
              ></img>
            </p>
            <div className="flex justify-center w-full col-span-2">
              <img
                className="w-2/4 mb-5 rounded-full md:w-1/3 lg:hidden"
                src="/images/inez-pic.webp"
                alt="hispanic girl with curly hair and small yorkie dog"
              ></img>
            </div>
            <ul className="flex flex-row justify-center inline mb-5 lg:hidden md:col-span-2">
              <SocialIcons />
            </ul>
            <img
              src="/images/houston.webp"
              alt="houston texas city skyline"
              className="hidden w-full mb-10 lg:block md:col-span-2"
            ></img>
            <hr className="col-span-2 my-3 border-t-2 border-platinum lg:border-coolBlue"></hr>
            {work.map((item, i) => (
              <>
                <div className="my-auto mr-5 md:col-span-1" key={item.slug}>
                  <p className="pt-3 my-5 text-2xl font-semibold md:pt-0 md:mt-0 md:mb-5">
                    {item.title}
                  </p>
                  <p>{item.blurb}</p>
                </div>

                <div key={item.name} className="md:col-span-1">
                  <div className="card-wrapper">
                    <img
                      className="w-full rounded-md shadow-lg project-image image"
                      src={item.image.src}
                      alt={item.image.alt}
                    ></img>
                    <Link href={`/work/${item.slug}`}>
                      <button className="px-6 py-3 text-black readme-btn md:transition md:duration-200 md:ease-in-out md:hover:text-white md:hover:bg-coolBlue bg-goldenrod">
                        See More
                      </button>
                    </Link>
                  </div>
                </div>
                {i + 1 !== work.length ? (
                  <hr className="col-span-2 text-platinum" key={i}></hr>
                ) : null}
              </>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
