import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Twitter, Github } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { title: "Overview", href: "#" },
      { title: "Features", href: "#" },
      { title: "Solutions", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Releases", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", href: "#" },
      { title: "Newsletter", href: "#" },
      { title: "Events", href: "#" },
      { title: "Help centre", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "Support", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto">
        <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
          {/* Logo Section */}
          <div className="col-span-full xl:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  v0
                </span>
              </div>
              <span className="font-semibold text-foreground">Your Brand</span>
            </div>
            <p className="mt-4 text-muted-foreground text-sm">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map(({ title, links }) => (
            <div key={title}>
              <h6 className="font-medium text-foreground">{title}</h6>
              <ul className="mt-6 space-y-4">
                {links.map(({ title: linkTitle, href }) => (
                  <li key={linkTitle}>
                    <a
                      href={href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {linkTitle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="col-span-2">
            <h6 className="font-medium text-foreground">Stay up to date</h6>
            <form className="mt-6 flex items-center gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="grow"
              />
              <Button size="sm">Subscribe</Button>
            </form>
          </div>
        </div>

        <Separator />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
          </span>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-muted-foreground">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
