import Head from "next/head";
import { work } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import SideMenu from "../../components/sidemenu";
import Layout from '../../components/layout';
import SideNav from "../../components/sidenav";

export default function WorkPage({ slug, name, title, description, image, github, live_url }) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState();

  useEffect(() => {
    work.map((item, i)=>{
      if (item.title === title) {
        setSelectedProjectIndex(i);
      }
    })
  },[title]);

const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque turpis lorem, ac dictum diam dignissim non. Proin gravida viverra dui vitae suscipit. Cras ac ullamcorper magna, eget auctor massa. Donec dictum tincidunt risus, quis finibus justo luctus eget. Aliquam lacus massa, blandit tincidunt felis eget, ullamcorper finibus purus. Vivamus euismod sem quis condimentum feugiat. Duis ornare malesuada ligula, id porta nisl finibus ut. Cras volutpat eu est eu porta. Integer hendrerit porta justo interdum vestibulum. Morbi sit amet tortor tellus.";
  // const changeSite = (x) => {
  //   console.log(selectedProjectIndex);
  //   console.log(x);
  //   const newIndex = selectedProjectIndex + x;
  //   console.log(newIndex)
  //   setSelectedProjectIndex(newIndex);
  //   work.map((item, i)=>{
  //     if (i === newIndex) {
  //     console.log(item.slug);
  //     window.location.href = `/work/${item.slug}`;
  //     }
  //   })
  // }

  return (
    <>
      <Head>
        <title>Inez Escandón | {name}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>
      <Layout>
        <section className="flex flex-col w-full p-10 ml-auto lg:w-9/12 lg:min-h-screen ">
          <div className="top-work">
          <div className="flex flex-row items-center mb-5">
            <p className="text-4xl font-semibold uppercase">{name}</p>
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
          {/* <div>{lorem}</div> */}
          <div>{description}</div>
          {/* <div className="flex flex-row"> */}
            {/* {selectedProjectIndex !== 0 ? <i className="cursor-pointer mx-auto my-auto text-3xl fas fa-chevron-left" onClick={() => {changeSite(-1)}}></i> : <i className="mx-auto my-auto text-3xl text-transparent fas fa-chevron-left"></i>} */}
            { image.gif ? 
            // <a href={live_url} target="_blank" rel="noreferrer" className="w-full mx-auto md:w-3/4">
            <a href={live_url} target="_blank" rel="noreferrer">
              <img className="w-full mx-auto md:w-3/4 my-7 border rounded-md shadow-lg border-platinum" key={slug} src={image.gif} alt={image.alt}></img>
            </a> :
            <a href={live_url} target="_blank" rel="noreferrer">
              <img className="w-full mx-auto my-5 border rounded-md shadow-lg md:w-3/4 border-platinum" key={slug} src={image.src} alt={image.alt}></img>
            </a>
            }
            {/* {selectedProjectIndex !== 4 ? <i className="cursor-pointer mx-auto my-auto text-3xl fas fa-chevron-right" onClick={() => {changeSite(1)}}></i> : <i className="mx-auto my-auto text-3xl text-transparent fas fa-chevron-right"></i>} */}
          {/* </div> */}
          </div>
          {/* <div> */}
            <hr className="col-span-2 border-t-2 border-platinum my-5"></hr>  
            {/* <p className="text-xl font-semibold uppercase">Other Projects</p>  */}
          {/* </div> */}

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
