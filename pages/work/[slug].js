import Head from "next/head";
import { work } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import SideMenu from "../../components/sidemenu";

export default function WorkPage({ slug, title, description, image }) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState()
  // const projects = work;
  useEffect(() => {

    work.map((item, i)=>{
      if (item.title === title) {
        // projects.splice(i, 1);
        // projects.unshift(item);
        // setSelectedProjectIndex(0);
        setSelectedProjectIndex(i);
      }
    })
  },[title]);
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <SideMenu selectedProjectIndex={selectedProjectIndex} setSelectedProjectIndex={setSelectedProjectIndex} image={image}/>
        <section className="p-10 w-full md:w-9/12 ml-auto mt-10">
        <p className="uppercase mb-5 text-4xl font-semibold">{title}</p>
          <div>{description}</div>
          {/* <div id="imagesContainer">
            {image.src.map((url) => {
              return (
                <img key={slug} src={url} alt={image.alt} width="500px"></img>
              );
              // return(<Image src={url} alt={image.alt} height="200px" width="500px"></Image>)
            })}
          </div> */}
          <img className="rounded-md shadow-lg mt-5" key={slug} src={image.src[0]} alt={image.alt} width="500px"></img>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  //Add First
  console.log("yo, yo", context);
  const { params } = context;
  return {
    // Write this after creating const { params } = context;
    props: work.find((item) => item.slug === params.slug), // This will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  // Add Second!
  return {
    // paths key is REQUIRED because it determines which paths will be pre-rendered
    paths: work.map((item) => ({
      // Each object inside the paths key represents an individual dynamic PAGE.
      // the value for each paramater must match the parameters used in the page name or slug
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
