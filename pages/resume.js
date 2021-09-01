import { useState } from "react";
import Head from "next/head";
import SideNav from "../components/sidenav";
import Layout from '../components/layout';

export default function Resume() {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque turpis lorem, ac dictum diam dignissim non. Proin gravida viverra dui vitae suscipit. Cras ac ullamcorper magna, eget auctor massa. Donec dictum tincidunt risus, quis finibus justo luctus eget. Aliquam lacus massa, blandit tincidunt felis eget, ullamcorper finibus purus. Vivamus euismod sem quis condimentum feugiat. Duis ornare malesuada ligula, id porta nisl finibus ut. Cras volutpat eu est eu porta. Integer hendrerit porta justo interdum vestibulum. Morbi sit amet tortor tellus.";
  return (
    <>
      <Head>
        <title>Inez Escandón's Resume</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>
      <Layout
          isWork={false}
          selectedSection={"resume"}
      >
        <section className="p-10 w-full lg:w-9/12 lg:ml-auto">
          <div id="resume">
            <p className="mb-5 text-4xl font-semibold">Check out my <span className="text-5xl font-medium font-dawningOfaNewDay">resume</span></p>
            <div>{lorem}</div>
            {/* <div>DOWNDLOAD RESUME BUTTON</div> */}
          </div>
        </section>
      </Layout>
    </>
  );
}
