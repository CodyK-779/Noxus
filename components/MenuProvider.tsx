"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface MenuContextType {
  openMenu: boolean;
  openSearch: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
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
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <MenuContext.Provider
      value={{ openMenu, openSearch, setOpenMenu, setOpenSearch }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
