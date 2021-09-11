import Head from "next/head";
import Layout from '../components/layout';
import ContactForm from '../components/contact-form';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mbjqqoaa");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <Head>
        <title>Inez Escandón | Contact</title>
        <meta name="description" content="Hola! My name is Inez. I'm a Full Stack Web Developer based out of Houston, TX." />
        <meta name="keywords" content="inez,escandon,software,web,developer,web,development,design,houston,texas" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>
      <Layout>
        <section className="w-full p-7 md:p-10 lg:w-9/12 lg:ml-auto">
          <div id="contact">
          <p className="inline mb-5 text-4xl font-semibold">Let&apos;s <span className="text-5xl font-medium font-dawningOfaNewDay">link</span> up!</p>
          <img src="/images/daruma-doll.webp" height="50px;" width="50px;" alt="daruma doll icon" className="inline mb-4"/>  
          <ContactForm />
          </div>
        </section>
      </Layout>
    </>
  );
}
