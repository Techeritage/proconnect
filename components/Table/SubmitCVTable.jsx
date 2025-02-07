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
import { useSubmitCV } from "@/services/queries";
import Null from "@/components/Null";
import { ActionCell } from "../data-table/action-cell";
import { DataTable } from "../data-table/data-table";
import { Download } from "lucide-react";
import DeleteModal from "../modal/DeleteModal";
import { useDeleteCV } from "@/services/mutation";
import toast from "react-hot-toast";

export function SubmitCVTable() {
  const { data, error, isLoading } = useSubmitCV();
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(null);
  const { trigger: deleteTrigger, isMutating: deleteMutating } = useDeleteCV();

  const hireTalentAction = ["View", "Delete"];

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
      accessorKey: "jobTitle",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="text-base font-aeoBold text-black/90"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Job Title <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("jobTitle")}</div>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <ActionCell
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
      <div className="min-h-[200px] myFlex justify-center">Loading CVs...</div>
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
        <span className="font-semibold">Job Title:</span> {selectedRow.jobTitle}
      </p>
      {selectedRow.experience && (
        <p>
          <span className="font-semibold">Experience:</span>{" "}
          {selectedRow.experience}
        </p>
      )}
      {selectedRow.cv && (
        <Button className="shadow-none ring-0 border-0 hover:bg-primary hover:scale-105 h-[48px] px-8">
          <a
            href={selectedRow.cv}
            target="_blank"
            download={`${selectedRow.name}/cv`}
            className="flex items-center gap-1"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </Button>
      )}
    </div>
  );
};
