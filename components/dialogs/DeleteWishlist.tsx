"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Loader2 } from "lucide-react";
import { removeWishlistItem } from "@/actions/wishlist-action";
import { toast } from "sonner";

interface Props {
  id: string;
}

const DeleteWishlist = ({ id }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      const results = await removeWishlistItem(id);

      if (results?.error) {
        toast.error("Failed to remove wishlist item");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className="nox-btn text-xs font-semibold px-4 tracking-wide"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center gap-1.5">
              <Loader2 className="animate-spin size-3.5" />
              Loading...
            </div>
          ) : (
            <p>Remove</p>
          )}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Confirmation</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to remove this game from your wishlist?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-white text-black hover:bg-neutral-300 hover:text-black font-medium">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-600 text-white hover:bg-red-700 transition-colors font-medium"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteWishlist;
