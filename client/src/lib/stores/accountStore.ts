import { makeAutoObservable } from "mobx";

export class accountStore {
    currentUser: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentUser = (user: User | null) => {
        this.currentUser = user;
    }

    clearCurrentUser = () => {
        this.currentUser = null;
    }
}
