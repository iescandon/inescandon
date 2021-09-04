import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import SideNav from "../components/sidenav";
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const route = router.pathname;
  return (
    <>
    <SideNav selectedSection={route}/>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp;
