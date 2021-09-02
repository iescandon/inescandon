import Head from "next/head";
import { work } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import SideMenu from "../../components/sidemenu";
import Layout from '../../components/layout';

export default function WorkPage({ slug, title, description, image, github, live_url }) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState()
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
        <Layout isWork={true} selectedProjectIndex={selectedProjectIndex} setSelectedProjectIndex={setSelectedProjectIndex} image={image}>
        <section className="p-10 w-full lg:w-9/12 ml-auto">
          <div className="flex flex-row mb-5 items-center">
          <p className="uppercase text-4xl font-semibold">{title}</p>
          <a href={github} target="_blank" rel="noreferrer" tabIndex={-1}><i className="md:transition md:duration-200 md:ease-in-out fab fa-github-square text-3xl ml-4 text-coolBlue md:hover:text-goldenrod" tabIndex={0} onKeyDown={(e)=>{
                    if (e.key === "Enter" || "") {
                      const page = github;
                      window.location.href = page;
                    }
                  }}></i></a>
          <a href={live_url} target="_blank" rel="noreferrer" tabIndex={-1}><i className="md:transition md:duration-200 md:ease-in-out fas fa-external-link-square-alt text-3xl ml-2 text-coolBlue md:hover:text-goldenrod" tabIndex={0} onKeyDown={(e)=>{
                    if (e.key === "Enter" || "") {
                      const page = live_url;
                      window.location.href = page;
                    }
                  }}></i></a>
          </div>
          <div>{description}</div>
          <a href={live_url} target="_blank" rel="noreferrer">
            <img className="rounded-md shadow-lg mt-5 border border-platinum w-full" key={slug} src={image.src[0]} alt={image.alt}></img>
          </a>
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
