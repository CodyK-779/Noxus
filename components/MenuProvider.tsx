"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface MenuContextType {
  search: string;
  openMenu: boolean;
  openSearch: boolean;
  recents: string[] | [];
  setSearch: Dispatch<SetStateAction<string>>;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
  setRecents: Dispatch<SetStateAction<string[] | []>>;
  inputRef: RefObject<HTMLInputElement | null>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("Invalid context");
  }

  return context;
};

const MenuProvider = ({ children }: Props) => {
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [recents, setRecents] = useState<string[] | []>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <MenuContext.Provider
      value={{
        search,
        openMenu,
        openSearch,
        recents,
        setSearch,
        setOpenMenu,
        setOpenSearch,
        setRecents,
        inputRef,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
