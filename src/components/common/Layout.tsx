import { Outlet } from "react-router-dom";
import SideBar from "@/components/SideBar";
const Layout = () => {
  return (
    <div className="flex min-w-[1400px] max-w-[1920px] m-auto">
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
