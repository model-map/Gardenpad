import { Footer } from "@/components/common/Footer";
import Header from "@/components/common/Header";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{/* MAIN CONTENT HERE */}</main>
      <Footer />
    </div>
  );
};
export default UserLayout;
