import { Footer } from "@/components/common/footer/Footer";
import Header from "@/components/common/Header";
import MainSection from "../common/main/MainSection";

const UserLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};
export default UserLayout;
