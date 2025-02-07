"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBlogs } from "@/services/queries";
import Null from "@/components/Null";
import { ActionCell } from "../data-table/action-cell";
import { DataTable } from "../data-table/data-table";
import toast from "react-hot-toast";
import { useDeleteBlog } from "@/services/mutation";
import DeleteModal from "../modal/DeleteModal";

export function BlogTable() {
  const { data, error, isLoading } = useBlogs();
  const { trigger: deleteTrigger, isMutating: deleteMutating } =
    useDeleteBlog();
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);

  const hireTalentAction = ["View", "Edit", "Delete"];

  const columns = [
    {
      accessorKey: "blogTitle",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="text-base font-aeoBold text-black/90"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Blog Title <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "blogReadTime",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="text-base font-aeoBold text-black/90"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Blog Read Time <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="text-base font-aeoBold text-black/90"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div>{row.getValue("createdAt").split(",")[0]}</div>,
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <ActionCell
          baseUrl={"blog"}
          row={row}
          onActionSelect={(action, rowData) => {
            setSelectedAction(action);
            setSelectedRow(rowData);
            setOpen(true);
          }}
          action={hireTalentAction}
        />
      ),
    },
  ];

  const handleRequestDelete = async () => {
    try {
      await deleteTrigger({
        id: selectedRow._id ? selectedRow._id : null,
      });
      toast.success("Ticket Deleted");
      setOpen(false);
    } catch (error) {
      alert("Failed to update request. Please try again.");
      console.error("Error during optimistic update:", error);
    }
  };

  if (error) return <div>Error fetching request</div>;
  if (isLoading)
    return (
      <div className="min-h-[200px] myFlex justify-center">Loading Blog...</div>
    );

  if (data?.data?.length < 1 || !data.data) return <Null />;

  return (
    <>
      <DataTable
        data={data.data ? data.data.slice().reverse() : null}
        columns={columns}
        searchPlaceholder="Search name or email..."
      />

      <Dialog
        open={open}
        onOpenChange={() => {
          setSelectedAction(null);
          setSelectedRow(null);
          setOpen(false);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle
              className={`text-lg ${
                selectedAction === "View" && "border-b pb-4"
              } `}
            >
              {selectedAction === "View"
                ? `${selectedAction} Request`
                : "Are you sure"}
            </DialogTitle>
          </DialogHeader>
          {selectedAction === "View" && <ViewModal selectedRow={selectedRow} />}
          {selectedAction === "Delete" && (
            <DeleteModal
              selectedRow={selectedRow}
              handleDelete={handleRequestDelete}
              isMutating={deleteMutating}
              setOpen={setOpen}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

const ViewModal = ({ selectedRow }) => {
  return (
    <div className="space-y-3">
      <p>
        <span className="font-semibold">Blog Title:</span>{" "}
        {selectedRow.blogTitle}
      </p>
      <p>
        <span className="font-semibold">Excerpt:</span> {selectedRow.excerpt}
      </p>
      <div dangerouslySetInnerHTML={{ __html: selectedRow.blogBody }} />
      <p>
        <span className="font-semibold">blogReadTime</span>{" "}
        {selectedRow.blogReadTime}
      </p>
      {/* {selectedRow.thumbNail && (
        <Image
          src={selectedRow.thumbNail}
          alt="thumbNail"
          width={400}
          height={200}
        />
      )} */}
    </div>
  );
};
