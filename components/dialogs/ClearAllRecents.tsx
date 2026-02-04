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
} from "../utils/resendSearches";

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
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={clearAllRecents}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ClearAllRecents;
