import Head from "next/head";
import { work } from "../../lib/data";
import { useState, useEffect } from 'react';
import SideMenu from "../../components/sidemenu";
import Layout from '../../components/layout';

export default function WorkPage({ slug, name, title, description, image, github, live_url }) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState();
  useEffect(() => {
    work.map((item, i)=>{
      if (item.title === title) {
        setSelectedProjectIndex(i);
      }
    })
  },[title]);
  return (
    <>
      <Head>
        <title>Inez Escandón | {name}</title>
        <meta name="description" content="Hola! My name is Inez. I'm a Full Stack Web Developer based out of Houston, TX." />
        <meta name="keywords" content="inez,escandon,software,web,developer,web,development,design,houston,texas" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>
      <Layout>
        <section className="flex flex-col w-full ml-auto p-7 md:p-10 lg:w-9/12 lg:min-h-screen ">
          <div className="top-work">
          <div className="flex flex-row items-center mb-5">
            <p className="text-4xl font-semibold">{name}</p>
            <a href={github} target="_blank" rel="noreferrer" tabIndex={-1}><i className="ml-4 text-3xl md:transition md:duration-200 md:ease-in-out fab fa-github-square text-coolBlue md:hover:text-goldenrod" tabIndex={0} onKeyDown={(e)=>{
                      if (e.key === "Enter" || "") {
                        const page = github;
                        window.location.href = page;
                      }
                    }}></i></a>
            <a href={live_url} target="_blank" rel="noreferrer" tabIndex={-1}><i className="ml-2 text-3xl md:transition md:duration-200 md:ease-in-out fas fa-external-link-square-alt text-coolBlue md:hover:text-goldenrod" tabIndex={0} onKeyDown={(e)=>{
                      if (e.key === "Enter" || "") {
                        const page = live_url;
                        window.location.href = page;
                      }
            }}></i></a>
          </div>
          {/* <a href={live_url} target="_blank" rel="noreferrer">
            <img className="w-full mx-auto my-8 border rounded-md shadow-lg md:w-3/4 border-platinum" key={slug} src={image.gif} alt={image.alt}></img>
          </a> */}
          <img className="w-full mx-auto my-8 border rounded-md shadow-lg md:w-3/4 border-platinum lg:hidden" key={slug} src={image.src} alt={image.alt}></img>
          <video className="hidden w-full mx-auto my-8 border rounded-md shadow-lg lg:block md:w-3/4 border-platinum" key={image.gif} loop autoPlay muted>
            <source src={image.gif}
                    type="video/webm" />
            Sorry, your browser doesn&apos;t support embedded videos.
          </video>
          <div>{description}</div>
          </div>
          <div className="relative mt-10 mb-5">
            <hr className="col-span-1 my-5 border-t-2 border-coolBlue md:col-span-2"></hr>  
            <p className="absolute top-0 pr-2 mt-1.5 text-xl font-semibold uppercase bg-white">Other Work</p> 
          </div>

        <SideMenu selectedProjectIndex={selectedProjectIndex} setSelectedProjectIndex={setSelectedProjectIndex} image={image} />
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: work.find((item) => item.slug === params.slug),
  };
}

export async function getStaticPaths() {
  return {
    paths: work.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
