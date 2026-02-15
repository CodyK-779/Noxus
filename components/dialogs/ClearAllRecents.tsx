"use client";

import { X } from "lucide-react";
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
import { Dispatch, SetStateAction } from "react";
import {
  clearAllRecentSearches,
  getRecentSearches,
} from "../utils/recentSearches";

interface Props {
  setRecents: Dispatch<SetStateAction<[] | string[]>>;
}

const ClearAllRecents = ({ setRecents }: Props) => {
  const clearAllRecents = () => {
    clearAllRecentSearches();
    setRecents(getRecentSearches());
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button>
          <X className="min-[375px]:size-6 size-5" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Confirmation</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete all your
            search histories.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-white text-black hover:bg-neutral-300 hover:text-black font-medium">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={clearAllRecents}
            className="bg-red-600 text-white hover:bg-red-700 transition-colors font-medium"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ClearAllRecents;
