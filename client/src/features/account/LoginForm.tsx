import { Box, Button, Paper, Typography } from "@mui/material";
import { LockOpen } from "@mui/icons-material";
import { Link } from "react-router";
import { useForm } from "react-hook-form"
import { useAccount } from "../../lib/hooks/useAccount";
import { useLocation, useNavigate } from "react-router";

interface IFormInput {
  email: string
  password: string
}

export default function LoginForm() {
    const { userLogin } = useAccount();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
    } = useForm<IFormInput>()

    const onSubmit = async (data: IFormInput) => {
            await userLogin.mutateAsync(data, {
            onSuccess: () => {
                navigate(location.state?.from || '/books');
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
                <Typography variant="h4">Sign in</Typography>
            </Box>
            <input placeholder="Email" {...register("email", { required: true, maxLength: 20 })} />
            <input placeholder="Password" type="password" {...register("password", { required: true, maxLength: 20 })} />
            <Button
                type='submit'
                variant="contained"
                size="large">Login</Button>
            <Typography sx={{ textAlign: 'center' }}>
                Don't have an account?
                <Typography sx={{ ml: 2 }} component={Link} to='/register' color='primary'>
                    Sign up
                </Typography>
            </Typography>
        </Paper>
    );
}