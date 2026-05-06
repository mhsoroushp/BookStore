import { useAccount } from "../../lib/hooks/useAccount";

export default function UserMenu() {
    const { currentUser, isUserLoading, logout } = useAccount();

    if (isUserLoading) return <div>Loading...</div>;

    return (
        <div>
            {currentUser?.displayName || "User menu 1"}
            <button onClick={() => logout.mutate()}>Logout</button>
        </div>
    );
}