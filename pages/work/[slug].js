import Head from "next/head";
import { work } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import SideMenu from "../../components/sidemenu";
import Layout from '../../components/layout';
import SideNav from "../../components/sidenav";

export default function WorkPage({ slug, title, description, image, github, live_url }) {
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
        <title>Inez Escandón | {title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>
        <section className="flex flex-col w-full p-10 ml-auto lg:w-9/12 lg:min-h-screen ">
          <div className="top-work">
          <div className="flex flex-row mb-5">
            <p className="text-4xl font-semibold uppercase">{title}</p>
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
          <div>{description}</div>
          { image.gif ? 
          <a href={live_url} target="_blank" rel="noreferrer">
            <img className="w-full mx-auto my-5 border rounded-md shadow-lg md:w-3/4 border-platinum" key={slug} src={image.gif} alt={image.alt}></img>
          </a> :
          <a href={live_url} target="_blank" rel="noreferrer">
            <img className="w-full mx-auto my-5 border rounded-md shadow-lg md:w-3/4 border-platinum" key={slug} src={image.src} alt={image.alt}></img>
          </a>
          }
          </div>
        <SideMenu selectedProjectIndex={selectedProjectIndex} setSelectedProjectIndex={setSelectedProjectIndex} image={image} />
        </section>
    </>
  );
}

export async function getStaticProps(context) {
  console.log('yo, yo', context);
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
