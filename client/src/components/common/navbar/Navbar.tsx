import { Menu, X } from "lucide-react";
import { useState } from "react";

import SearchBar from "./SearchBar";
import UserDropdown from "./User_Dropdown";
import Cart_Sheet from "./Cart_Sheet";

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
          <SearchBar />
          <Cart_Sheet />
          <UserDropdown />
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
        <div className="md:hidden bg-secondary border-t">
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
