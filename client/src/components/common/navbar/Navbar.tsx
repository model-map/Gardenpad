import { Menu, X } from "lucide-react";
import { useState } from "react";

import SearchBar from "./SearchBar";
import UserDropdown from "./User_Dropdown";
import Cart_Sheet from "./Cart_Sheet";
import ToggleMobileMenu_Right from "./ToggleMobileMenu_Right";
import ToggleMobileMenu_Left from "./ToggleMobileMenu_Left";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isMobileMenuOpen_Right, setIsMobileMenuOpen_Right] = useState(false);
  const [isMobileMenuOpen_Left, setIsMobileMenuOpen_Left] = useState(false);

  const toggleMobileMenu_Right = () => {
    setIsMobileMenuOpen_Right(!isMobileMenuOpen_Right);
  };
  const toggleMobileMenu_Left = () => {
    setIsMobileMenuOpen_Left(!isMobileMenuOpen_Left);
  };

  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Desktop Menu */}
        <div className="flex items-center gap-12">
          {/* MOBILE MENU BUTTON LEFT */}

          <div className="flex items-center justify-center gap-2">
            <ToggleMobileMenu_Left />
            <a href="/" className="text-2xl font-bold text-primary">
              Logo
            </a>
          </div>

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
          <SearchBar />
          <Cart_Sheet />
          <UserDropdown />
          {/* MOBILE MENU BUTTON: RIGHT */}
          <button
            onClick={toggleMobileMenu_Right}
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
          >
            {isMobileMenuOpen_Right ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen_Right && <ToggleMobileMenu_Right />}
    </nav>
  );
};

export default Navbar;
