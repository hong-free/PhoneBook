import React from "react";
import { create } from "zustand";

const usePhonebookStore = create((set) => ({
  phoneBook: [],
  addContact: (name, phoneNum) =>
    set((state) => ({
      phoneBook: [...state.phoneBook, { id: Date.now(), name, phoneNum }],
    })),
}));

export default usePhonebookStore;
