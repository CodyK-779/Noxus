import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface Props {
  label: string;
  size: string;
}

const DropdownSkeleton = ({ label, size }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={size}>
        <Button
          variant="outline"
          className="flex items-center justify-between gap-4 min-[350px]:text-sm text-xs text-muted-foreground"
        >
          <p>{label}</p>
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default DropdownSkeleton;
