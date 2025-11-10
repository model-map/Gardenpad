import { Instagram, Twitter } from "lucide-react";

export function TopBanner() {
  return (
    <header className="w-full border-b border-primary/20 bg-primary">
      <div className="flex h-10 items-center justify-between px-6">
        {/* Left Section - Social Links */}
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground hover:text-secondary transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="size-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground hover:text-secondary transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter className="size-5" />
          </a>
        </div>

        {/* Middle Section - Message */}
        <div className="text-center text-sm font-semibold text-primary-foreground">
          We ship nationwide - Fast and reliable shipping!
        </div>

        {/* Right Section - Phone Number */}
        <div className="text-sm text-primary-foreground">1-800-SHIP-NOW</div>
      </div>
    </header>
  );
}
