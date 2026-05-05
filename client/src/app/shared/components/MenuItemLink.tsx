import { Button } from "@mui/material";
import type { ReactNode } from "react";
import { NavLink } from "react-router";

export default function MenuItemLink({children, to}: {children: ReactNode, to: string}) {
    return (
        <NavLink
            to={to}
            className={({ isActive }: {isActive: boolean}) => (isActive ? 'active' : '')}
            style={{ textDecoration: 'none' }}
        >
            <Button
                sx={{
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: 'inherit',
                    '.active &': {
                      color: 'yellow'
                    },
                  }}
            >
                {children}
            </Button>
        </NavLink>
    )
}