import SideNav from "../sidenav";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const route = router.pathname;
  return (
    <main className="relative">
      <SideNav selectedSection={route} />
      {children}
    </main>
  );
}
