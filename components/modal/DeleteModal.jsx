import { Trash } from "iconsax-react";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";

const DeleteModal = ({ selectedRow, handleDelete, isMutating }) => {
  return (
    <div>
      <p>You are about to delete this request, this cannot be undone.</p>
      <div className="myFlex gap-3 mt-10">
        <Button
          onClick={() => handleDelete(selectedRow._id)}
          disabled={isMutating}
          className="bg-red-500 shadow-none focus:ring-0 outline-none ring-0 border-0 hover:bg-red-500/85 h-[48px] px-6"
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

export default DeleteModal;
