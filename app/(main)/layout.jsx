import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
