import { useAccount } from "../../lib/hooks/useAccount";
import { Button } from "@mui/material";

export default function UserMenu() {
    const { currentUser, isUserLoading, logout } = useAccount();

    if (isUserLoading) return <div>Loading...</div>;

    return (
        <div>
            {currentUser?.displayName}
            <Button onClick={() => logout.mutate()} sx={{ color: 'inherit' }}>Logout</Button>
        </div>
    );
}