import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-row-reverse items-center justify-center gap-4"
    >
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8">
          <Search />
          <span className="sr-only">Search</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent asChild>
        <Input type="text" placeholder="" />
      </CollapsibleContent>
    </Collapsible>
  );
};
export default SearchBar;
