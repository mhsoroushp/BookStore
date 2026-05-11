import { useAccount } from "../../lib/hooks/useAccount";
import { Button } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";

export default function UserMenu() {
    const { accountStore } = useStore();
    const {isUserLoading, logout } = useAccount();

    if (isUserLoading) return <div>Loading...</div>;

    return (
        <div>
            {accountStore.currentUser?.displayName}
            <Button onClick={() => logout.mutate()} sx={{ color: 'inherit' }}>Logout</Button>
        </div>
    );
}