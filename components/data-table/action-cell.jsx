import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";

export function ActionCell({
  row,
  onActionSelect,
  action,
  updateStatus,
  disable,
  setSelectedRow,
  baseUrl,
}) {
  const handleRowSelection = useCallback(() => {
    setSelectedRow(row.original);
  }, [row.original, setSelectedRow]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[200px]">
        <DropdownMenuLabel className="font-normal">Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {action &&
          action.map((act, i) =>
            act === "Update" ? (
              <DropdownMenuSub key={i}>
                <DropdownMenuSubTrigger onPointerEnter={handleRowSelection}>
                  Update
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem
                      disabled={disable}
                      className="focus:bg-green-500 focus:text-white"
                      onClick={() => {
                        updateStatus("Resolved");
                      }}
                    >
                      Resolve
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      disabled={disable}
                      className="focus:bg-red-500 focus:text-white"
                      onClick={() => updateStatus("Cancel")}
                    >
                      Cancel
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ) : act === "Edit" ? (
              <DropdownMenuItem key={i}>
                <Link
                  href={`/admin/${baseUrl}/edit-${row.original._id}?signIn=true`}
                >
                  {act}
                </Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                key={i}
                onClick={() => onActionSelect(act, row.original)}
                className={`${
                  act === "Delete" && "focus:bg-red-500 focus:text-white"
                }`}
              >
                {act}
              </DropdownMenuItem>
            )
          )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
