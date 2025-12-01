import type React from "react";
import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  heading: string;
  description: string;
  button: {
    text: string;
    icon?: React.ReactNode;
    url: string;
  };
  trustText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const HeroSection = ({
  heading = "Blocks built with Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  button = {
    text: "Discover Features",
    icon: <Zap className="ml-2 size-4" />,
    url: "https://www.shadcnblocks.com",
  },
  trustText = "Trusted by 25.000+ Businesses Worldwide",
  imageSrc = "https://images.unsplash.com/photo-1550948390-6eb7fa773072?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageAlt = "placeholder",
}: HeroSectionProps) => {
  return (
    <section className="overflow-hidden py-0 flex flex-col items-center w-full">
      <div
        className="relative w-full h-full flex flex-col items-center justify-center bg-cover bg-center py-50"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-xs" />

        <div className="relative z-10 flex flex-col gap-5 items-center px-4">
          <h2 className="mx-auto max-w-5xl text-balance text-center text-3xl font-medium md:text-6xl text-white drop-shadow-lg">
            {heading}
          </h2>
          <p className="text-white mx-auto max-w-3xl text-center md:text-lg drop-shadow-md">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pt-3">
            <Button size="lg" asChild>
              <a href={button.url}>
                {button.text} {button.icon}
              </a>
            </Button>
            {trustText && (
              <div className="text-white/90 text-xs drop-shadow-md">
                {trustText}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
