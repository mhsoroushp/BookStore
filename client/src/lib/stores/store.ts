
import { uiStore } from "./uiStore";
import { createContext } from "react";

interface Store {
    uiStore: uiStore    
}

export const store: Store = {
    uiStore: new uiStore()
}

export const StoreContext = createContext(store)