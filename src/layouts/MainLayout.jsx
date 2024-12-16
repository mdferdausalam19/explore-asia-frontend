import { Outlet } from "react-router";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <div className="container mx-auto">
        <Header></Header>
      </div>
      <div className="container mx-auto min-h-[calc(100vh-68px-220px)] px-3 md:px-0">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
