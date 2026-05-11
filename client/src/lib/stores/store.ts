import { uiStore } from "./uiStore";
import { createContext } from "react";
import { accountStore } from "./accountStore";

interface Store {
    uiStore: uiStore
    accountStore: accountStore
}

export const store: Store = {
    uiStore: new uiStore(),
    accountStore: new accountStore()
}

export const StoreContext = createContext(store)