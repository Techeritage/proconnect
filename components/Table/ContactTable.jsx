"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useContact } from "@/services/queries";
import Null from "@/components/Null";
import { ActionCell } from "../data-table/action-cell";
import { DataTable } from "../data-table/data-table";
import toast from "react-hot-toast";
import { Trash } from "iconsax-react";
import { useDeleteContact, useUpdateContact } from "@/services/mutation";

export function ContactTable() {
  const { data, error, isLoading } = useContact();
  const { trigger, isMutating } = useUpdateContact();
  const { trigger: deleteTrigger, isMutating: deleteMutating } =
    useDeleteContact();
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);

  const hireTalentAction = ["View", "Update", "Delete"];

  const columns = [
    {
      accessorKey: "fullName",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="text-base font-aeoBold text-black/90"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="text-base font-aeoBold text-black/90"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="text-base font-aeoBold text-black/90"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("status") === "Cancel"
            ? "Cancelled"
            : row.getValue("status")}
        </div>
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
          row={row}
          onActionSelect={(action, rowData) => {
            setSelectedAction(action);
            setSelectedRow(rowData);
          }}
          open={open}
          setOpen={setOpen}
          setSelectedRow={setSelectedRow}
          action={hireTalentAction}
          updateStatus={handleRequestUpdate}
          disable={isMutating}
        />
      ),
    },
  ];

  const handleRequestUpdate = async (status) => {
    try {
      await trigger({
        id: selectedRow._id ? selectedRow._id : null,
        status,
      });
      toast.success("Status Updated");
    } catch (error) {
      alert("Failed to update request. Please try again.");
      console.error("Error during optimistic update:", error);
    }
  };

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
      <div className="min-h-[200px] myFlex justify-center">
        Loading Request...
      </div>
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
        open={!!selectedAction}
        onOpenChange={() => {
          setSelectedAction(null);
          setSelectedRow(null);
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
        <span className="font-semibold">Name:</span> {selectedRow.fullName}
      </p>
      <p>
        <span className="font-semibold">Email:</span> {selectedRow.email}
      </p>
      <p>
        <span className="font-semibold">Phone:</span> {selectedRow.phone}
      </p>
      <p>
        <span className="font-semibold">Message:</span> {selectedRow.messageUs}
      </p>
    </div>
  );
};

const DeleteModal = ({ selectedRow, handleDelete, isMutating, setOpen }) => {
  return (
    <div>
      <p>You are about to delete this request, this cannot be undone.</p>
      <div className="myFlex gap-3 mt-10">
        <Button
          onClick={() => handleDelete(selectedRow._id)}
          disabled={isMutating}
          className="bg-red-500 shadow-none ring-0 border-0 hover:bg-red-500/85 h-[48px] px-6"
        >
          <Trash color="#ffffff" size={30} />
          <span>{isMutating ? "Deleting..." : "Delete"}</span>
        </Button>
        <DialogClose asChild>
          <Button
            disabled={isMutating}
            onClick={() => setOpen(false)}
            className="h-[48px] shadow-none px-6"
            variant="outline"
          >
            <span>Cancel</span>
          </Button>
        </DialogClose>
      </div>
    </div>
  );
};
