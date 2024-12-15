import { Outlet } from "react-router";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <div className="container mx-auto">
        <Header></Header>
      </div>
      <div className="container mx-auto min-h-[calc(100vh-68px-188px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
