import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";
import HeaderNew from "@/components/Navigation/HeaderNew";

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <HeaderNew />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
