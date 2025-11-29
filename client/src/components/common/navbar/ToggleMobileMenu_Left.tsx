import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const ToggleMobileMenu_Left = () => {
  const categories = [
    "Plants",
    "Seeds",
    "Soil & Fertilizer",
    "Pots & Planters",
    "Tools",
    "Outdoor Decor",
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <button className=" p-2 hover:bg-secondary rounded-md transition-colors">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="px-2">
        <SheetHeader>
          <SheetTitle>Shop by Category</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {categories.map((category) => (
            <a
              key={category}
              href={`/${category.toLowerCase().replace(" ", "-")}`}
              className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-muted last:border-b-0"
            >
              {category}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default ToggleMobileMenu_Left;
