import Head from "next/head";
import { work } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import SideMenu from "../../components/sidemenu";
import Layout from '../../components/layout';

export default function WorkPage({ slug, title, description, image }) {
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
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
        <Layout isWork={true} selectedProjectIndex={selectedProjectIndex} setSelectedProjectIndex={setSelectedProjectIndex} image={image}>
        <section className="p-10 w-full md:w-9/12 ml-auto mt-10">
        <p className="uppercase mb-5 text-4xl font-semibold">{title}</p>
          <div>{description}</div>
          {/* <div id="imagesContainer">
            {image.src.map((url) => {
              return (
                <img className="mt-5" key={slug} src={url} alt={image.alt} width="500px"></img>
              );
              // return(<Image src={url} alt={image.alt} height="200px" width="500px"></Image>)
            })}
          </div> */}
          <img className="rounded-md shadow-lg mt-5 border border-platinum w-full" key={slug} src={image.src[0]} alt={image.alt}></img>
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
