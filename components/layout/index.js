import SideNav from "../sidenav";
import SideMenu from "../sidemenu";
// import { useRouter } from 'next/router';


export default function Layout( {children, isWork, selectedSection, setSelectedSection, selectedProjectIndex, setSelectedProjectIndex, image} ) {
  //  const router = useRouter();
  //  console.log(router.asPath)
  return (
    <main className="relative">
      {isWork ? <SideMenu selectedProjectIndex={selectedProjectIndex} setSelectedProjectIndex={setSelectedProjectIndex} image={image}/> : <SideNav selectedSection={selectedSection} /> }
      {children}
    </main>
  )
}
