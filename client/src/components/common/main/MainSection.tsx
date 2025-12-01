import { LogIn } from "lucide-react";
import { HeroSection } from "./hero";

const MainSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection
        heading="GROW YOUR DREAM GARDEN"
        description="Track plants, get expert tips, and turn every patch into a thriving green space."
        button={{
          text: "Shop Now",
          // icon: <LogIn />,
          url: "google.com",
        }}
        imageSrc="https://images.unsplash.com/photo-1550948390-6eb7fa773072?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Garden"
        trustText="Trusted by 10000+ Customers Worldwide"
      />
    </div>
  );
};
export default MainSection;
