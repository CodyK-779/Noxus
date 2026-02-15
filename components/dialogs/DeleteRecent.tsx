import { Dispatch, SetStateAction } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { getRecentSearches, removeRecentSearch } from "../utils/recentSearches";
import { useMenu } from "../MenuProvider";

interface Props {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  selectedSearch: string | null;
  setSelectedSearch: Dispatch<SetStateAction<string | null>>;
}

const DeleteRecent = ({
  openDialog,
  setOpenDialog,
  selectedSearch,
  setSelectedSearch,
}: Props) => {
  const { setRecents } = useMenu();

  const handleDelete = () => {
    if (!selectedSearch) return;

    removeRecentSearch(selectedSearch);
    setRecents(getRecentSearches());
    setSelectedSearch(null);
  };

  return (
    <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Confirmation</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            search history.
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

export default DeleteRecent;
