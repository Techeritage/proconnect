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
import { useSubmitCV } from "@/services/queries";
import Null from "@/components/Null";
import { ActionCell } from "../data-table/action-cell";
import { DataTable } from "../data-table/data-table";
import toast from "react-hot-toast";
import { Trash } from "iconsax-react";
import { Download } from "lucide-react";

export function SubmitCVTable() {
  const { data, error, isLoading } = useSubmitCV();
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(null);
  //const [isCVVisible, setIsCVVisible] = useState(false);

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
          }}
          open={open}
          setOpen={setOpen}
          action={hireTalentAction}
        />
      ),
    },
  ];

  // const handleRevealCV = () => {
  //   setIsCVVisible(() => !isCVVisible);
  // };

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
          {selectedAction === "View" && (
            <ViewModal
              selectedRow={selectedRow}
              // handleRevealCV={handleRevealCV}
            />
          )}
          {selectedAction === "Delete" && (
            <DeleteModal selectedRow={selectedRow} />
          )}
        </DialogContent>
      </Dialog>
      {/* {isCVVisible && <DocumentViewer fileUrl={selectedRow.cv} />} */}
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
        <Button
          // onClick={handleRevealCV}
          className="shadow-none ring-0 border-0 hover:bg-primary hover:scale-105 h-[48px] px-8"
        >
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

// const DocumentViewer = ({ fileUrl }) => {
//   const isDocOrDocx = fileUrl.endsWith(".doc") || fileUrl.endsWith(".docx");
//   const viewerUrl = isDocOrDocx
//     ? `https://docs.google.com/gview?url=${fileUrl}&embedded=true`
//     : fileUrl;

//   return (
//     <div className="w-full h-screen fixed right-0 left-0 top-0 bottom-0 z-[10000] p-4">
//       <iframe
//         src={viewerUrl}
//         className="w-full h-full border rounded-md shadow-md"
//         title="Document Viewer"
//       />
//     </div>
//   );
// };
