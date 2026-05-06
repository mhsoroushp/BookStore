import { Box, Button, Paper, Typography } from "@mui/material";
import { LockOpen } from "@mui/icons-material";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import type { RegisterSchema } from "../../lib/schemas/registerSchema";
import { useAccount } from "../../lib/hooks/useAccount";


export default function RegisterForm() {
    const { userRegister } = useAccount();

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<RegisterSchema>();

    const onSubmit = async (_data: RegisterSchema) => {
        await userRegister.mutateAsync(_data, {
            onError: (error) => {
                console.error("Registration failed:", error);
            }
        });
    };

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 3,
                gap: 3,
                maxWidth: 'md',
                mx: 'auto',
                borderRadius: 3
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, color: 'secondary.main' }}>
                <LockOpen fontSize='large' />
                <Typography variant="h4">Register</Typography>
            </Box>
            <input placeholder="email" {...register('email', { required: true, maxLength: 100 })} />
            <input placeholder="display name" {...register('displayName', { required: true, maxLength: 50 })} />
            <input type='password' placeholder="password" {...register('password', { required: true, minLength: 6 })} />
            <Button
                type='submit'
                loading={isSubmitting}
                variant="contained"
                size="large">
                Register
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
                Already have an account?
                <Typography sx={{ ml: 2 }} component={Link} to='/login' color='primary'>
                    Sign in
                </Typography>
            </Typography>
        </Paper>
    );
}