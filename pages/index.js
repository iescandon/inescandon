import Head from "next/head";
import { useState } from "react";
import SideNav from "../components/sidenav";
import { work } from "../lib/data.js";
import Link from "next/link";
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inez Escandón | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>
        <section className="w-full p-10 lg:w-9/12 lg:ml-auto">
          <div id="work" className="flex flex-col w-full md:grid md:grid-cols-2">
            <p className="mb-5 text-4xl font-semibold md:col-span-2">Hola! My name is <span className="pr-1 text-5xl font-medium font-dawningOfaNewDay">Inez</span>. I'm a Full Stack Web Developer based out of Houston, TX. <img src="/images/texas.png" alt="texas icon" height="30px" width="30px" className="inline pb-1"></img></p>
            <div className="flex justify-center w-full col-span-2">
              <Link href="/">
                <img
                  className="w-2/4 mb-5 rounded-full cursor-pointe md:w-1/3 lg:hidden"
                  src="/images/inez-pic.png"
                  alt="hispanic girl with curly hair and small yorkie dog"
                ></img>
              </Link>
            </div> 
            <img src="/images/houston.jpg" alt="houston texas city skyline" className="hidden w-full mb-10 lg:block md:col-span-2"></img>
            <hr className="col-span-2 my-3 border-t-2 border-coolBlue"></hr>
            {work.map((item, i) => (
              <>
              <div className="my-auto md:col-span-1">
                <p className="pt-3 my-5 text-2xl font-semibold uppercase md:pt-0 md:mt-0 md:mb-5">{item.title}</p>
                <p>{item.description}</p>
              </div>
              <div key={item.slug} className="p-5 my-5 md:col-span-1">
                <div className="container">
                    <img
                      id="project-image"
                      className="w-full rounded-md shadow-lg image"
                      src={item.image.src}
                      alt={item.image.alt}
                      tabIndex={0}
                      onKeyDown={(e)=>{
                      if (e.key === "Enter" || "") {
                      window.location.href = `/work/${item.slug}`;
                    }
                  }}
                    ></img>
                  <Link href={`/work/${item.slug}`}>
                    <div className="rounded-md cursor-pointer overlay">
                        <div className="middle">
                        <div className="text-white rounded-md text md:transition md:duration-200 md:ease-in-out bg-coolBlue md:hover:text-black md:hover:bg-goldenrod">Read More</div>
                    </div>
                    </div>
                  </Link>
                </div>
              </div>
              {i + 1 !== work.length ? <hr className="col-span-2 my-3 text-platinum"></hr> : null }
              </>
            ))}
          </div>
        </section>
    </>
  );
}
