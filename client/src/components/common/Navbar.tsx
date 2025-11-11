import { Button } from "@/components/ui/button";
import { Sun, Menu, X, CircleUser } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "../ui/mode-toggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Desktop Menu */}
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-bold text-primary">
            Logo
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Product
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                <CircleUser className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <a href="/login" className="cursor-pointer">
                  Sign In
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/register" className="cursor-pointer">
                  Sign Up
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <ModeToggle />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="flex flex-col gap-4 p-4">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Product
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
