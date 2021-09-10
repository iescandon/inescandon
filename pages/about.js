import { useState } from "react";
import Head from "next/head";
import SideNav from "../components/sidenav";
import AboutQuiz from '../components/about-quiz';
import Layout from '../components/layout';

export default function AboutMe() {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque turpis lorem, ac dictum diam dignissim non. Proin gravida viverra dui vitae suscipit. Cras ac ullamcorper magna, eget auctor massa. Donec dictum tincidunt risus, quis finibus justo luctus eget. Aliquam lacus massa, blandit tincidunt felis eget, ullamcorper finibus purus. Vivamus euismod sem quis condimentum feugiat. Duis ornare malesuada ligula, id porta nisl finibus ut. Cras volutpat eu est eu porta. Integer hendrerit porta justo interdum vestibulum. Morbi sit amet tortor tellus.";
  return (
    <>
      <Head>
        <title>Inez Escandón | About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>
      <Layout>
        <section className="w-full p-10 lg:w-9/12 lg:ml-auto">
          <div id="about">
            <p className="mb-5 text-4xl font-semibold">Get to know <span className="text-5xl font-medium font-dawningOfaNewDay">me</span></p>
            <div>{lorem}</div>
            {/* <img className="" src="./images/daruma-doll.png" height="100px;" width="100px;"></img> */}
            <div className="mt-5">
              <div className="grid grid-cols-4">
                <img src="/images/teaching.jpg" alt="" className="col-span-2 p-1"/>
                <img src="/images/jonah-coding.jpg" alt="" className="col-span-2 p-1"/>
              </div>
              <div className="grid grid-cols-4">
                <img src="/images/mtb.png" alt="" className="col-span-1 p-1"/>
                <img src="/images/bjj.jpg" alt="" className="col-span-1 p-1"/>
                <img src="/images/bhangra.jpg" alt="" className="col-span-1 p-1"/>
                <img src="/images/mtb1.jpg" alt="" className="col-span-1 p-1"/>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
