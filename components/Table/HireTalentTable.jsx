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
import { useHireTalent } from "@/services/queries";
import { formatDate } from "@/lib/helper";
import Null from "@/components/Null";
import { ActionCell } from "../data-table/action-cell";
import { DataTable } from "../data-table/data-table";
import { useUpdateTalentRequest } from "@/services/mutation";
import toast from "react-hot-toast";
import { Trash } from "iconsax-react";

export function HireTalentTable() {
  const { data, error, isLoading } = useHireTalent();
  const { trigger, isMutating } = useUpdateTalentRequest();
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(null);

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
        <div className="capitalize">{row.getValue("status")}</div>
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
      cell: ({ row }) => <div>{formatDate(row.getValue("createdAt"))}</div>,
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
            <DeleteModal selectedRow={selectedRow} />
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
        <span className="font-semibold">Company's Name:</span>{" "}
        {selectedRow.companyName}
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
      <p>
        <span className="font-semibold">Job Description:</span>{" "}
        {selectedRow.jobDescription}
      </p>
      {selectedRow.experience && (
        <p>
          <span className="font-semibold">Experience:</span>{" "}
          {selectedRow.experience}
        </p>
      )}
      {selectedRow.requiredSkills.length > 0 && (
        <div>
          <p className="font-semibold space-y-1">Required Skills:</p>
          <ul className="ml-7 list-disc">
            {selectedRow.requiredSkills.map((skill, i) => (
              <li className="text-sm" key={i}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedRow.location && (
        <p>
          <span className="font-semibold">Location:</span>{" "}
          {selectedRow.location}
        </p>
      )}
    </div>
  );
};

const DeleteModal = ({ selectedRow }) => {
  return (
    <div>
      <p>You are about to delete this request, this cannot be undone.</p>
      <div className="myFlex gap-3 mt-10">
        <Button className="bg-red-500 shadow-none ring-0 border-0 hover:bg-red-500/85 h-[48px] px-6">
          <Trash color="#ffffff" size={30} />
          <span>Delete</span>
        </Button>
        <DialogClose asChild>
          <Button
            // disabled={isMutating}
            // onClick={() => setOpen(false)}
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
