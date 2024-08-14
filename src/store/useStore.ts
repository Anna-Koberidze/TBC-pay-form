import { create } from "zustand";

interface StoreState {
  isFormContainerOpen: boolean;
  setIsFormContainerOpen: (isOpen: boolean) => void;
}

// Create the store
const useStore = create<StoreState>((set) => ({
  isFormContainerOpen: false,
  setIsFormContainerOpen: (isOpen: boolean) =>
    set({ isFormContainerOpen: isOpen }),
}));

export default useStore;
