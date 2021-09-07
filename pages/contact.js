import { useState } from "react";
import Head from "next/head";
import SideNav from "../components/sidenav";
import Layout from '../components/layout';
import ContactForm from '../components/contact-form';
import SocialIcons from '../components/social-icons';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mbjqqoaa");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque turpis lorem, ac dictum diam dignissim non.";
  return (
    <>
      <Head>
        <title>Inez Escandón | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>
      <Layout>
        <section className="w-full p-10 lg:w-9/12 lg:ml-auto">
          <div id="contact">
          <p className="mb-5 text-4xl font-semibold">Let&apos;s <span className="text-5xl font-medium font-dawningOfaNewDay">link</span> up!</p>
          {/* <div className="flex flex-row lg:block">
            <p className="inline mb-5 text-4xl font-semibold">Let's <span className="text-5xl font-medium font-dawningOfaNewDay">link</span> up!</p>
            <ul className="flex flex-row inline pt-2 ml-2 lg:hidden">
              <SocialIcons />
            </ul>
          </div> */}
            <div>{lorem}</div>
            <ContactForm />
          </div>
          <ul className="flex flex-row justify-center inline pt-10 ml-2 lg:hidden">
            <SocialIcons isNav={false}/>
            {/* <li className="mx-4 text-3xl">
            <a href="https://github.com/iescandon" target="_blank" rel="noreferrer" tabIndex={-1}>
              <i className="transition duration-200 ease-in-out fab fa-github hover:text-goldenrod" tabIndex={0} onKeyDown={(e)=>{
                    if (e.key === "Enter" || "") {
                      window.location.href = "https://github.com/iescandon";
                    }
                  }}></i>
            </a>
          </li>
          <li className="mx-4 text-3xl">
            <a href="https://www.linkedin.com/in/iescandon/" target="_blank" rel="noreferrer" tabIndex={-1}>
              <i className="transition duration-200 ease-in-out fab fa-linkedin-in hover:text-goldenrod" tabIndex={0} onKeyDown={(e)=>{
                    if (e.key === "Enter" || "") {
                      window.location.href = "https://www.linkedin.com/in/iescandon/";
                    }
                  }}></i>
            </a>
          </li>
          <li className="mx-4 text-3xl">
            <a href="https://www.instagram.com/inescandon/" target="_blank" rel="noreferrer" tabIndex={-1}>
              <i className="transition duration-200 ease-in-out fab fa-instagram hover:text-goldenrod" tabIndex={0} onKeyDown={(e)=>{
                    if (e.key === "Enter" || "") {
                      window.location.href = "https://www.instagram.com/inescandon/";
                    }
                  }}></i>
            </a>
          </li> */}
          </ul>
        </section>
      </Layout>
    </>
  );
}
