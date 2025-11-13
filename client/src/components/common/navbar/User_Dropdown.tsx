import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";

const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
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
  );
};
export default UserDropdown;
